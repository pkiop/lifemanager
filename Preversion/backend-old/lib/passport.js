var db = require('./db');
var lowdb = require('./lowdb');
var shortid = require('shortid');

var bcrypt = require('bcrypt');

module.exports = function (app) {

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy,
        GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        console.log('serializeUser', user);
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        var user = lowdb.get('users').find({
            id: id
        }).value();
        console.log('deserializeUser', id, user);
        done(null, user);
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function (email, password, done) {
            console.log('LocalStrategy', email, password);
            var user = lowdb.get('users').find({
                email: email
            }).value();
            if (user) {
                bcrypt.compare(password, user.password, function(err,result){
                    if(result){
                        return done(null, user, {
                            message: 'Welcome.'
                        });
                    } else {
                        return done(null, false, {
                            message: 'Password is not correct.'
                        });
                    }
                });
            } else {
                return done(null, false, {
                    message: 'There is no email.'
                });
            }
        }
    ));
    var googleCredentials = require('../config/google.json')
    console.log(googleCredentials);
    passport.use(new GoogleStrategy({
        clientID: googleCredentials.web.client_id,
        clientSecret: googleCredentials.web.client_secret,
        callbackURL: googleCredentials.web.redirect_uris[0]
    },
        function (accessToken, refreshToken, profile, done) {
            console.log('GoogleStrategy', accessToken, refreshToken, profile);
            var email = profile.emails[0].value;
            var user = lowdb.get('users').find({email:email}).value();
            if(user){
                user.googleId = profile.id;
                lowdb.get('users').find({id:user.id}).assign(user).write();
            } else {
                user = {
                    id:shortid.generate(),
                    email:email,
                    displayName:profile.displayName,
                    googleId:profile.id
                }
                lowdb.get('users').push(user).write();
            }
            done(null, user);
        }
    )); // install code

    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['https://www.googleapis.com/auth/plus.login', 'email'] //지금은 로그인 기능만 필요하기 때문에 이것만 구글 지도등의 정보 원하면 추가 가능 
        }));

    app.get('/auth/google/callback',
        passport.authenticate('google', { 
            failureRedirect: '/auth/login'  // login 실패했을 때 갈 곳 
        }),
        
        function (req, res) {
            res.redirect('/'); // 성공했을 때 갈 곳 
        });
    return passport;
}