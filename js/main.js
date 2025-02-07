
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section") ;
    const footers =  document.querySelectorAll("footer");
  
    const observerOptions = {
      threshold: 0.2, 
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionElements = entry.target.querySelectorAll("article, div, img, button");
          sectionElements.forEach((el) => {
            el.classList.add("visible");
          });
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);
  
    sections.forEach((section) => observer.observe(section));
    footers.forEach((footer) => observer.observe(footer));
  });
  
