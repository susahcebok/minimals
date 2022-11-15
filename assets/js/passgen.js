var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPWRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var symbols = "!@#$%^&*-_=+\|:;',<.>/?~".split("");

var button = $("#new");
var password = $("#password");

button.click(function() {
  var low = $("#low").is(":checked");
  var up = $("#up").is(":checked");
  var num = $("#num").is(":checked");
  var sym = $("#sym").is(":checked");
  var dictionary = [].concat(
    low ? lowercase : [],
    up ? uppercase : [],
    num ? numbers : [],
    sym ? symbols : []
  );
  if (dictionary.length === 0) {
    password.text("Select symbol types");
    return;
  }
  var length = parseInt($("#length").val());
  if (isNaN(length)) {
    password.text("Enter password length");
    return;
  }
  var pw = "";
  for (var i = 0; i < length; i++) {
    pw += dictionary[Math.floor(Math.random() * dictionary.length)];
  }
  password.text(pw);
});
