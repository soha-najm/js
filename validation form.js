const nameInput = document.querySelector(".name-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".pass-input");
const confirmInput = document.querySelector(".confirm-pass");
const nameMsg = document.querySelector(".name-msg");
const emailMsg = document.querySelector(".email-msg");
const passwordMsg = document.querySelector(".password-msg");
const confirmPassMsg = document.querySelector(".confirm-pass-msg");
const signinMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".signin-button");

signinBtn.addEventListener("click", signIn);

function signIn(event) {
  event.preventDefault();

  const emailVal = emailInput.value;
  const passwordVal = passwordInput.value;
  const nameVal = nameInput.value;
  const confirmVal = confirmInput.value;

  let ifSendData = true;

  nameMsg.innerText = "";
  emailMsg.innerText = "";
  passwordMsg.innerText = "";
  confirmPassMsg.innerText = "";

  if (
    emailVal.indexOf("@") === -1 ||
    emailVal.indexOf("@") === -1 ||
    emailVal.length === 0
  ) {
    emailMsg.innerText = "please enter a valid Email";
    ifSendData = false;
  }

  if (nameVal.length === 0) {
    nameMsg.innerText = "please enter a username ";
    ifSendData = false;
  }

  if (passwordVal.length === 0) {
    passwordMsg.innerText = "please enter your password";
    ifSendData = false;
  } else if (nameVal.length <= 4) {
    passwordMsg.innerText = "your password is too short";
    ifSendData = false;
  }

  if (passwordVal !== confirmVal) {
    confirmPassMsg.innerText = "Password did not match";
    ifSendData = false;
  } else if (confirmVal.length === 0) {
    confirmPassMsg.innerText = "Please enter password";
    ifSendData = false;
  }

  if (ifSendData) {
    const body = JSON.stringify({
      username: nameVal,
      email: emailVal,
      password: passwordVal,
      passConfirm: confirmVal,
    });

    const headers = {
      "Content-Type": "application/json",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        signinMsg.innerText = "You signed in successfully";
      }
    });
  }
}
