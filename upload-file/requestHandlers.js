let queryStr = require("querystring");

function start(response) {
  let form =
    "<html>" +
    "<head>" +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    "</head>" +
    "<body>" +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    "</form>" +
    "</body>" +
    "</html>";

  response.writeHead(200, {
    "Content-Type": "text/html"
  });
  response.write(form);
  console.log("requestHandler start has begin");
}

function upload(response, formData) {
  console.log("requestHandler upload has begin");
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("data" + queryStr.parse(formData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;
