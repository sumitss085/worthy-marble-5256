


let add=document.querySelector(".add")
add.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="cart.html"
    
})

// this is for login popup

let login=document.getElementById("popup")
let xyz=document.querySelector("#otp")

function openpopup(){
    login.classList.add("open_popup")
}

function closepopup(xyz){

 if(xyz!=""){
    alert("OTP SEND")
    login.classList.remove("open_popup")
 }
 
}




// this is for sliding image
let img_link=["https://imageprod.fraazo.com/fraazo-prod/web_ban/4923.png",
              
            "https://imageprod.fraazo.com/fraazo-prod/web_ban/4924.png",
              
              "https://imageprod.fraazo.com/fraazo-prod/web_ban/4985.png",
              
              "https://imageprod.fraazo.com/fraazo-prod/web_ban/4986.png",
             
               "https://imageprod.fraazo.com/fraazo-prod/web_ban/4820.png",
              
              "https://imageprod.fraazo.com/fraazo-prod/web_ban/5135.png"]


              let rbtn=document.querySelector("#rbtn")
              let lbtn=document.querySelector("#lbtn")
              let crauser=document.querySelector("#crauser")


              let imgstate=0;

              rbtn.addEventListener("click",function(){
                imgstate++;
                if(imgstate==img_link.length){
                    imgstate=0
                }
                crauser.src=img_link[imgstate]
               
              })

              lbtn.addEventListener("click",function(){
                imgstate--;
                if(imgstate<0){
                    imgstate=img_link.length-1
                }
                crauser.src=img_link[imgstate]
               
              })


 let fruit=document.querySelector("#fruit")
fruit.addEventListener("click",function(){
    event.preventDefault()
    window.location.href="fruit.html"
    
})

let vegi=document.querySelector("#vegi")
vegi.addEventListener("click",function(){
    event.preventDefault()
    window.location.href="vegitables.html"
    
})


// this is for send downloading link function

let form=document.querySelector("form")

form.addEventListener("submit",function(){
    event.preventDefault()
    let num=document.querySelector("#num").value
  if(num!=""){
    alert("Downloading Link Send To Your Mobile")}

  
})


let download=document.querySelector("#store>img")
download.addEventListener("click",function(event){
    event.preventDefault()
window.location.href="https://play.google.com/store/apps/details?id=com.fraazo.app"
})

let downloa=document.querySelector("#store>img+img")
downloa.addEventListener("click",function(event){
    event.preventDefault()
    window.location.href="https://apps.apple.com/us/app/fraazo/id1243998420"
})


