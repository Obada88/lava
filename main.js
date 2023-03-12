
// CLick Bars Toggle

 const Click_Bars= document.getElementById('bars');

Click_Bars.onclick=function(){
    Click_Bars.style.transition='1s ease-in-out'
    Click_Bars.classList.toggle('fa-xmark')
}
