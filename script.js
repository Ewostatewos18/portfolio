
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section");
  
    function toggleActiveLink() {
      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - navbar.offsetHeight;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionBottom
        ) {
          const targetLink = document.querySelector(`.navbar a[href="#${section.id}"]`);
          if (targetLink) {
            document.querySelectorAll('.navbar a').forEach((link) => link.classList.remove('active'));
            targetLink.classList.add('active');
          }
        }
      });
    }
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
      menuIcon.classList.toggle("active");
    });
    window.addEventListener("scroll", function () {
      toggleActiveLink();
    });
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuIcon.classList.remove("active");
      });
    });
  });

  