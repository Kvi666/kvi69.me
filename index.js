// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });


  // typewriter start
  const phrases = ["Developer", "Designer", "e-Sport Player"];
  let indexDeveloper = 0;
  let indexDesigner = 0;

  function type(id, index) {
    let charIndex = 0;
    let isForward = true;
    let currentText = '';

    function updateText() {
      currentText = phrases[index].substring(0, charIndex);
      document.getElementById(id).innerText = currentText;
    }

    function animate() {
      if (isForward) {
        charIndex++;
      } else {
        charIndex--;
      }

      updateText();

      if (isForward && charIndex > phrases[index].length) {
        isForward = false;
        setTimeout(animate, 1000);
      } else if (!isForward && charIndex === 0) {
        isForward = true;
        index = (index + 1) % phrases.length;
        setTimeout(() => type(id, index), 1000);
      } else {
        setTimeout(animate, 100);
      }
    }

    animate();
  }

  type('developer', indexDeveloper);
  type('designer', indexDesigner);
  // typewriter end


  document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top-btn');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});
