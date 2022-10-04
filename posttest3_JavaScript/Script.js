const Contact = document.getElementById('Contact');

Contact.addEventListener("click",
    function(){
        alert("Belum bisa Kontol gak ush di paksa.");
    },
)
var icon= document.getElementById("icon");

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src="img/sun.png";
            
        }else{
            icon.src="img/moon.png";
        }
    }