function route({ pathName, handle, response, formData }) {
  if (typeof handle[pathName] === "function") {
    handle[pathName](response, formData);
  } else {
    console.log("There is no handle for" + pathName);
    response.writeHead(404, {
      "Content-Type": "text/plain"
    });
    response.write("404");
    response.end();
  }
}

exports.route = route;
