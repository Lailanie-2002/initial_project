const navlinks = document.querySelectorAll('nav ul li a');

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      console.log(`Section ${sectionId} is in view`);

      navlinks.forEach((navlink) => {
        const currentnav = navlink.getAttribute('href');
        if (currentnav === `#${sectionId}`) {
          navlink.classList.add('activenav');
        } else {
          navlink.classList.remove('activenav');
        }
      });
    } else {
      const sectionId = entry.target.id;
      console.log(`Section ${sectionId} is out of view`);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Adjust the threshold as needed
});

const sectionsToObserve = document.querySelectorAll(
  'section.home, section.furniture, section.aboutus, section.contactus, section.blognavpage'
);

sectionsToObserve.forEach((section) => {
  observer.observe(section);
});

console.log(sectionsToObserve);
