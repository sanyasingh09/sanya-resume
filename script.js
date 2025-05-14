let cooldown = false;

document.querySelector('.resume h1').addEventListener('click', function () {
  if (cooldown) return;
  alert("Thanks for checking out my resume!");
  cooldown = true;
  setTimeout(() => { cooldown = false; }, 1000);
});

window.addEventListener('load', function () {
  const hour = new Date().getHours();
  let greeting = "Hello!";
  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 18) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";
  alert(`${greeting} Welcome to my resume.`);
});

const darkButton = document.createElement('button');
darkButton.textContent = 'Toggle Dark Mode';
darkButton.style.position = 'fixed';
darkButton.style.top = '20px';
darkButton.style.right = '20px';
darkButton.style.padding = '10px';
darkButton.style.backgroundColor = '#0d47a1';
darkButton.style.color = 'white';
darkButton.style.border = 'none';
darkButton.style.borderRadius = '5px';
darkButton.style.cursor = 'pointer';
document.body.appendChild(darkButton);

darkButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

const clock = document.createElement('div');
clock.style.position = 'fixed';
clock.style.bottom = '20px';
clock.style.right = '20px';
clock.style.fontSize = '16px';
clock.style.color = '#333';
document.body.appendChild(clock);

setInterval(() => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}, 1000);
