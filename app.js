const formElement = document.querySelector("form")
const mainInput = document.querySelector(".main--input")

formElement.addEventListener("submit", (e) => {
  let inputValue = mainInput.value
  e.preventDefault()
  if (validateEmail(inputValue)) {
    formElement.classList.remove("error")
  } else {
    formElement.classList.add("error")
  }
})

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
