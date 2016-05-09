function setInfo(){
  var id=""+window.location.href;
  idFull=parseInt(id.charAt(id.length-3)+""+id.charAt(id.length-2)+""+id.charAt(id.length-1))-1;
  set(idFull);
}

function set(setID){
  var pitch=pitchforks[setID];
  idFull=setID;
  sum=0;
  for (i=0;i<pitch.length;i++){sum+=pitch.charCodeAt(i);}
  document.getElementById("mainDisplay").innerHTML=pitchforks[setID];
  document.getElementById("prodName").innerHTML=names[setID];
  document.getElementById("prodID").innerHTML=ids[setID];
  document.getElementById("prodDesc").innerHTML=descs[setID];
  document.getElementById("price").innerHTML=sum+" karma";
  
  //table-specific
  document.getElementById("tPrice").innerHTML=sum+" karma";
  document.getElementById("tModel").innerHTML=ids[setID];
  document.getElementById("tLength").innerHTML=""+pitch.length*43.52+" cm";
  document.getElementById("tWeight").innerHTML=""+Math.floor(pitch.length*43.52*17)/1000.0+" kg";
  document.getElementById("tWarranty").innerHTML=""+(sum%7+2)+" yrs";
  document.getElementById("tCountry").innerHTML=countries[sum%7];
  setItems(setID);
}

function setItems(setID){
  var no=0;
  for (i=0;i<items;i++){
    if (sessionStorage.getItem("item"+i)==pitchforks[setID]&&sessionStorage.getItem("item"+i)!=""){no++;}
  }
  document.getElementById("tItems").innerHTML=no;
  document.getElementById("tTotal").innerHTML=no*sum;
  if (sessionStorage.getItem("userBalance")!=null){
    document.getElementById("cartInfo").innerHTML="Your cart ("+sessionStorage.getItem("userItems")+") | Balance: "+sessionStorage.getItem("userBalance");
  }else{
    document.getElementById("cartInfo").innerHTML="Your cart (0)";
    document.getElementsByClassName("loginbtn")[0].style.display="block";
    //document.getElementsByClassName("add")[0].setAttribute("onClick","javascript: login();");
    document.getElementsByClassName("add")[0].innerHTML="log in to add to cart";
    for (n=0;n<3;n++){
      document.getElementsByClassName("login_required")[n].style.display="none";
    }
  }
  if (no==0){
    document.getElementsByClassName("add")[0].style.width="24.4vw";
    document.getElementsByClassName("add")[0].style.right="2vw";
    document.getElementsByClassName("add")[0].style.borderRadius="3px";
  }else{
    document.getElementsByClassName("add")[0].style.width="18vw";
    document.getElementsByClassName("add")[0].style.right="8.4vw";
    document.getElementsByClassName("add")[0].style.borderRadius="3px 0 0 3px";
  }
}

function moar(inID){
  window.location.href="http://pitchforkemporium.github.io/products/classic#PF00"+""+(inID+1);
  set(inID);
}

function login(){
  var tmp=window.location.href,rTo="";
  var slashPos=0;
  for (m=tmp.length-1;m>=0;m--){
    if (tmp.charAt(m)=='/'){
      slashPos=m;
      break;
    }
  }
  for (m=slashPos+1;m<tmp.length;m++){rTo+=tmp.charAt(m);}
  window.location.href="http://pitchforkemporium.github.io/login?return_to="+rTo+"";
}

function clearCart(){
  for (i=0;i<items;i++){
    sessionStorage.removeItem("item"+i);
    sessionStorage.removeItem("info"+i);
  }
  sessionStorage.setItem("items",0);
  items=0;
  sessionStorage.setItem("userBalance",sessionStorage.getItem("userKarma"));
  sessionStorage.setItem("userItems",0);
  setItems(idFull);
}

function setCart(){
  if (sessionStorage.getItem("userBalance")!=null){
    sessionStorage.setItem("item"+items,document.getElementById("mainDisplay").innerHTML);
    sessionStorage.setItem("info"+items,document.getElementById("prodID").innerHTML);
    items++;
    sessionStorage.setItem("userItems",parseInt(sessionStorage.getItem("userItems"))+1);
    var bal=sessionStorage.getItem("userBalance")-sum;
    sessionStorage.setItem("userBalance",bal)
    sessionStorage.setItem("items",items);
    setItems(idFull);
  }else{login();}
}

function removeCart(){
  for (i=0;i<items;i++){
    if (sessionStorage.getItem("item"+i)==pitchforks[idFull]){
      sessionStorage.setItem("item"+i,"");
      break;
    }
  }
  sessionStorage.setItem("userItems",sessionStorage.getItem("userItems")-1);
  var bal=parseInt(sessionStorage.getItem("userBalance"))+parseInt(sum);
  sessionStorage.setItem("userBalance",bal)
  setItems(idFull);
}
