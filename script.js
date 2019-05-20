function perloadfunction()
{
    var load=document.getElementById('loading');
    loading.style.display = 'none';
}
$(document).ready(()=>{
    var typed=new Typed('.typed',{
        strings : ['Student.','Web Developer.','Android Developer','Coder.','Indian.'],
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
$(document).mousemove(function(e){
    var section1=document.getElementById("section1");
    var section2=document.getElementById("section2");
    var section3=document.getElementById("section3");
    var section4=document.getElementById("section4");
    section1.onmouseover = function(e) {
        document.getElementById("homenav").style.fontWeight = "700";
        document.getElementById("homenav").style.textDecoration =  "underline";
    };
    section1.onmouseout = function(e) {
       document.getElementById("homenav").style.fontWeight = "400";
        document.getElementById("homenav").style.textDecoration =  "none";
    };
    section2.onmouseover = function(e) {
        document.getElementById("aboutmenav").style.fontWeight = "700";
        document.getElementById("aboutmenav").style.textDecoration =  "underline";
    };
    section2.onmouseout = function(e) {
        document.getElementById("aboutmenav").style.fontWeight = "400";
        document.getElementById("aboutmenav").style.textDecoration =  "none";
    };
    section3.onmouseover = function(e) {
        document.getElementById("techiusenav").style.fontWeight = "700";
        document.getElementById("techiusenav").style.textDecoration =  "underline";
    };
    section3.onmouseout = function(e) {
        document.getElementById("techiusenav").style.fontWeight = "400";
        document.getElementById("techiusenav").style.textDecoration =  "none";
    };
    section4.onmouseover = function(e) {
        document.getElementById("impprojectnav").style.fontWeight = "700";
        document.getElementById("impprojectnav").style.textDecoration =  "underline";
    };
    section4.onmouseout = function(e) {
        document.getElementById("impprojectnav").style.fontWeight = "400";
        document.getElementById("impprojectnav").style.textDecoration =  "none";
    };
});