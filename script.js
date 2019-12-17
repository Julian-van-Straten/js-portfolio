document.title.innerHTML = "Julian van Straten - Portfolio";
document.body.innerHTML = "<div id='container'></div>";
const containerDiv = document.getElementById('container');

const navBar = {
    menuLinks : ["<a href='#' class='header-links'>home</a>", "<a href='#' class='header-links'>projects</a>", "<a href='#' class='header-links'>about</a>"]
}

function generateSections(){
    containerDiv.innerHTML = "<section id='home-section'></section>" +
    "<section id='projects-section'></section>" +
    "<section id='about-section'></section>";
    
}

function generateHeader(){
    const homeSection = document.getElementById('home-section');
    homeSection.innerHTML = "<header id='header'>" + 
    "<div id='logo'><h1>Julian van Straten</h1></div>" +
    "<div id='theme-selector-container'><div id='switch'><div id='toggle'></div></div></div>"+
    "<div id='nav'></div>" +
    "</header>";
}

function generateMenu(){
    for (let i = 0; i < navBar.menuLinks.length; i++){
        document.getElementById('nav').innerHTML += navBar.menuLinks[i];
    }
}


generateSections();
generateHeader();
generateMenu();


function changeToLight(){
    const header  = document.getElementById('header');
    const toggle = document.getElementById('toggle');
    const switchDiv = document.getElementById('switch');
    const headings = document.querySelector('h1');
    const links = document.getElementsByClassName('header-links');

    for (let i = 0; i < links.length; i++){
        links[i].style.color = "black";
    }

    header.style.backgroundColor = 'white';
    toggle.style.border = '2px solid black';
    switchDiv.style.border = '2px solid black';
    headings.style.color = 'black';
    document.getElementById('home-section').style.backgroundColor = 'white'
    
    
}

function changeToDark(){
    const header  = document.getElementById('header');
    const toggle = document.getElementById('toggle');
    const switchDiv = document.getElementById('switch');
    const headings = document.querySelector('h1');

    const links = document.getElementsByClassName('header-links');

    for (let i = 0; i < links.length; i++){
        links[i].style.color = "white";
    }
    
    header.style.backgroundColor = '';
    toggle.style.border = '';
    switchDiv.style.border = '';
    headings.style.color = '';
    document.getElementById('home-section').style.backgroundColor = ''
    
   
}









const toggle = document.getElementById('toggle');

toggle.onclick = () => {
    if (toggle.style.left === ""){
        toggle.style.left = "14px";
        changeToLight();
    } else {
        toggle.style.left = "";
        changeToDark();
    }
    
};