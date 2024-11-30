const toggler=document.getElementById('toggler');
const ul = document.getElementById('nav2');


toggler.addEventListener('click',()=>{
  
  if(toggler.innerHTML === "⇊")
  {
    toggler.innerHTML=`⇈`;
    
  }
  else
  {
    toggler.innerHTML=`⇊`;
    
   
  }
  ul.classList.toggle("active"); 

 })