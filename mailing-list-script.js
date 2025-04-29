const scriptURL = 'https://script.google.com/macros/s/AKfycbxbmVQZ5zYN3OKQQSa9A4P8vFfHOvIA-lWkC7KxBocECN5EcvwoZbxKxuAKs7dztBRe/exec'

const form = document.forms['mailing-list-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you!"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})