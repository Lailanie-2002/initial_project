const footerbuttons = document.querySelectorAll('.footerClick');
const footerLinks = document.querySelectorAll('.footerClick ~ ul');

footerbuttons.forEach((button) => {
  button.addEventListener('click', () => {
    const siblingUL = button.nextElementSibling;

    if (siblingUL.tagName.toLowerCase() === 'ul') {
      siblingUL.classList.toggle('hidden');
    }
  });
});

footerLinks.forEach((link) => {
    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 960px)").matches) {
          link.classList.add("hidden");
        } else {
          link.classList.remove("hidden");
        }
      });
      
      if (window.matchMedia("(max-width: 960px)").matches) {
        link.classList.add("hidden");
      } else {
        link.classList.remove("hidden");
      }
})
