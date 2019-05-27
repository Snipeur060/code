function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
var textarea = document.getElementById('a')
if (navigator.userAgent.indexOf('Mobile') !== -1) { document.getElementById('save').style.display = "none"; textarea.style.height = "100px";
}//resize for mobile
getGiftCode = function () {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < document.getElementById('long').value; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    code += '\n'
    document.getElementById('b').value += code;

} //generates codes

net = function () {
  document.getElementById('d').play();
  document.getElementById('long').readOnly = 'true';
  document.getElementById('long').value = '11';
  getGiftCode = function () {
    let code = '';
    let dict = '0123456789';
    for(var i = 0; i < 11; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    code += '\n'
    document.getElementById('b').value += code;

}
}

apple = function () {
  document.getElementById('d').play();
  document.getElementById('long').readOnly = 'true';
  document.getElementById('long').value = '16';
    getGiftCode = function () {
    let code = '';
    let dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 15; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    code += '\n'
    code = 'X'+code
    document.getElementById('b').value += code;

}
}

reset = function () {
  document.getElementById('long').readOnly = false;
  document.getElementById('long').value = '16';
    getGiftCode = function () {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 15; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    code += '\n'
    code = 'X'+code
    document.getElementById('b').value += code;

}
}
