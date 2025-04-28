const envelope = document.getElementById('envelope');
const flap = envelope.querySelector('.flap');
const letter = document.getElementById('letter');

let opened = false;
envelope.addEventListener('click', () => {
  if (opened) return;
  flap.style.transform = 'rotateX(-120deg)';
  setTimeout(() => {
    letter.classList.add('open');
    envelope.style.display = 'none';
  }, 700);
  opened = true;
}); 