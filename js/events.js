var userDiscord = document.getElementById('discordUser');
var seleccion = document.createRange();
seleccion.selectNodeContents(userDiscord);
window.getSelection().removeAllRanges();
window.getSelection().addRange(seleccion);
var res = document.execCommand('copy');
window.getSelection().removeRange(seleccion);