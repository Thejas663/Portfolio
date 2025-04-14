
const projects = [
  {
    title: "Password generator",
    description: "It creates a random password including all type of characters.",
    link: "https://thejas663.github.io/Random-password/"
  },
  {
    title: "Drag and drop",
    description: "It drags the box from one place to other.",
    link: "https://thejas663.github.io/Drag-drop/"
  }
];


const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "article");
  card.setAttribute("aria-label", project.title);

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" class="btn" aria-label="View ${project.title} project">View Project</a>
  `;

  projectList.appendChild(card);
});

  