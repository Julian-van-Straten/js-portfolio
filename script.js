document.title.innerHTML = "Julian van Straten - Portfolio";
document.body.innerHTML = "<div id='container'></div>";
const containerDiv = document.getElementById('container');

const navBar = {
    menuLinks : ["<a href='#' class='header-links'>home</a>", "<a href='#' class='header-links'>projects</a>", "<a href='#' class='header-links'>about</a>", "<div id='theme-selector-container'><div id='switch'><div id='toggle'></div></div></div>"]
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
    "<div id='nav'></div>" +
    "</header>"+
    "<div id='hero-container'>"+
    "<h1 id='hero-heading'>Hello, my name is Julian</h1>" +
    "<p id='hero-paragraph'>I'm a front end developer<span id='cursor-blink'>_</span></p>"+
    "</div>";
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
        links[i].style.color = "#6c567b";
    }

    header.style.backgroundColor = '#f8b195';
    toggle.style.border = '2px solid #6c567b';
    toggle.style.backgroundColor = '#6c567b';
    switchDiv.style.border = '2px solid #6c567b';
    headings.style.color = '#6c567b';
    document.getElementById('home-section').style.backgroundColor = '#f8b195'
    toggle.style.left = "20px";
    document.getElementById('hero-heading').style.color = "#6c567b";
    document.getElementById('hero-paragraph').style.color = "#6c567b";
    document.getElementById('cursor-blink').style.color = "white";
    
    
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
    toggle.style.backgroundColor = '';
    headings.style.color = '';
    document.getElementById('home-section').style.backgroundColor = '';
    toggle.style.left = "0px";
    document.getElementById('hero-heading').style.color = "";
    document.getElementById('hero-paragraph').style.color = "";
    document.getElementById('cursor-blink').style.color = "";
    
   
}

function generateRandomCircles(divTarget){
    
    let amountOfCircles = Math.floor((Math.random() * 500) + 10);

    for (let i = 0; i < amountOfCircles; i++){
        let randomNumber = Math.floor((Math.random() * 10) + 1);
        let randomPositionX = Math.floor((Math.random() * 300) + -60);
        let randomPositionY = Math.floor((Math.random() * 2000) + 10);
        let randomOpacity = (Math.random() * 0.3).toFixed(1);
        document.getElementById(divTarget).innerHTML += `<div class='circles' id='circle${i}'></div>`;
        document.getElementById(`circle${i}`).style.cssText = "position: relative; z-index: 5;"+ `top: ${randomPositionX}px; left:${randomPositionY}px; opacity: ${randomOpacity};` +"width: "+ randomNumber + "px; height: " + randomNumber + "px; background-color: white; border-radius: 50%";
    }
    
    
}

generateRandomCircles('home-section');



let x = 0;

toggle.onclick = () => {
const toggle = document.getElementById('toggle');


    if (x === 0){
        x++;
        changeToLight();
        
       
    } else{
        x--;
        changeToDark();
        
    }
    
};

function populateProjects(){
    const projectsSection = document.getElementById('projects-section');
    projectsSection.innerHTML = "<div class='page-titles'><h1>Projects</h1></div>"+
    "<div id='projects-container'><div class='projects-boxes'></div><div class='projects-boxes'></div><div class='projects-boxes'></div></div>";
}

populateProjects();