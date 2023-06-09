const hamburgMenu = document.querySelector('.right-hamburger');
const menuList = document.querySelector('.nav-li');
const xMen = document.querySelector('.x-men');

hamburgMenu.addEventListener('click', () => {
  menuList.classList.toggle('nav-active');
});

xMen.addEventListener('click', () => {
  xMen.classList.toggle('nav-active');
});

menuList.addEventListener('click', () => {
  menuList.classList.toggle('nav-active');
});

// cards

const projectDetails = [
  {
    id: 1,
    name: 'Tonic',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends',
    mobileImg: './assets/Snapshoot Portfolio.png',
    desktopImg: './assets/first-desktop-card.png',
    live: '#',
    source: '#',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },

  {
    id: 2,
    name: 'Multi-Post Stories',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobileImg: './assets/Snapshoot Portfolio 2.png',
    desktopImg: './assets/second-desktop-card.png',
    live: '#',
    source: '#',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },

  {
    id: 3,
    name: 'Tonic',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobileImg: './assets/Snapshoot Portfolio 3.png',
    desktopImg: './assets/second-desktop-card.png',
    live: '#',
    source: '#',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },

  {
    id: 4,
    name: 'Multi-Post Stories',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends.',
    mobileImg: './assets/Snapshoot Portfolio 4.png',
    desktopImg: './assets/fourth-desktop-card.png',
    live: '#',
    source: '#',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },

];

projectDetails.forEach((projects, index) => {
  const section = document.createElement('div');
  const isSecond = index === 1;
  const isLast = index === 3;
  const reverseClass = isSecond ? 'inner-second-containerr' : '';
  const marginB = isLast ? 'inner-second-containerl' : '';

  section.innerHTML = `
  <section class = "second-container">
      <div class = "inner-second-container ${reverseClass} ${marginB}">
        <div class = "top-image same ${projects.id}">
        <img src=" ${projects.mobileImg} " class="mobile-first-card ${projects.id}"></img>
        <img src="${projects.desktopImg}" class="desktop-first-card ${projects.id}"></img>
        </div>

        <div class = "text-inner-container same">
          <h2> ${projects.name}</h2>
          <div class = "canopy-inner-container">
            <p id ="text1"> ${projects.title} </p>
            <ul> 
              <li> ${projects.stack} </li> 
              <li> ${projects.year} </li> 
            </ul>
          </div>

        <div class = "canopy-daily"> 
          <p> ${projects.description} </p>
        </div>
          
        <ul class = "canopy-list"> 
          <li> ${projects.skills.skill1} </li>
          <li> ${projects.skills.skill2} </li>
          <li> ${projects.skills.skill3} </li> 
        </ul>
          
        <div>
          <button id="${projects.id}" class="all-button" type="submit"> See Project </button>
        </div>
          
      </div>
          
    </div>
          
  </section>
          
  `;

  const sections = document.querySelector('.second-container');
  sections.append(section);

  const openModal = document.querySelectorAll('.all-button');
  const pop = document.querySelector('.pop');
  const popSection = document.createElement('div');
  openModal.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let { id } = e.target;
      id = Number(id);
      if (id === projects.id) {
        popSection.innerHTML = ` 
          <div class = "pop-up">
            <div class = "top">
              <div class = "top-1">
                <h2> ${projects.name} </h2>
                <div class = "line">
                  <p id = "text1"> ${projects.title} </p>
                  <ul> <li> ${projects.stack} </li> </ul>
                  <ul> <li> ${projects.year} </li> </ul>
                </div>
              </div>

              <div class="upper-2">
                <i class="fa-solid fa-xmark close-btns">X</i>
              </div>

            </div>

            
            <img src="${projects.desktopImg}" class = " pop-img-desktop desktop-first-card">
            <img src="${projects.mobileImg}" class = " pop-img-mobile mobile-first-card">

            <div class = "wrap">
              <div class="description"><p> ${projects.description} </p></div>
              <div class = "canopy-list">
                <ul> <li> ${projects.skills.skill1} </li> </ul>
                <ul> <li> ${projects.skills.skill2} </li> </ul>
                <ul> <li> ${projects.skills.skill3} </li> </ul>
              </div>
              <hr class ="hr-line" />

              <div class="btns">
                <button class="project-btn">See live&nbsp; <img src="./assets/Icon.png" alt=""></button>
                <button class="project-btn">See source &nbsp;<img src="./assets/github.svg" alt=""> </button>
              </div>
            </div>
          </div>
        `;

        pop.append(popSection);

        document.querySelector('.top-container').classList.add('overlay');
        sections.classList.add('overlay');

        const closeBtn = document.querySelector('.close-btns');
        closeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          pop.innerHTML = '';
          document.querySelector('.top-container').classList.remove('overlay');
          sections.classList.remove('overlay');
        });
      }
    });
  });
});

const form = document.forms[0];
form.addEventListener('submit', (e) => {
  const email = form.elements.email.value;
  const errorMsg = document.querySelector('.error');
  if (email === email.toLowerCase()) {
    form.onsubmit();
  } else {
    errorMsg.innerHTML = 'Email should be lowercase';
    errorMsg.classList.remove('hidden');
  }
  e.preventDefault();
});
const changeEvent = () => {
  const userName = document.querySelector('.name-input').value;
  const userEmail = document.querySelector('.email-input').value;
  const message = document.querySelector('textarea').value;
  const data = {
    name: userName,
    email: userEmail,
    message,
  };
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
};
const localData = JSON.parse(localStorage.getItem('data'));
document.querySelector('.name-input').value = localData.name;
document.querySelector('.email-input').value = localData.email;
document.querySelector('textarea').value = localData.message;

const sendBtn = document.querySelector('.sec-btn');
sendBtn.addEventListener('change', changeEvent);