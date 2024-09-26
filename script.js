const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.github.com/repos/FaVaKu/Project_Manager/contents/data.json', true);
  xhr.setRequestHeader('Authorization', 'Bearer YOUR_GITHUB_TOKEN');
  xhr.send(formData);
});