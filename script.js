var s=document.querySelector('h5');

var btn=document.querySelector('#add');
var flag=0;


btn.addEventListener('click',function(){
   if(flag==0){
    s.innerHTML="Friends"
    s.style.color="Green";
    btn.innerHTML="Remove Friend"
    btn.style.backgroundColor="grey"
    flag=1;

   }
   else{
    s.innerHTML="Stranger"
    s.style.color="Red";
    btn.innerHTML="Add Friend"
    btn.style.backgroundColor="blue"

    flag=0;
   

   }
    

});




