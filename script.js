const token = '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';
const repo = 'FaVaKu/Project_Manager';
const file = 'data.json';

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github.v3+json'
  };
  const data = {
    message: 'Обновление файла',
    content: btoa(JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email')
    })),
    sha: ''
  };
  fetch(`https://api.github.com/repos/${repo}/contents/${file}`, {
    method: 'GET',
    headers
  })
  .then(response => response.json())
  .then(data => {
    const sha = data.sha;
    data.sha = sha;
    fetch(`https://api.github.com/repos/${repo}/contents/${file}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
});
