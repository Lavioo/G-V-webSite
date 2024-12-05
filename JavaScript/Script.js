window.onload=cycleImage()


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
        window.location.href("/Home.html");
    }
}

function about(){
    alert("about");
}
  
function rechercher(){
    alert("Bonjour");
}


