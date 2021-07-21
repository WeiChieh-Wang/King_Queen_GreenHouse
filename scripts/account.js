let name_val,email_val,password_val;
let data1;
let name_push=[],email_push=[],password_push=[],manager_push=[],username_push=[];
var i=0;
var o=document.getElementById("sign");
let username_push_flat_com=[], password_push_flat_com=[];


function preload(){
  btn= document.getElementById("submit");
  data1=loadJSON('https://spreadsheets.google.com/feeds/list/1S5Emd0mzEf96JQc2OR17NzqQUJB8jwwMek0k4ZA2iWo/od6/public/values?alt=json')
  var o=document.getElementById("sign");
  user1=window.localStorage.getItem('email');
  if(user1==null){
    o.style.display='show';
  }
  else{
    o.style.display='none';
  }
}

function out(){
  var o=document.getElementById("sign");
  localStorage.removeItem('email');
  localStorage.removeItem('manager');
  localStorage.removeItem('password');
  localStorage.removeItem('username');
  localStorage.removeItem('name');
  o.style.display='show';
  window.location.href='../index.html';
}

function setup(){
  data1.feed.entry.forEach((b)=>{
    username_push.push([b.gsx$username.$t]);
    name_push.push([b.gsx$name.$t]);
    email_push.push([b.gsx$email.$t]);
    password_push.push([b.gsx$password.$t]);
    manager_push.push([b.gsx$管理者積分.$t]);
  })
  let name_push_flat = name_push.flat(Infinity);
  let username_push_flat = username_push.flat(Infinity);
  let email_push_flat = email_push.flat(Infinity);
  let password_push_flat = password_push.flat(Infinity);
  let manager_push_flat = manager_push.flat(Infinity);
  username_push_flat_com = decode(username_push_flat);
  password_push_flat_com = decode(password_push_flat);
  btn.addEventListener('click',()=>{
    username_val= document.getElementById("username").value;
    //valem= document.getElementById("email").value;
    password_val= document.getElementById("password").value;
    a=username_push_flat_com.indexOf(username_val) ;
    //b=fe.indexOf(valem);
    c=password_push_flat_com.indexOf(password_val); 
    if(a>-1){
      if (a==c){    
        console.log("輸入成功");
        window.localStorage.setItem('manager',manager_push_flat[a]);
        window.localStorage.setItem('email',email_push_flat[a]);
        window.localStorage.setItem('name',name_push_flat[a]);
        window.localStorage.setItem('password',password_val);
        window.localStorage.setItem('username',username_val);
        console.log(window.localStorage.getItem('manager'));
        alert('登入成功');
        window.location.href='../index.html';
      }
      else{
        alert('密碼錯誤');
      }
    }
    if(a==-1){
      alert('輸入錯誤');
    }
  })
}

function decode(content_test){
  var de = "";
  for(var u=0; u<content_test.length; u++){
    var de_o = content_test.charCodeAt(u);
    de += String.fromCharCode(de_o - 2);
  }
  return de;
}
