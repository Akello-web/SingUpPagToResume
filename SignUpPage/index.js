// LOCALSTORAGE
let btn = document.getElementById("myBtn")
let secBtn = document.getElementById("mySecBtn")

let usersArray = [
  { name: "Akello", email: "30500@gmail.com", password: "456456456" },
]

console.log(usersArray)

function saveToStorage() {
  let userName = document.getElementById("userName")
  let userEmail = document.getElementById("userEmail")
  let userPassword = document.getElementById("userPassword")

  let obj = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  }

  if (localStorage.getItem("users") !== null) {
    updateArray()
    usersArray.push(obj)
    localStorage.setItem("users", JSON.stringify(usersArray))
  } else {
    usersArray.push(obj)
    localStorage.setItem("users", JSON.stringify(usersArray))
  }
}

function updateArray() {
  usersArray = JSON.parse(localStorage.getItem("users"))
}

function init() {
  let userName = document.getElementById("userName")
  let userEmail = document.getElementById("userEmail")
  let userPassword = document.getElementById("userPassword")

  if (
    userName.value !== null &&
    userEmail.value !== null &&
    userPassword.value !== null
  ) {
    let objFromStorage = JSON.parse(localStorage.getItem("users"))
    if (objFromStorage !== null) {
      userName.value = objFromStorage.name
      userEmail.value = objFromStorage.email
      userPassword.value = objFromStorage.password
    }
  }
}

function logIn() {
  let signInName = document.getElementById("log-in")
  let signInPassword = document.getElementById("pass-word")
  updateArray()

  if (signInName.vlaue !== null && signInPassword.value !== null) {
    for (let k of usersArray) {
      if (k.name === signInName.value && k.password === signInPassword.value) {
        window.location.href = "/index.html"
      } else {
        signInName.style.backgroundColor = "#e49797"
        signInPassword.style.backgroundColor = "#e49797"
      }
    }
  }
}
