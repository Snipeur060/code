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
document.getElementById('netflixprefix').style.display = 'none';
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
  document.getElementById('long').value = '12';
  document.getElementById('netflixprefix').style.display = 'block';
 getGiftCode = function () {
    let code = '';
    let ler = '';
    let netflix = '';
    let dict = '0123456789';
    let random3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var b = 0; b < 3; b++) {
        ler = ler + random3.charAt(Math.floor(Math.random() * random3.length));
    }
    for(var i = 0; i < 6; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
        ler = ler + code;
        code = ler;
    if (document.getElementById('netflix').value === '') {
        for (var c = 0; c < 3; c++) {
        netflix = netflix + random3.charAt(Math.floor(Math.random() * random3.length));
        }
        code = netflix + code
    } else {
      code = document.getElementById('netflix').value + code;
      code += '\n';
      document.getElementById('b').value += code;
    }
        code = document.getElementById('netflix').value + code;
        code += '\n';
        document.getElementById('b').value += code;
}
        }



apple = function () {
  document.getElementById('d').play();
  document.getElementById('long').readOnly = 'true';
  document.getElementById('long').value = '16';
  document.getElementById('netflixprefix').style.display = 'none';
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
  document.getElementById('netflixprefix').style.display = "none"
    getGiftCode = function () {
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 16; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    code += '\n'
    document.getElementById('b').value += code;

}
}
