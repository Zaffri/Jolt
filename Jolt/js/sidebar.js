/* --------------------------------------------------------
    Jolt Sidebar JavaScript File

    Version:    1.2.2
    Author:     Steven Morrison

    Website:    jolt.zaffri.com
    GitHub:     github.com/Zaffri
-------------------------------------------------------- */

/* ---------------------------  [JavaScript link click - collapse menu] --------------------------- */
if(document.querySelector(".on-nav-collapse")) {
    
    // Get nav class
    var nav = document.querySelector(".on-nav-collapse");
    // Add event listener
    nav.addEventListener("click", function(e) {
        
        // Check if ID exists - SPA fix
        if(document.getElementById("mobile-checkbox")) {
            // Uncheck mobile check box
            document.getElementById("mobile-checkbox").checked = false;
            e.stopPropagation();
        }
    }, false);
}