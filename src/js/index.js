//menu Hamburguer
const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function toggleMenu(event) {
    if (event.type === "touchstart"){
        event.preventDefault()
    }
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}


let fecharMenu = document.querySelectorAll(".fechar-menu")

fecharMenu.forEach(element =>{
    element.addEventListener("click", () =>{

        const nav = document.querySelector("nav");
        nav.classList.toggle("active");

    })

})



//cod carrossel minhas skills 

const controls = document.querySelectorAll(".control");
const skills = document.querySelectorAll(".skill")
const maxSkill = skills.length
let currentSkill = 0

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("arrow-left")
        if(isLeft){
            currentSkill -= 1;
        } else {
            currentSkill += 1;
        }

        if (currentSkill >= maxSkill){
            currentSkill = 0;
        }
        
        if (currentSkill < 0){
            currentSkill = maxSkill - 1;
        }

        skills.forEach((item) =>
            item.classList.remove("current-skill")
        );
            // scrollInToView usei para centralizar o elemento selecionado 
        skills[currentSkill].scrollIntoView({
            inline:"center",
            behavior:"smooth"
            
        });

        skills[currentSkill].classList.add("current-skill");
            
        console.log(skills[currentSkill]);
        
    }) 
  
});