//server file 1
var express = require('express');
var path = require('path')
var app = express();
var port = process.env.PORT || 8000;
var rootPath = path.normalize(__dirname + '/../client');
app.listen(port, function(){
	console.log("project1 is running on ", port);
});
app.use(express.static('client'));


app.get('/*', function(req, res){
	res.sendFile(path.join(rootPath + "/index.html"));
})


module.exports = app;
