function handleMenu() {
    var menu = document.querySelector(".header_menu");
    var modalMenu = document.querySelector(".modal-menu");
    if(menu.classList.contains("menu_active")){
        menu.classList.remove("menu_active");
        menu.classList.add("menu_not_active");
        modalMenu.classList.remove("modal-menu_active");

    } else{
        menu.classList.remove("menu_not_active");
        menu.classList.add("menu_active");
        modalMenu.classList.add("modal-menu_active");
    }
}
const menuLinks = document.querySelectorAll('#menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
        handleMenu();
    });
});

// Define the sections and menu items globally
const sections = ['#home', '#product', '#about', '#feature', '#other'];
const menuItems = document.querySelectorAll('#menu li a');
let menuClicked = false;

function setActiveMenuItem() {
    const scrollPosition = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
        const section = document.querySelector(sections[i]);
        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                menuItems[i].classList.add('active');
            } else {
                menuItems[i].classList.remove('active');
            }
        }
    }
}

window.addEventListener('scroll', () => {
    if (!menuClicked) {
        setActiveMenuItem();
    }
});

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(sections[index]);
        if (section) {
            window.scrollTo({
                top: section.offsetTop-60,
                behavior: 'smooth'
            });
            menuItems.forEach((item) => {
                item.classList.remove('active');
            });
            menuItem.classList.add('active');
            menuClicked = true;
            setTimeout(() => {
                menuClicked = false;
            }, 1000);
        }
    });
});
const plusIcon =  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="ant-collapse-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
</svg>`
const minusIcon =  `<svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" class="ant-collapse-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <defs></defs>
  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
</svg>`;
document.addEventListener("DOMContentLoaded", function() {
    const collapseTitles = document.querySelectorAll(".collapse_title");
    collapseTitles.forEach((title, index) => {
      title.addEventListener("click", function() {
        const description = this.nextElementSibling;
        if (description.classList.contains("collapsed")) {
          description.classList.remove("collapsed");
          description.classList.add("not-collapsed");
          this.querySelector(".collapse_icon").innerHTML = minusIcon;
        } else {
          description.classList.add("collapsed");
          description.classList.remove("not-collapsed");
          this.querySelector(".collapse_icon").innerHTML = plusIcon;
        }
      });
    });
});