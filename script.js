    const slides = document.getElementById('slides');
    const images = slides.querySelectorAll('img');
    let index = 0;

    function showSlide(i) {
    index = (i + images.length) % images.length;
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
    showSlide(index + 1);
    }

    function prevSlide() {
    showSlide(index - 1);
    }

    // Auto-change slides every 3 seconds
    setInterval(nextSlide, 3000);

 window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

    const links = document.querySelectorAll('a');
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if(link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
    
  window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};


