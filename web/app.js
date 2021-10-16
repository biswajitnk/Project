// Mobile Header Style in Javascript

// Clcik Mobile Menu Icon Show Mobile Menu 

function MobileShow(){
    Mob_Menu = document.getElementById('mob-menu');
    nav = document.getElementById('Mobile-Icon');
    
    Mob_Menu.addEventListener('click',()=>{
    
        nav.ClassList.toggle('.nav-active')
        
})
}MobileShow();