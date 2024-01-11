document.addEventListener("DOMContentLoaded", function () {
  const typedTextContainer = document.getElementById("typed-text");
  const typedParagraphContainer = document.getElementById("typed-paragraph");
  const cursor = document.querySelector('.cursor');

  var openButton = document.querySelector("header > button");

  openButton.onclick = openMenu;

  

  

  /******************************/
  /* menu openen de MENU button */
  /******************************/

  // stap 1: zoek de menu-button op en sla die op in een variabele

  // stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit


  // stap 3: voeg in de functie een class toe aan de nav
  function openMenu() {
    // zoek de nav op
    var deNav = document.querySelector("nav");
    // voeg class toe aan nav
    deNav.classList.add("toonMenu");
  }

  /************************************/
  /* menu sluiten met de sluit button */
  /************************************/

  // stap 1 - zoek sluiten button op
  var sluitButton = document.querySelector("nav button");

  // stap 2 - laat die button luisteren naar kliks
  sluitButton.onclick = sluitMenu;

  // stap 3 - in de functie verwijder de class van de nav
  function sluitMenu() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }

  /**********************************/
  /* bonus: menu sluiten met escape */
  /**********************************/
  window.onkeydown = handleKeydown;

  function handleKeydown(event) {
    if (event.key == "Escape") {
      var deNav = document.querySelector("nav");
      deNav.classList.remove("toonMenu");
    }
  }

  

  const filterButtons = document.querySelectorAll('.list');
  const itemBoxes = document.querySelectorAll('.itemBox');


  const heroTitle = document.querySelector(".hero h2");
  const heroSubtitle = document.querySelector(".hero p");
  const heroImage = document.querySelector(".hero img");


  function updateHeroContent(tabName) {
    switch (tabName) {
      case "all":
        heroTitle.textContent = "My Work!";
        heroSubtitle.textContent = "See all my work on this page!";
        heroImage.src = "images/all-hero-small.png";
        break;
      case "webdesign":
        heroTitle.textContent = "Web Design";
        heroSubtitle.textContent = "Explore my UX/UI Designs";
        heroImage.src = "images/ui-hero-small.png";
        break;
      case "graphic":
        heroTitle.textContent = "Graphic Design";
        heroSubtitle.textContent = "Check out my Graphic Designs";
        heroImage.src = "images/graphic-hero-small.png";
        break;
      case "development":
        heroTitle.textContent = "Development";
        heroSubtitle.textContent = "Discover my Development projects";
        heroImage.src = "images/code-hero-small.png";
        break;
      case "3d":
        heroTitle.textContent = "3D";
        heroSubtitle.textContent = "Experience my 3D Creations";
        heroImage.src = "images/3d-hero-small.png";
        break;
      case "projects":
        heroTitle.textContent = "Projects";
        heroSubtitle.textContent = "Explore my Various Projects";
        heroImage.src = "images/projects-hero-small.png";
        break;
      default:
        // Handle default case
        break;
    }
  }


  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const filter = button.getAttribute('data-filter');

      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Add 'active' class to the clicked button
      button.classList.add('active');

      // Show/hide itemBoxes based on the filter
      itemBoxes.forEach(box => {
        const item = box.getAttribute('data-item');
        if (filter === 'all' || filter === item) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });

  
  /******************************/
  /* Tab change page 2 galery */
  /******************************/



  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filter = button.getAttribute("data-filter");

      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      // Add 'active' class to the clicked button
      button.classList.add("active");

      // Update hero content based on the selected filter
      updateHeroContent(filter);

      // Show/hide itemBoxes based on the filter
      itemBoxes.forEach(box => {
        const item = box.getAttribute("data-item");
        if (filter === "all" || filter === item) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  });

  
  
  const h1Texts = [
    "Designing wonders, one pixel at a time.",
    "Crafting digital magic for your eyes.",
    "Your friendly neighborhood design guru!",
    "Unleashing creative brilliance with flair.",
    "Shaping the future of visual experiences.",
    "Transforming concepts into design gold.",
    "Bringing digital dreams to life.",
    "Your go-to for all things design.",
    "Crafting visual stories that speak volumes.",
    "Designing happiness into every pixel.",
    "Exploring the art of delightful design.",
    "Elevating your digital experience game.",
    "Infusing humor into design perfection.",
    "Your guide to a world of design wonders.",
    "Crafting experiences that leave a mark.",
    "Your visual storyteller in action.",
    "Designing the extraordinary, always.",
    "Innovating the visual language of tomorrow.",
    "Crafting UI/UX wonders with a smile.",
    "Your design ally in the digital realm.",
    "Pioneering design with a touch of wit.",
    "Curating pixels with a passion.",
    "Crafting visual poetry for the digital age.",
    "Your partner in the dance of design.",
    "Designing with a sprinkle of joy.",
    "Creating smiles through design magic.",
    "Your go-to design maestro, always.",
    "Crafting pixels with personality.",
    "Designing a world of visual delight.",
    "Your friendly design wizard at work.",
    "Crafting experiences that resonate.",
    "Designing happiness, one project at a time.",
    "Exploring the playful side of design.",
    "Your guide to design with a twist.",
    "Crafting joy-infused visual narratives.",
    "Designing with a dash of humor.",
    "Your visual journey starts here.",
    "Crafting experiences that tell a tale.",
    "Infusing design with a touch of fun.",
    "Your design adventure begins now.",
    "Crafting pixels with a purpose.",
    "Designing smiles into every project.",
    "Creating design magic just for you.",
    "Your partner in the art of design.",
    "Crafting visual wonders, always.",
    "Designing with a sprinkle of creativity.",
    "Your design dreams brought to life.",
    "Crafting pixels with personality and panache.",
    "Designing joy into every detail.",
  ];
  
  
  const pTexts = [
    "Hi there! I'm Quincy Sung, a 23-year-old visual artist currently studying Communication and Multimedia Design at the Amsterdam University of Applied Sciences.",
    "In my second year at HvA, I specialize in UI/UX for mobile apps, web apps, and websites. I hold a diploma in game art from the Media College Amsterdam.",
    "On the lookout for a stimulating internship, I bring a blend of curiosity, social skills, and a good sense of humor. Motivated and passionate about my craft, I excel in Adobe Photoshop, Illustrator, and XD.",
    "With a foundation in game art, I'm proficient in 3D programs. I enjoy coffee, occasional Red Bull, and take pride in being a perfectionist with a goal-oriented and team-oriented approach.",
    "While I can code in HTML, CSS, and basic JavaScript, my true passion lies in design. I have a cat whom I adore, and I love sketching and creating concepts.",
    "Driven by the joy I find in my work, I aim to become the best in my field. My interests extend to crafting game user interfaces and other graphics.",
    "Meet Quincy Sung, a 23-year-old design enthusiast currently pursuing a degree in Communication and Multimedia Design at HvA in Amsterdam.",
    "I'm in my second year, specializing in UI/UX design for mobile apps, web apps, and websites. Holding a diploma in game art, I bring a unique perspective to my work.",
    "Eager to embark on a rewarding internship, I am a quick learner, socially adept, and highly motivated. Proficient in Adobe Photoshop, Illustrator, and XD, I also have experience with 3D programs.",
    "Balancing my perfectionism with a goal-driven approach, I'm a team player who can also code in HTML, CSS, and basic JavaScript. Passionate about design, I take pleasure in creating sketches and concepts.",
    "Quincy Sung here, a 23-year-old visual artist currently immersing myself in the world of Communication and Multimedia Design at HvA.",
    "Navigating through my second year, my focus is on UI/UX design, drawing from my background in game art at the Media College Amsterdam.",
    "I'm actively seeking an engaging internship, armed with a curious mind, strong social skills, and a good dose of humor. Proficient in Adobe Photoshop, Illustrator, and XD, my 3D skills add a unique flair to my designs.",
    "As a perfectionist with a goal-oriented mindset, I can code in HTML, CSS, and basic JavaScript. While I enjoy coding, my true passion lies in design, especially in crafting game user interfaces and graphics.",
    "Hey there, I'm Quincy Sung, a 23-year-old design enthusiast currently immersed in my studies at HvA.",
    "In my second year, I'm honing my skills in UI/UX design for mobile apps, web apps, and websites, leveraging my game art background from the Media College Amsterdam.",
    "On the lookout for an exciting internship, I bring a blend of curiosity, social skills, and a good sense of humor. Proficient in Adobe Photoshop, Illustrator, and XD, I'm no stranger to 3D programs.",
    "As a perfectionist with a goal-oriented and team-oriented approach, I can also code in HTML, CSS, and basic JavaScript. Design is my true calling, and I find joy in creating sketches, concepts, and crafting game user interfaces.",
    "Quincy Sung reporting in! A 23-year-old visual artist navigating the realms of Communication and Multimedia Design at HvA.",
    "Currently in my second year, I specialize in UI/UX design, drawing inspiration from my game art background at the Media College Amsterdam.",
    "Eager to embark on a fulfilling internship, I bring a mix of curiosity, social skills, and humor to the table. Proficient in Adobe Photoshop, Illustrator, and XD, my 3D skills add depth to my designs.",
    "Balancing perfectionism with a goal-oriented and team-oriented mindset, I'm also versed in HTML, CSS, and basic JavaScript. While coding is intriguing, my heart lies in design, especially game user interfaces and graphics.",
    "Hello, I'm Quincy Sung, a 23-year-old visual artist pursuing a degree in Communication and Multimedia Design at HvA.",
    "Venturing through my second year, my focus lies in UI/UX design, fueled by my background in game art from the Media College Amsterdam.",
    "On the lookout for an invigorating internship, I bring a mix of curiosity, social skills, and humor. Proficient in Adobe Photoshop, Illustrator, and XD, my 3D skills bring a unique dimension to my designs.",
    "A perfectionist with a goal-oriented and team-oriented approach, I can also code in HTML, CSS, and basic JavaScript. However, my true passion is design, where I find joy in creating sketches, concepts, and game user interfaces.",
  ];
  

  /**************************************/
  /* Hero section homepage typo effect  */
  /**************************************/


  let currentH1TextIndex = 0;
  let currentPTextIndex = 0;
  let isPlaceholderVisible = true;
  
  function typeText(container, texts, index = 0) {
    const typingSpeed = container === typedTextContainer ? 100 : 30; // Aangepaste snelheid voor p-element
  
    if (index < texts[currentH1TextIndex].length) {
      container.innerHTML += texts[currentH1TextIndex][index];
      isPlaceholderVisible = false;
      setTimeout(function () {
        typeText(container, texts, index + 1);
      }, typingSpeed);
    } else {
      setTimeout(function () {
        eraseText(container, texts);
      }, container === typedTextContainer ? 2000 : 5000); // Aangepaste timeout voor p-element
    }
  }
  
  function eraseText(container, texts) {
    if (container.innerHTML.length > 0) {
      container.innerHTML = container.innerHTML.slice(0, -1);
      setTimeout(function () {
        eraseText(container, texts);
      }, 25);
    } else {
      setTimeout(function () {
        if (container === typedTextContainer) {
          changeH1Text();
        } else if (container === typedParagraphContainer) {
          changePText();
        }
      }, 1000);
    }
  }
  
  function changeH1Text() {
    currentH1TextIndex = Math.floor(Math.random() * h1Texts.length);
    isPlaceholderVisible = true; // Terugzetten naar true bij het wijzigen van de h1 tekst
    typeText(typedTextContainer, h1Texts);
  }
  
  function changePText() {
    currentPTextIndex = Math.floor(Math.random() * pTexts.length);
    isPlaceholderVisible = true; // Terugzetten naar true bij het wijzigen van de p tekst
    typeText(typedParagraphContainer, pTexts);
  }


  
  // Start de typanimatie voor de eerste keer
  changeH1Text();
  changePText();
  
  // Knipperende cursor-animatie
  setInterval(() => {
    cursor.classList.toggle('blink');
  }, 1000);
  
  // Controleren of de aanduiding moet worden weergegeven
  setInterval(() => {
    if (isPlaceholderVisible) {
      typedTextContainer.innerHTML = '... ';
      typedParagraphContainer.innerHTML = '... ';
    }
  }, 500);


});

document.addEventListener('DOMContentLoaded', function() {
  var inputs = document.querySelectorAll('.form-group input, .form-group textarea');

  inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
      input.closest('.form-group').classList.add('focused');
    });

    input.addEventListener('blur', function() {
      input.closest('.form-group').classList.remove('focused');
    });
  });
});


function changeImage(src, description) {
  document.querySelector('.main-image').src = src;
  document.getElementById('description').innerText = description;
}