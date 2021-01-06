var http = require('http');
const { request } = require('https');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=0bc013b93c727d6d5bf9041bb93ad2bc&units=metric';

var server = http.createServer(function(request, response) {

var request = require('request');
request (url, function(err, res, body){
    var data = JSON.parse(body);
    
    response.write("hi");
    response.end();

});




}).listen(8081);