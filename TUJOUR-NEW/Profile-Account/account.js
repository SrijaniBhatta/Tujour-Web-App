
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
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()
var auth= firebase.auth();

  function save(){


  }
function merge(){
    get();
    update();
    //uploadimage();
}
  function get() {
            var username = document.getElementById('user_name').value;
            var user_ref = database.ref('users/' + username)
            user_ref.on('value', function(snapshot) {
            var data = snapshot.val()
        
            alert("Get Your user Info: "+data.email)
            console.log(data)
            
        
            })
        
  }

  function update(){
            var user_name=document.getElementById("user_name").value;
            var firstname = document.getElementById('firstname').value;
            var phnum = document.getElementById('phnum').value;
            let gender = document.getElementById("gender").value;
            let designation = document.getElementById("designation").value;

            
            var updatess ={
                user_name:u_name,
                name:firstname,
                phone:phnum,
                gender:gender,
                designation:designation
            }
            database.ref('users/' + user_name).update(updatess)
            alert("Updated Users Credentials")
  
    }
    function updatee(){
            var u_name=document.getElementById("u_name").value;
            var  old_password=document.getElementById("old_pass").value;
            var  password=document.getElementById("new_pass").value;
            var  con_password=document.getElementById("con_pass").value;
            if(password !==con_password){
                alert("Old Password should be different from New Password");
                alert("Confirm Password is not matched");
                return;
            }
            if(password >= old_password){
              alert("Old Password should be different from New Password");
              }
            let lgDate = new Date();
            var updates ={
                password: password,
                password_updated: lgDate
            }
            database.ref('users/' + u_name).update(updates)
            alert("Updated Users paassword")
    }
    // function uploadimage(){
    //   const ref=firebase.storage().ref();
    //   const file=document.querySelector("#image-show").files[0];
    //   const name=new Date() + '-' + file.name;
    //   const metadata ={
    //     contentType:file.type
    //   }
    //   const task=ref.child(name).put(file,metadata);
    //   task
    //   .then(snapshot => snapshot.ref.getDownloadURL())
    //   .then(url => {
    //     console.log(url);
    //     alert("Image upload Successful")
    //     const image = document.createElement('#imgage').value;
    //     image.src =url
    //   })
    // }

    
    // function getuserinput(){
    //   var firstname=document.getElementById("firstname").value;
    //   var username=document.getElementById("user_name").value;
    //   var phnum=document.getElementById("phnum").value;
    //   var email=document.getElementById("email").value;
    //   var gender=document.getElementById("gender").value;
    //   var designation=document.getElementById("designation").value;

    //   document.getElementsByClassName("form-control").innerHTML =firstname  + " " + username + " " + phnum  + " " +email + " " 
    //     + gender + " " + designation;

    // }