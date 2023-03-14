const featuresBtns = document.querySelectorAll(".features-btns");
const featuresTabs = document.querySelector(".feature-tabs");
const featureContent = document.querySelectorAll(".feature-content");


const preguntas = document.querySelectorAll(".preguntas")



featuresTabs.addEventListener("click", function(e){
    const id= e.target.dataset.id;
    if(id){
        featuresBtns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
    })

    featureContent.forEach(function(b){
        b.classList.remove("active");
    })

    const contSelec = document.getElementById(id);
    contSelec.classList.add("active")

    }
});




preguntas.forEach(function(pregunta){
    const btn = pregunta.querySelector(".btn-pregunta")
    btn.addEventListener("click",function(){
        preguntas.forEach(function(item){
            if(item!==pregunta){
                item.classList.remove("enseñartexto")
            }
        })
pregunta.classList.toggle("enseñartexto")
    });
});