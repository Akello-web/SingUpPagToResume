const modal = document.getElementById("myModal")
const secModal = document.getElementById("mySecondModal")
const span = document.getElementsByClassName("close")
const sayMyName = document.getElementById("myName")
// let btn = document.getElementById("myBtn")

function Heisenberg() {
  event.preventDefault()
  let name = prompt("Say My Name")
  if (name == "Heisenberg") {
    modal.style.display = "block"
  } else {
    secModal.style.display = "block"
  }
  // setTimeout(function () {
  //   modal.style.display = "none"
  // }, 1000)

  setTimeout(function () {
    location.reload()
  }, 1500)
}

btn.addEventListener("click", Heisenberg)

for (var i = 0; i < span.length; i++) {
  span[i].onclick = function () {
    if (modal.style.display == "block") {
      modal.style.display = "none"
    } else if (secModal.style.display == "block") {
      secModal.style.display = "none"
    }
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  } else if (event.target == secModal) {
    secModal.style.display = "none"
  }
}
