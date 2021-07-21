let exeurl = 'https://script.google.com/macros/s/AKfycbz52VBKAPkhSINsSpQ3liRnWRv_duC9P6FdHs6XPbgW7Vx3ilKy9Rn5ltOhs2scSrvC/exec';

function preload(){
  GoogleJSON = loadJSON("https://spreadsheets.google.com/feeds/list/1S5Emd0mzEf96JQc2OR17NzqQUJB8jwwMek0k4ZA2iWo/od6/public/values?alt=json");
  LOAD = document.getElementById("loadding");
  LOAD2 = document.getElementById("loadding2");
  LOAD.style.display = "none";
  LOAD2.style.display = "none";
  FORM = document.getElementById("form1");
}

let nameCheck;
var Check = 0;

function setup(){
  var a = GoogleJSON.feed.entry.length;
}

function getDATA(){
  ID_o = document.getElementById("id").value;
  NAME_o = document.getElementById("name").value;
  EMAIL_o = document.getElementById("mail_address").value;
  PHONE_o = document.getElementById("phone").value;
  PASSWORD_o = document.getElementById("password").value;
  password = document.getElementById("password").value.length;
  ID = encode(ID_o);
  NAME = encode(NAME_o);
  EMAIL = encode(EMAIL_o);
  PHONE = encode(PHONE_o);
  PASSWORD = encode(PASSWORD_o);
}

function run(){
  getDATA();
  var a = GoogleJSON.feed.entry.length;
  nameCheck = ID;
  for(var i = 0; i < a; i++){
    var b = GoogleJSON.feed.entry[i].gsx$username.$t;
    var c = GoogleJSON.feed.entry[i].gsx$name.$t;
    if(nameCheck == b){
      Check=1;
    }
  }
  if(Check==0){
    LOAD.style.display="";
    FORM.style.display = "none";
    if(password>=6){
      $.post(exeurl,{
        "method":"write",
        "id":ID,
        "name":NAME,
        "mail_address":EMAIL,
        "phone":PHONE,
        "password":PASSWORD
      },
      function (data) {
        alert(data);
        LOAD2.style.display="";
        setTimeout("javascript:location.href='https://weichieh-wang.github.io/King_Queen_GreenHouse/index.html'", 3000);
      })
    }
    else{
      alert("密碼低於6位數，請補齊後再送出");
    }
  }
  else{
    alert("帳號重複");
    window.location.href = "https://weichieh-wang.github.io/King_Queen_GreenHouse/webpages/register.html";
  }
}

function encode(content){
  var en = "";
  for(var u=0; u<content.length; u++){
    var en_o = content.charCodeAt(u);
    en += String.fromCharCode(en_o + 2);
  }
  return en;
}

function decode(content){
  var de = "";
  for(var u=0; u<content.length; u++){
    var de_o = content.charCodeAt(u);
    de += String.fromCharCode(de_o - 2);
  }
  return de;
}