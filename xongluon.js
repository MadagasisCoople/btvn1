var start = document.querySelector(".start")
var button1 = document.querySelector(".button1")
var button2 = document.querySelector(".button2")
var food1 = document.querySelector(".food1")
var food2 = document.querySelector(".food2")
var food3 = document.querySelector(".food3")
var food4 = document.querySelector(".food4")
var food5 = document.querySelector(".food5")
var food6 = document.querySelector(".food6")
var food7 = document.querySelector(".food7")
var food8 = document.querySelector(".food8")
var signup = document.querySelector(".signup")
var howitwork = document.querySelector(".howitwork")
var city = document.querySelector(".city")
var city1=document.querySelector(".city1")
var city2=document.querySelector(".city2")
var city3=document.querySelector(".city3")
var city4=document.querySelector(".city4")
var character = document.querySelector(".character")
var nv1 = document.querySelector(".nv1")
var nv2 = document.querySelector(".nv2")
var nv3 = document.querySelector(".nv3")

nv1.style.display = "none"
nv2.style.display = "none"
nv3.style.display = "none"
city1.style.display = "none"
city2.style.display = "none"
city3.style.display = "none"
city4.style.display = "none"
food1.style.display = "none"
food2.style.display = "none"
food3.style.display = "none"
food4.style.display = "none"
food5.style.display = "none"
food6.style.display = "none"
food7.style.display = "none"
food8.style.display = "none"
button1.addEventListener("click",btn1)
function btn1(){
start.style.backgroundImage = "none"
food1.style.display ="block"
food2.style.display ="block"
food3.style.display ="block"
food4.style.display ="block"
food5.style.display ="block"
food6.style.display ="block"
food7.style.display ="block"
food8.style.display ="block"
food1.addEventListener("mouseover",foody1)
food1.addEventListener("mouseout" ,fooly1)
food2.addEventListener("mouseover",foody2)
food2.addEventListener("mouseout" ,fooly2)
food3.addEventListener("mouseover",foody3)
food3.addEventListener("mouseout" ,fooly3)
food4.addEventListener("mouseover",foody4)
food4.addEventListener("mouseout" ,fooly4)
food5.addEventListener("mouseover",foody5)
food5.addEventListener("mouseout" ,fooly5)
food6.addEventListener("mouseover",foody6)
food6.addEventListener("mouseout" ,fooly6)
food7.addEventListener("mouseover",foody7)
food7.addEventListener("mouseout" ,fooly7)
food8.addEventListener("mouseover",foody8)
food8.addEventListener("mouseout" ,fooly8)
}
button2.addEventListener("click",btn2)
function btn2(){
    start.style.backgroundImage = "url(./picture/part2.png)" 
    button2.style.top = "0px"
    button2.style.left = "0px"
    button1.style.display = "none"
    button2.style.width= "0";
    button2.style.height= "0";
    button2.style.borderTop = "30px solid transparent";
    button2.style.borderRight= "60px solid black";
    button2.style.borderBottom= "30px solid transparent";
    button2.removeEventListener("click",btn2)
    button2.addEventListener("click",click2)
}
function click2(){
    start.style.backgroundImage = "url(./picture/part1.png)" 
    button2.style.top = "424px"
    button2.style.left = "255px"
    button1.style.display = "block"
    button2.style.width= "151px";
    button2.style.height= "40px";
    button2.style.borderRadius= "100px / 50px";
    button2.style.backgroundColor = "transparent"
    button2.removeEventListener("click",click2)
    button2.addEventListener("click",btn2)
}
function foody1 (){
    food1.style.backgroundImage="none"
    food1.style.backgroundColor = "black"
    food1.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food1.style.color = "white"
    food1.style.fontSize = "400%"
}
function foody2 (){
    food2.style.backgroundImage="none"
    food2.style.backgroundColor = "black"
    food2.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food2.style.color = "white"
    food2.style.fontSize = "400%"
}
function foody3 (){
    food3.style.backgroundImage="none"
    food3.style.backgroundColor = "black"
    food3.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food3.style.color = "white"
    food3.style.fontSize = "400%"
}
function foody4 (){
    food4.style.backgroundImage="none"
    food4.style.backgroundColor = "black"
    food4.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food4.style.color = "white"
    food4.style.fontSize = "400%"
}
function foody5 (){
    food5.style.backgroundImage="none"
    food5.style.backgroundColor = "black"
    food5.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food5.style.color = "white"
    food5.style.fontSize = "400%"
}
function foody6 (){
    food6.style.backgroundImage="none"
    food6.style.backgroundColor = "black"
    food6.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food6.style.color = "white"
    food6.style.fontSize = "400%"
}
function foody7 (){
    food7.style.backgroundImage="none"
    food7.style.backgroundColor = "black"
    food7.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food7.style.color = "white"
    food7.style.fontSize = "400%"
}
function foody8 (){
    food8.style.backgroundImage="none"
    food8.style.backgroundColor = "black"
    food8.innerHTML = "Dịch dã cứ ăn ăn.Bạn là con lợn à"
    food8.style.color = "white"
    food8.style.fontSize = "400%"
}

function fooly1 (){
    food1.style.backgroundImage="1.png"
    food1.innerHTML = ""
}
function fooly2 (){
    food2.style.backgroundImage="2.png"
  
    food2.innerHTML = ""
}

function fooly3 (){
    food3.style.backgroundImage="3.png"
    
    food3.innerHTML = ""
}

function fooly4 (){
    food4.style.backgroundImage="4.png"
 
    food4.innerHTML = ""
}

function fooly5 (){
    food5.style.backgroundImage="5.png"
   
    food5.innerHTML = ""
}

function fooly6 (){
    food6.style.backgroundImage="6.png"
   
    food6.innerHTML = ""
}

function fooly7 (){
    food7.style.backgroundImage="7.png"
  
    food7.innerHTML = ""
}
function fooly8 (){
    food8.style.backgroundImage="8.png"
   
    food8.innerHTML = ""
}
signup.addEventListener("click",signin)
function signin (){
    start.style.backgroundImage = "url(./picture/part5.png)"
    start.style.backgroundPosition = "right"
    signup.innerHTML = "Lười làm box quá sorry anh :3"
}
howitwork.addEventListener("click",howitworks)
function howitworks (){
    start.style.backgroundImage = "url(./picture/part4.png)"
    start.style.backgroundPosition = "center"
    howitwork.innerHTML = ""
    howitwork.style.top = "0px"
    howitwork.style.left = "0px"
    howitwork.style.width= "0";
    howitwork.style.height= "0";
    howitwork.style.borderTop = "30px solid transparent";
    howitwork.style.borderRight= "60px solid black";
    howitwork.style.borderBottom= "30px solid transparent";
    howitwork.removeEventListener("click",howitworks)
    howitwork.addEventListener("click",howitwreck)
}
function howitwreck (){
    start.style.backgroundImage = "url(./picture/part1.png)" 
    howitwork.style.top = "76px";
    howitwork.style.left = "706px";
    howitwork.style.height ="19px";
    howitwork.style.backgroundColor= "transparent";
    howitwork.style.width="135px";
    howitwork.style.borderTop = "0px solid transparent";
    howitwork.style.borderRight= "0px solid black";
    howitwork.style.borderBottom= "0px solid transparent";
    howitwork.addEventListener("click",howitworks)
    howitwork.removeEventListener("click",howitwreck)
}
city.addEventListener("click",cities)
function cities (){
    city1.style.display = "block"
    city2.style.display = "block"
    city3.style.display = "block"
    city4.style.display = "block"
    city.innerHTML = "Back"
    city.style.top = "46%"
    city.style.left = "46%"
    city.style.width = "8%"
    city.style.height = "4%"
    city.style.backgroundColor = "black"
    city.style.color = "white"
    city.style.textAlign = "center"
    city.addEventListener("click",citieses)
}
function citieses (){
    city.innerHTML = "" 
    city1.style.display= "none"
    city2.style.display= "none"
    city3.style.display= "none"
    city4.style.display= "none"
    city.style.top = "76px";
    city.style.left = "932px";
    city.style.height ="19px";
    city.style.backgroundColor= "transparent";
    city.style.width="135px";
    city.style.borderTop = "0px solid transparent";
    city.style.borderRight= "0px solid black";
    city.style.borderBottom= "0px solid transparent"
    city.removeEventListener("click",citieses)
}
character.addEventListener("click",characteristic)
function characteristic () {
    nv1.style.display = "block"
    nv2.style.display = "block"
    nv3.style.display = "block"
    nv1.addEventListener("click",nv11)
    nv2.addEventListener("click",nv21)
    nv3.addEventListener("click",nv31)
    character.innerHTML = "Chọn 1 nhân vật đi"
    character.style.width= "99%"
    character.style.color = "white"
    character.style.left = "0"
    character.style.top = "0"
    character.style.fontSize = "195%"
}
function nv11 (){
    nv1.style.backgroundImage = "none"
    nv1.style.backgroundColor = "white"
    nv1.innerHTML = "Lừa cả đấy.Bộ k thấy có nút Sign up rồi à mà còn ham lần nữa??"
    nv1.style.fontSize = "400%"
    setTimeout(function(){
    nv1.style.display = "none"
    nv2.style.display = "none"
    nv3.style.display = "none"
    character.style.top =  "76px";
    character.style.left =" 1135px";
    character.style.backgroundColor =  "transparent";
    character.style.width = "76px";
    character.innerHTML = "."
    character.style.fontSize = "100%"
    nv1.style.backgroundPosition= "center"
    nv1.style.backgroundImage= "url(./picture/customer-1.jpg)"
    nv1.style.backgroundSize ="cover"
    nv1.innerHTML=""},2000)
}
function nv21 (){
    nv2.style.backgroundImage = "none"
    nv2.style.backgroundColor = "white"
    nv2.innerHTML = "Lừa cả đấy.Bộ k thấy có nút Sign up rồi à mà còn ham lần nữa??"
    nv2.style.fontSize = "400%"
    setTimeout(function(){
        nv1.style.display = "none"
        nv2.style.display = "none"
        nv3.style.display = "none"
        character.style.top =  "76px";
        character.style.left =" 1135px";
        character.style.backgroundColor =  "transparent";
        character.style.width = "76px";
        character.innerHTML = "."
        character.style.fontSize = "100%"
        nv2.style.backgroundPosition= "center"
        nv2.style.backgroundImage= "url(./picture/customer-2.jpg)"
        nv2.style.backgroundSize ="cover"
        nv2.innerHTML=""},2000)
}
function nv31 (){
    nv3.style.backgroundImage = "none"
    nv3.style.backgroundColor = "white"
    nv3.innerHTML = "Lừa cả đấy.Bộ k thấy có nút Sign up rồi à mà còn ham lần nữa??"
    nv3.style.fontSize = "400%"
    setTimeout(function(){
        nv1.style.display = "none"
        nv2.style.display = "none"
        nv3.style.display = "none"
        character.style.top =  "76px";
        character.style.left =" 1135px";
        character.style.backgroundColor =  "transparent";
        character.style.width = "76px";
        character.innerHTML = "."
        character.style.fontSize = "100%"
        nv3.style.backgroundPosition= "center"
        nv3.style.backgroundImage= "url(./picture/customer-3.jpg)"
        nv3.style.backgroundSize ="cover"
        nv3.innerHTML=""},2000)
}