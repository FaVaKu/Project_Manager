
const token = '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';
const repo = 'FaVaKu/Project_Manager';
const file = 'data.json';

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  const data = {
    name: formData.get('name'),
    email: formData.get('email')
  };
  fetch(`https://api.github.com/repos/${repo}/contents/${file}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
