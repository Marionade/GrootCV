
const bouton = document.getElementById("competences2");
const cible = document.getElementById("competences");
bouton.addEventListener("click", () => {
    cible.scrollIntoView({ behavior: "smooth" }); 
});

const bouton2 = document.getElementById("experiences2");
const cible2 = document.getElementById("experiences");
bouton2.addEventListener("click", () => {
    cible2.scrollIntoView({ behavior: "smooth" }); 
});

const bouton3 = document.getElementById("formation2");
const cible3 = document.getElementById("formation");
bouton3.addEventListener("click", () => {
    cible3.scrollIntoView({ behavior: "smooth" }); 
});

const bouton4 = document.getElementById("loisirs2");
const cible4 = document.getElementById("loisirs");
bouton4.addEventListener("click", () => {
    cible4.scrollIntoView({ behavior: "smooth" }); 
});

/* burger menu */ 
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var burger = document.getElementsByClassName("burger-icon")[0];

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
  burger.style = 'display:none';
}

function closeNav() {
  sidenav.classList.remove("active");
  burger.style = 'display:block';
}

const bouton5 = document.getElementById("competences3");
const cible5 = document.getElementById("competences");
bouton5.addEventListener("click", () => {
    cible5.scrollIntoView({ behavior: "smooth" }); 
});

const bouton6 = document.getElementById("experiences3");
const cible6 = document.getElementById("experiences");
bouton6.addEventListener("click", () => {
    cible6.scrollIntoView({ behavior: "smooth" }); 
});

const bouton7 = document.getElementById("formation3");
const cible7 = document.getElementById("formation");
bouton7.addEventListener("click", () => {
    cible7.scrollIntoView({ behavior: "smooth" }); 
});

const bouton8 = document.getElementById("loisirs3");
const cible8 = document.getElementById("loisirs");
bouton8.addEventListener("click", () => {
    cible8.scrollIntoView({ behavior: "smooth" }); 
});

const bouton9 = document.getElementById("grootId");
const cible9 = document.getElementById("profil");
bouton9.addEventListener("click", () => {
    cible9.scrollIntoView({ behavior: "smooth" }); 
});

const bouton10 = document.getElementById("grootSide");
const cible10 = document.getElementById("profil");
bouton10.addEventListener("click", () => {
    cible10.scrollIntoView({ behavior: "smooth" }); 
});

