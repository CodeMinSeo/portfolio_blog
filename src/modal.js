'use strict';

const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalGithub = document.getElementById("modal-github");
const closeBtn = document.querySelector(".close-btn");

const projectData = {
  "project1": {
    img: "images/projects/project1.webp",
    title: "Project #1",
    github: "https://github.com/yourname/project1",
  },
  "project2": {
    img: "images/projects/project2.webp",
    title: "Project #2",
    github: "https://github.com/Donghoooo/moneylog",
  },
  "project3": {
    img: "images/projects/project3.webp",
    title: "Project #3",
    github: "https://github.com/ESPko/finalTeamproject1",
  },
  "project4": {
    img: "images/projects/project4.webp",
    title: "Project #4",
    github: "https://github.com/ESPko/finalTeamproject1",
  },
  "project5": {
    img: "images/projects/project5.webp",
    title: "Project #5",
    github: "https://github.com/CodeMinSeo/logitech",
  },
  "project6": {
    img: "images/projects/project6.webp",
    title: "Project #6",
    github: "https://github.com/CodeMinSeo/git-project",
  },
  "project7": {
    img: "images/projects/project7.webp",
    title: "Project #7",
    github: "https://github.com/CodeMinSeo/git-project",
  },
  "project8": {
    img: "images/projects/project8.webp",
    title: "Project #8",
    github: "https://github.com/CodeMinSeo/git-project",
  },
};

// 프로젝트 클릭 시 모달 열기
document.querySelectorAll(".project").forEach((item, index) => {
  item.addEventListener("click", () => {
    const id = "project" + (index + 1);
    const data = projectData[id];
    if (data) {
      modalImg.src = data.img;
      modalTitle.textContent = data.title;
      modalGithub.href = data.github;
      modal.classList.remove("hidden");
    }
  });
});

// X 버튼 클릭 시 모달 닫기
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// 모달 바깥 영역 클릭 시 모달 닫기
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
