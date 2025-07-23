const form = document.getElementById('requirement-form');
const list = document.getElementById('list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const status = document.getElementById('status').value;

  if (title && description) {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${title}</strong><br />
      <em>${description}</em><br />
      <span>Status: ${status}</span>
    `;
    list.appendChild(li);

    form.reset(); // clear fields
  }
});
