function perloadfunction()
{
    var load=document.getElementById('loading');
    loading.style.display = 'none';
}
$(document).ready(()=>{
    var typed=new Typed('.typed',{
        strings : ['Student.','Web Developer.','Android Deveoper','Coder.','Indian.'],
        typeSpeed : 70,
        loop : true,
        startDelay : 1000,
        showCursor : false
    }); 
});
$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});