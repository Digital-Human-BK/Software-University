function requestValidator(obj) {
  const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const uriParrtern = /^\*$|^[a-zA-Z0-9.]+$/;
  const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const mesagePattern = /^[^<>\\&'"]*$/;

  if (obj.method == undefined || validMethods.includes(obj.method) == false) {
    throw new Error(`Invalid request header: Invalid Method`);
  } else if (obj.uri == undefined || uriParrtern.test(obj.uri) == false) {
    throw new Error(`Invalid request header: Invalid URI`);
  } else if (obj.version == undefined || validVersion.includes(obj.version) == false) {
    throw new Error(`Invalid request header: Invalid Version`)
  } else if (obj.message == undefined || mesagePattern.test(obj.message) == false) {
    throw new Error(`Invalid request header: Invalid Message`)
  } else {
    return obj;
  }
}
console.log(requestValidator(
  {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
));
try {
  requestValidator(
    {
      method: 'OPTIONS',
      uri: 'git.master',
      version: 'HTTP/1.1',
      message: '-recursive'
    }
  )
} catch (er) {
  console.log(er.message);
}

console.log(requestValidator(
  {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
  }

))