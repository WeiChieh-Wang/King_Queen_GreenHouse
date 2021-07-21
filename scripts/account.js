let valnm,valem,valpw;
let data1;
let nm=[],em=[],pw=[],mn=[],unm=[];
var i=0;
var o=document.getElementById("sign");
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
    unm.push([b.gsx$username.$t]);
    nm.push([b.gsx$name.$t]);
    em.push([b.gsx$email.$t]);
    pw.push([b.gsx$password.$t]);
    mn.push([b.gsx$管理者積分.$t]);
   })
  let fn = nm.flat(Infinity);
  let fun = unm.flat(Infinity);
  let fe = em.flat(Infinity);
  let fp = pw.flat(Infinity);
  let fm = mn.flat(Infinity);
  btn.addEventListener('click',()=>{
    valunm_o= document.getElementById("username").value;
    //valem= document.getElementById("email").value;
    valpw_o= document.getElementById("password").value;
    valunm = decode(valunm_o);
    valpw = decode(valpw_o);
    a=fun.indexOf(valunm) ;
    //b=fe.indexOf(valem);
    c=fp.indexOf(valpw); 
    if(a>-1){
      if (a==c){    
        console.log("輸入成功");
        window.localStorage.setItem('manager',fm[a]);
        window.localStorage.setItem('email',fe[a]);
        window.localStorage.setItem('name',fn[a]);
        window.localStorage.setItem('password',valpw);
        window.localStorage.setItem('username',valunm);
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
})}
  

function draw(){}

function decode(content){
  var de = "";
  for(var u=0; u<content.length; u++){
    var de_o = content.charCodeAt(u);
    de += String.fromCharCode(de_o - 2);
  }
  return de;
}