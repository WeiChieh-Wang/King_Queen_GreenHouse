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
  ID = document.getElementById("id").value << 1;
  NAME = document.getElementById("name").value << 1;
  EMAIL = document.getElementById("mail_address").value << 1;
  PHONE = document.getElementById("phone").value << 1;
  PASSWORD = document.getElementById("password").value << 1;
  password = document.getElementById("password").value.length;
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
