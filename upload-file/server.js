let http = require("http");
let url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    let formData = "";
    let pathName = url.parse(request.url).pathname;
    request.setEncoding("utf-8");
    request.addListener("data", function(chunkData) {
      formData += chunkData;
      console.log("recevied post data", chunkData);
    });
    request.addListener("end", function() {
      console.log("postdata", formData);
      route({
        pathName,
        handle,
        response,
        formData
      });
    });
  }
  http.createServer(onRequest).listen(8080);
  console.log("server start");
}

exports.start = start;
console.log("end");
