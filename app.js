let main = document.querySelector('.content-placeholder');
let modal = document.querySelector('.modal');
let modalButton = document.querySelector('.modal-close');
let modalContent = document.querySelector('.modal-content');
class newProject {
  constructor(name, tech, desc, pic, github, link) {
    this.name = name;
    this.tech = tech;
    this.desc = desc;
    this.pic = pic;
    this.github = github;
    this.link = link;
  }
}

const project1 = new newProject(
  'Recipe searcher',
  ['React.Js', 'Recipe API', 'HTML', 'CSS', 'Sass'],
  'React app, that lets you find search recipes from an api and then returns the steps and images of how to make the recipe.',
  '../pics/projects/recipe.png',
  'https://github.com/Aleksixaxa/Recipe-searcher-react',
  'https://recipe-searcher-101.netlify.app'
);
const project2 = new newProject(
  'Landing page',
  ['Javascript ES6+', 'Weather API', 'HTML', 'CSS', 'Sass'],
  'Clean UI for mobile and computer to greet you and change the wallpaper depending on the time.',
  '../pics/projects/landing.png',
  'https://github.com/Aleksixaxa/landing-page-dva',
  'https://home-page-dva.netlify.app'
);
const project3 = new newProject(
  'Recipe 3',
  ['Javascript ES6+', 'HTML', 'CSS'],
  'To-do app that lets you add items to the list and stores them in an array in local storage, all having an individual key to also remove them',
  '../pics/projects/todo.png',
  'https://github.com/Aleksixaxa/To-Do-App',
  'https://todo-app-aleksi.netlify.app'
);
const project4 = new newProject(
  'paragraph maker',
  ['react.js', 'api', 'html/css'],
  '',
  '../pics/projects/recipe.png',
  'thisislink.com',
  'thisislink.com'
);
const project5 = new newProject(
  'api',
  ['react.js', 'api', 'html/css'],
  '',
  '../pics/projects/recipe.png',
  'thisislink.com',
  'thisislink.com'
);

const projects = [project1, project2, project3, project4, project5];

projects.forEach((e) => {
  let container = document.createElement('div');

  container.setAttribute('class', 'project-container');

  let content = `<img src="${e.pic}"/>`;

  container.innerHTML = content;

  main.appendChild(container);

  container.addEventListener('click', () => {
    openModal(e);
    modalContent.innerHTML = `
    <div class="modal-info">
      <h1>${e.name}</h1>
      <h5>${e.tech.join(', ')}</h5>
      <h3>Description</h3>
      <p>${e.desc}</p>
    </div>
    <div class="links">
      <a target="_blank" href="${e.github}">View Code</a>
      <a target="_blank" href="${e.link}">View Page</a>
    </div
    `;
  });
  modalButton.addEventListener('click', () => {
    closeModal(e);
  });
});

function openModal(obj) {
  modal.classList.add('modal-open');
  console.log(obj.name);

  let overlay = document.createElement('div');
  overlay.id = 'modal-overlay';
  document.body.appendChild(overlay);
}

function closeModal(obj) {
  modal.classList.remove('modal-open');
  document.body.removeChild(document.querySelector('#modal-overlay'));
  console.log(obj.name);
}
