// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });


  // typewriter 
  const phrases = ["Developer", "Designer" ,"e-Sport Player"];
  let index = 0;
  let isForward = true;
  let charIndex = 0;
  const speed = 100; // Typing speed in milliseconds

  function typeWriter() {
    const textElement = document.getElementById('typewriter-text');
    const currentPhrase = phrases[index];

    if (isForward) {
      textElement.innerHTML = currentPhrase.substring(0, charIndex++);
      if (charIndex > currentPhrase.length) {
        isForward = false;
        setTimeout(typeWriter, speed * 2); // Pause at the end of forward typing
      } else {
        setTimeout(typeWriter, speed);
      }
    } else {
      textElement.innerHTML = currentPhrase.substring(0, charIndex--);
      if (charIndex === 0) {
        isForward = true;
        index = (index + 1) % phrases.length; // Switch to the next phrase
        setTimeout(typeWriter, speed); // Pause before starting backward typing
      } else {
        setTimeout(typeWriter, speed);
      }
    }
  }

  // Start the typewriter effect
  typeWriter();