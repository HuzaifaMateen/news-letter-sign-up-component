let input = document.querySelector(".email");

let btn = document.querySelector(".btn");

let butn = document.querySelector(".butn");
let error = document.querySelector(".error");
let newsLetter = document.querySelector(".container");
let submission = document.querySelector(".card");
btn.addEventListener("click", function(){
    if(input.value === ""){
        input.style.border = "1px solid hsl(4, 100%, 67%)";
        error.textContent = "Input field is empty";
    }
    else if(input.value.indexOf("@") === -1 || input.value.indexOf(".com") === -1){
        input.style.border = "1px solid hsl(4, 100%, 67%)";
        error.textContent = "Valid Email required";
    }
    else{
        newsLetter.classList.add("active");
        submission.classList.remove("active");
    }
});

butn.addEventListener("click", function(){
    submission.classList.add("active");
});