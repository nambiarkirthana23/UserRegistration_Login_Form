
let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password")



const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
  
      xhr.responseType = 'json';
  
      if (data) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }
  
      xhr.onload = () => {
        if (xhr.status == 201) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };
  
      xhr.onerror = () => {
        reject('Something went wrong!');
      };
  
      xhr.send(JSON.stringify(data));
    });
    return promise;
  };
  
  // const getData = () => {
  //   sendHttpRequest('GET', 'https://reqres.in/api/users').then(responseData => {
  //     console.log(responseData);
  //   });
  // };
  
  
  // const sendData = () => {
  //   console.log("Send data")
  //   sendHttpRequest('POST','http://localhost:3000/user/signUp', {
  //     "Name":"Gitesh",
  //     "Email":"gitesh@gmail.com",
  //     "Password":"gitesh"
  // })
  //     .then(responseData => {
  //       console.log(responseData);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };



  const sendRegistrationData = () => {
    const nameValue = Name.value;
    console.log("name",nameValue);
    const emailValue = Email.value;
    console.log("email",emailValue);
    const passwordValue = Password.value;
    console.log("password",passwordValue)

    sendHttpRequest('POST', 'http://localhost:3000/user/signUp', {
        "Name": nameValue,
        "Email": emailValue,
        "Password": passwordValue
    })
        .then(responseData => {
            console.log("responseData",responseData);
           
        })
        .catch(err => {
            console.log(err);
        });
};



const sendLoginData = () => {
 
  const emailValue = Email.value;
  console.log("email",emailValue);
  const passwordValue = Password.value;
  console.log("password",passwordValue)

  sendHttpRequest('POST', 'http://localhost:3000/user/signIn', {
    
      "Email": emailValue,
      "Password": passwordValue
  })
      .then(responseData => {
          console.log("responseData",responseData);
         
         
      })
      .catch(err => {
          console.log(err);
      });
};



  
  

//signInBtn.onclick = function () {
const signIn = function () {
    //hide name field;
    nameField.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    alert("home page");

}


//register
const signUp= function () {
    //hide name field;
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Register";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");

}
//

// getBtn.addEventListener('click', getData);

// signUpBtn.addEventListener('click', signUp,sendData);

// signUpBtn.addEventListener('click', () => {
//   console.log("ONCLICK")
// });

signUpBtn.addEventListener('click', () => {
  console.log("ONCLICK");
  signUp();  
  sendRegistrationData();  
});


signInBtn.addEventListener('click',()=>{
  console.log("ONCLICK");
  signIn();
  sendLoginData();
  
})

// signInBtn.addEventListener('click',signIn)

  





