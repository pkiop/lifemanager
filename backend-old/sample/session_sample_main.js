var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var express = require('express');
var app = 

var indexRouter = require('./routes/index');
var topicRoute = require('./route/topic');


