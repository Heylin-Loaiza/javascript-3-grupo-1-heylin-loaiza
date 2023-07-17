const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = Object.fromEntries(
    new FormData(e.target)
  )

  console.log(formData)
})