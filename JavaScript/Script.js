function news() {
    alert("Nouveaute")
}

function models(){
    alert("models")
}

function home(){
    if(window.location.pathname == "/Home.html"){
        window.location.reload()
    }else{
        window.location.href("/Home.html")
    }
}

function about(){
    alert("about")
}
  
function rechercher(){
    alert("Bonjour")
}

function cycleImage(){
    image_auto = new Set ["Images\auto1 1.jpg", "Images\auto2.jpg", "Images\auto3.png", "Images\auto4.jpg"]
    let img  = []
    for (let i = 0; i < 3; i ++){
        img[i] = document.createElement("img" + i)
        img[i].src = image_auto [i]
    }
    while(true){
        for (let i = 0; i <image_auto.length; i++){
        document.body.appendChild(img[i]);
        setTimeout(3000)
        }
    }
}
