const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const { email, password } = event.currentTarget.elements
  const emailEl = email.value
  const passwordEl = password.value

  if (!emailEl.trim() || !passwordEl.trim()) {
    return alert('Все поля должны быть заполнены!')
  }
  const userDetails = {
    email: emailEl,
    password: passwordEl,
  }

  console.log(userDetails)
  event.currentTarget.reset()
}
