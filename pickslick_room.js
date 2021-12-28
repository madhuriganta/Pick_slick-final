const firebaseConfig = {
    apiKey: "AIzaSyAgj9mjFV4kd5iLPlFhHoMftgnWHx4anvs",
    authDomain: "pick-slick-25a70.firebaseapp.com",
    databaseURL: "https://pick-slick-25a70-default-rtdb.firebaseio.com",
    projectId: "pick-slick-25a70",
    storageBucket: "pick-slick-25a70.appspot.com",
    messagingSenderId: "146517710933",
    appId: "1:146517710933:web:25f0714c23cf1af1fb9cdc",
    measurementId: "G-SFTF8QTCCB"
  };

  // Initialize Firebase
  const app=firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

  function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
    //Start code
    // console.log(firebase_message_id);
    console.log("Room name -" + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>"
     document.getElementById("output").innerHTML += row;
   //End code
   });});
}
getData();

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "pickslick_page.html";
}

 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "pickslick_page.html";
   
 }

 function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
  // localStorage.removeItem("password");
   window.location = "index.html";
 }
 function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}
function updateLike(message_id)
{
      console.log("click on like button - " + message_id);
      button_id= message_id
      likes = document.getElementById(button_id).value;
      updates_like = Number(likes) +1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

 
 

