var soap = require('soap');

var apiURL = '';

var args = {environmentName: , userName: '', password: ''};

soap.createClient(apiURL, function(err, client) {
      client.MyFunction(args, function(err, result) {
          console.log(result);
      });
  });


 var myService = {
      MyService: {
          MyPort: {
              MyFunction: function(args) {
                  return {
                      environmentName: args.environmentName,
                      userName: args.userName,
                      password: args.password
                  };
              },

              // This is how to define an asynchronous function.
              MyAsyncFunction: function(args, callback) {
                  // do some work
                  callback({
					  environmentName: args.environmentName,
                      userName: args.userName,
                      password: args.password                  
                  });
              }

              // This is how to receive incoming headers
              // HeadersAwareFunction: function(args, cb, headers) {
              //     return {
              //         name: headers.Token
              //     };
              // },

              // // You can also inspect the original `req`
              // reallyDetailedFunction: function(args, cb, headers, req) {
              //     console.log('SOAP `reallyDetailedFunction` request from ' + req.connection.remoteAddress);
              //     return {
              //         name: headers.Token
              //     };
              // }
          }
      }
  };

  var xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

  //http server example
  var server = http.createServer(function(request,response) {
      response.end("404: Not Found: " + request.url);
  });

  server.listen(3000);
  soap.listen(server, '/wsdl', myService, xml);

  //express server example
  var app = express();
  //body parser middleware are supported (optional)
  app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
  app.listen(8001, function(){
      //Note: /wsdl route will be handled by soap module
      //and all other routes & middleware will continue to work
      soap.listen(app, '/wsdl', myService, xml);
  });
// var express = require('express');

// var app = express();

// app.use(express.static('public'));

// app.listen(3000, function () {
// 	console.log('Express Server open on Port 3000')
// });