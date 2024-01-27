const btnNav = document.getElementsByClassName('btn');

for (let i = 0; i < btnNav.length; i++) {
    btnNav[i].addEventListener("click", function () {
        var current = document.getElementsByClassName('active');
        if (current.length > 0) {
            current[0].classList.remove("active");
        }
        this.classList.add("active");
    });
}

      
      
          // Other existing code...
      
          // ScrollReveal initialization (if not already done)
          ScrollReveal().reveal('.headline');
          ScrollReveal().reveal('.left-img', { delay: 500 });
          
          var slideUp = {
              distance: '150%',
              origin: 'left',
              opacity: null,
              delay:500,
              ease:"ease in"
          };
          var slideUpp = {
                    distance: '150%',
                    origin: 'left',
                    opacity: null,
                    delay:200,
                    ease:"ease in"
                };
          
          ScrollReveal().reveal('.left', slideUp);
          ScrollReveal().reveal('.right-details', slideUpp);
      
          // Counter time on scroll
          $(window).scroll(function() {
              if (($(this).scrollTop() >= $('.projects-details').offset().top) - 30) {
                  $('.timer').countTo();
              }
          });
      
          // Disable click events for MixItUp category links
          document.addEventListener('DOMContentLoaded', function () {
                    var projectItems = document.querySelectorAll('.project .card');
                    var categoryLinks = document.querySelectorAll('.projects .head ul li a');
                
                    categoryLinks.forEach(function (link) {
                        link.addEventListener('click', function (e) {
                            e.preventDefault();
                
                            var category = this.dataset.filter;
                
                            categoryLinks.forEach(function (otherLink) {
                                otherLink.classList.remove('actives');
                            });
                            this.classList.add('actives');
                
                            projectItems.forEach(function (item) {
                                item.style.display = 'none'; // Hide all cards by default
                
                                if (category === 'all' || item.classList.contains(category)) {
                                    item.style.display = 'flex'; 
                                    
                                }
                            });
                        });
                    });
                });
                
                ScrollReveal().reveal('.right',  {
                    delay: 500,
                    beforeReveal: function (el) {
                        gsap.from(el, { duration: 1, x: '-100%', opacity: 0, ease: 'ease-in' });
                    },
                });


                



                
            const navSlide = () => {
                    const burger = document.querySelector(".burger");
                    const nav = document.querySelector(".nav-links");
                    const navLinks = document.querySelectorAll(".nav-links li");
                    //Toggle nav bar
                    burger.addEventListener("click", () => {
                      nav.classList.toggle("nav-active");
                  
                      //Animate links
                      navLinks.forEach((link, index) => {
                        //Dividing index by a number will give us a nice proprtional delay for each li
                        if (link.style.animation) {
                          link.style.animation = '';
                        } else {
                          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`;
                        }
                      });
                      burger.classList.toggle('toggle');
                    });
                  };
                  
                  navSlide();
                
                  


