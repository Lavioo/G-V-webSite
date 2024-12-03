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

function cycleImage(){
    var cycle = document.getElementById('cycle');
    const lienCycle = ["/auto1 1.jpg", "/auto2.jpg", "/auto3.png", "/auto4.jpg"];
    var dir = "/ImagesCycle";
    if (!document.images)
        return;
    var num = 0
    var changeImg = function(){
        var length = lienCycle.length;
        cycle.src = dir + lienCycle[num++]
        if (num == length){
            num = 0;
        }
    };
    setInterval(changeImg(), 3000)
}

index = 0;

function setIndex(num){
    index = num;
}

function startSlideshow(containerId, interval) {
    const container = document.getElementById(containerId);
    const images = container.getElementsByTagName('img');
    
    for(i = 1; i <images.length; i++){
        images[i].style.display = 'none';
    }
    
    if (images.length === 0) return; // Aucune image

    // Affiche la première image
    images[index].style.display = 'block';

    // Changer d'image périodiquement
    setInterval(() => {
        images[index].style.display = 'none'; // Cacher l'image actuelle
        index = (index + 1) % images.length; // Passer à l'image suivante
        images[index].style.display = 'block'; // Afficher la nouvelle image
    }, interval);
}
