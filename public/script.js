const button = document.getElementById('share-button');

button.addEventListener('click', (e) => {
  const container = e.target.closest('.share');
  container.classList.toggle('active')
})