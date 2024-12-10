function news() {
    alert("Nouveaute");
}

function models(){
    alert("models");
}

function home(){
    if(window.location.pathname == "/Home.html"){
        window.location.reload();
    }else{
        window.location = '/Home.html';
    }
}

function about(){
    window.location ='/HTML/À_propos.html';
}
  
function rechercher(){
    alert("Bonjour");
}

function slideShow(){
    const photos = document.getElementsByClassName("cycle");
    const buttons = document.getElementsByClassName("slideButton");
    let i = 0;
    var displayedImg = photos[i];
    var buttonsActive = i;
    for(j = 0; j < buttons.length; j++){
        if (buttons[j] != button[displayedImg]){
            buttons[j].style.color = "#2D2D2A"
        }
    }
    

}
