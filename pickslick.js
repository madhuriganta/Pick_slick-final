
function login() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name" , user_name);
    window.location = "pickslick_room.html";
    // const urlToNavigateTo = window.location.origin + "/pickslick_room.html";
    // //window.location = "pickslick_room.html";  
    // //window.location.href = urlToNavigateTo;  
    // window.location.href ="http://127.0.0.1:5500/pickslick_room.html";
    // console.log("urlToNavigateTo: ",urlToNavigateTo, "window.location.href: ", window.location.href)
}
