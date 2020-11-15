module.exports = {

    isOwner: function (request, response) {
        if (request.session.is_logined) {
            return true;
        } else {
            return false;
        }
    },


    statusUI: function (request, response) {
        var authStatusUi = '<a href="/auth/login">login</a>'
        if (this.isOwner(request, response)) {
            authStatusUi = `${request.session.nickname} | <a href="/auth/logout">logout</a>`;
        }
        return authStatusUi;
    }
}
