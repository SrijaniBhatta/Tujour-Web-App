// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5SlSgUyYx-ux-wN3l30vNcwTNDB6ti_U",
    authDomain: "tujour-web-application.firebaseapp.com",
    databaseURL: "https://tujour-web-application-default-rtdb.firebaseio.com",
    projectId: "tujour-web-application",
    storageBucket: "tujour-web-application.appspot.com",
    messagingSenderId: "220468536031",
    appId: "1:220468536031:web:672481812455b37be4bf6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


let signinButton = document.getElementById("signin-button");
let signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  let name = document.getElementById("full_name").value;
  let user_name = document.getElementById("user_name").value;
  let emailSignup = document.getElementById("email_signup").value;
  let phnum = document.getElementById("ph_num").value; 
  let passwordSignup = document.getElementById("psw_signup").value;
  let conpasswordSignup = document.getElementById("conpsw_signup").value;
  let gender = document.getElementById("gender").value;
  

   if(passwordSignup!==conpasswordSignup){
    alert("Confirm Password is not matched");
    return;
   }


   createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user_name ), {
        name:name,
        user_name: user_name,
        user_id:user.uid,
        email: emailSignup,
        phone:phnum,
        gender: gender
      })
      
        .then(() => {
                
          // Data saved successfully!
          alert("user created successfully");
          location.href = "http://127.0.0.1:5502/TUJOUR-NEW/Tujour_Web_App-Copy/web/home.html";
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
       
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage + errorCode + " " + "Fill the fileds*");
    });
})

signinButton.addEventListener("click", (e) => {
  let namesignin = document.getElementById("login_name").value;
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin , passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let lgDate = new Date();
      update(ref(database, "users/" + namesignin), {
        last_login: lgDate
      })
        .then(() => {
          // Data saved successfully!
            alert("user logedin");
          location.href = "http://127.0.0.1:5502/TUJOUR-NEW/Tujour_Web_App-Copy/web/home.html";
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage + errorCode);
    });
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      
    });
})

// const firebaseConfig = {
//     apiKey: "AIzaSyA5SlSgUyYx-ux-wN3l30vNcwTNDB6ti_U",
//     authDomain: "tujour-web-application.firebaseapp.com",
//     databaseURL: "https://tujour-web-application-default-rtdb.firebaseio.com",
//     projectId: "tujour-web-application",
//     storageBucket: "tujour-web-application.appspot.com",
//     messagingSenderId: "220468536031",
//     appId: "1:220468536031:web:672481812455b37be4bf6a"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth()
// // Set database variable
// var database = firebase.database()

// function save() {
//      let name = document.getElementById("full_name").value;
//      let user_name = document.getElementById("user_name").value;
//      let emailSignup = document.getElementById("email_signup").value;
//      let phnum = document.getElementById("ph_num").value; 
//      let passwordSignup = document.getElementById("psw_signup").value;
//      let conpasswordSignup = document.getElementById("conpsw_signup").value;
//      let gender = document.getElementById("gender").value;
    
  
//       if(passwordSignup!==conpasswordSignup){
//       alert("Confirm Password is not matched");
//       return;
//       }
  
  

//   database.ref('users/' + user_name).set({
//          name:name,
//          user_name: user_name,
//          user_id:user.uid,
//          email: emailSignup,
//          phone:phnum,
//          password: passwordSignup,
//          gender: gender
//   })

//   alert('User Created');
// }