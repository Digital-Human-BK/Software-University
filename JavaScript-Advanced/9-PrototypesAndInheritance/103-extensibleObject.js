function extensibleObject() {
  const proto = {};
  const extObj = Object.create(proto);

  extObj.extend = function(template) {
    for(const key in template ){
      if (typeof template[key] === 'function') {
        proto[key] = template[key];
      } else {
        extObj[key] = template[key];
      }
    }
  }
  return extObj;
}


const myObj = extensibleObject();

const template = {
  extensionMethod: function () { },
  extensionProperty: 'someString'
}
myObj.extend(template);
console.log(myObj);
