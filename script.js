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
    message: 'Обновление файла',
    content: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email')
    })
  };
  fetch(`https://api.github.com/repos/${repo}/contents/${file}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
