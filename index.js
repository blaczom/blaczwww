/**
 * Created by Administrator on 2014/11/4.
 */

var express = require('express');
var path = require('path');
var app = express();
app.set('port', 80);

var ls_www = process.cwd();
app.use(express.static(ls_www));

var server = app.listen(app.get('port'), function() {
  console.log( server.address());
  console.log(ls_www );
});