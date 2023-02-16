const answersData = document.querySelector(".answers");
const answerButtons = document.querySelectorAll(".answerButton");
const navButtons = document.querySelector(".navButtons");


answerButtons.forEach(button  => {
  button.addEventListener("click", (e) =>
  {
   
   if(e.target.dataset.type ==="correct"){
    alert("CORRECT")
    
    
   }
   if(e.target.dataset.type === "wrong") {
    alert("WRONG")
   }

  })
})

