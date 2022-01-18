let main = document.querySelector('.content-placeholder');

class newProject {
  constructor(name, tech, pic, github, link) {
    this.name = name;
    this.tech = tech;
    this.pic = pic;
    this.github = github;
    this.link = link;
  }
}

const project1 = new newProject(
  'Recipe searcher',
  ['react.js', 'api', 'html/css'],
  '../pics/projects/recipe.png',
  'thisislink.com',
  'thisislink.com'
);
const project2 = new newProject(
  'Recipe searcher',
  ['react.js', 'api', 'html/css'],
  '../pics/projects/recipe.png',
  'thisislink.com',
  'thisislink.com'
);
const project3 = new newProject(
  'Recipe searcher',
  ['react.js', 'api', 'html/css'],
  '../pics/projects/recipe.png',
  'thisislink.com',
  'thisislink.com'
);
const project4 = new newProject(
  'Recipe searcher',
  ['react.js', 'api', 'html/css'],
  '../pics/projects/recipe.png',
  'thisislink.com',
  'thisislink.com'
);
const project5 = new newProject(
  'Recipe searcher',
  ['react.js', 'api', 'html/css'],
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

  //   container.addEventListener('click', () => {});
});
