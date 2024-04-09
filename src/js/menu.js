
let toggleBtn = document.querySelector('.toggle-btn');
let closeBtn = document.querySelector('.close-btn');
let navbar = document.querySelector('header nav ul');

toggleBtn.onclick = ()=>{
  navbar.classList.replace('hidden', 'flex')
}

closeBtn.onclick = ()=>{
  navbar.classList.replace('flex', 'hidden')

};
