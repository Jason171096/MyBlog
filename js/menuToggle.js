document.getElementById("myToggle").onclick = function() { openNav() };

// document.getElementById("myName").onclick = function() { openNav() };

// $("#myToggle").click( ()=> { openNav() })

// $("#myToggle").click(function() {
//     $(this).toggleClass("on");
//     $("#mySideNav").slideToggle();
//   });

function openNav() { 
    console.log("Cambio")
    document.getElementById("mySideNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

