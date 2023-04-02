document.addEventListener('DOMContentLoaded', function(){
  const bodyEl = document.querySelector('body');
  const mobileNav = document.querySelector('.site-navigation');

  const mobileToggle = document.querySelector('.site-actions__mobile-menu');
  const mobileMenuClose = document.querySelector('.site-navigation__close');
  const mobileMenubackdrop = document.querySelector('.site-navigation__backdrop');

  //const mobileMenubackdrop = document.createElement('div');
  //mobileMenubackdrop.classList.add('site-navigation__backdrop');

  //Open Mobile menu
  mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('opened');
    bodyEl.classList.toggle('opened');

    if(mobileNav.classList.contains('opened')){
      mobileNav.after(mobileMenubackdrop);
    }else{
      mobileMenubackdrop.remove();
    }
  });

  //Close Mobile Menu
  mobileMenubackdrop.addEventListener('click', () => {
    mobileNav.classList.remove('opened');
    bodyEl.classList.remove('opened');
    mobileMenubackdrop.remove();
  });

});

//Theme Switch
(() => {
  const themeSwitch = document.querySelector('.site-actions__theme-toggle');

  themeSwitch.addEventListener('click', () => {
    let rootElement = document.documentElement;
    let currentTheme = rootElement.getAttribute('data-theme-mode');

    if(currentTheme == 'light'){
      rootElement.setAttribute('data-theme-mode', 'dark');
    }else{
      rootElement.setAttribute('data-theme-mode', 'light');
    }

    return false;
  });
})();


// Accordion List
(() => {
  document.querySelectorAll('.accordion-card').forEach((accordion) => {
    const heading = accordion.querySelector('.accordion-card__title');

    accordion.classList.add('accordion-card--js');

    heading.nextElementSibling.hidden = true;
    heading.innerHTML = `
      <button class="accordion-card__toggle" aria-expanded="false">
        ${heading.textContent}
        <svg aria-hidden="true" focusable="false" height="18px" viewBox="0 0 18 18" width="18px">
          <path d="M13.5,8.625c0,-0.207 -0.168,-0.375 -0.375,-0.375l-8.25,0c-0.207,0 -0.375,0.168 -0.375,0.375l0,0.75c0,0.207 0.168,0.375 0.375,0.375l8.25,0c0.207,0 0.375,-0.168 0.375,-0.375l0,-0.75Z" style="fill:currentColor;"/>
          <path class="vertical-line" d="M9.375,13.5c0.207,-0 0.375,-0.168 0.375,-0.375l0,-8.25c0,-0.207 -0.168,-0.375 -0.375,-0.375l-0.75,0c-0.207,0 -0.375,0.168 -0.375,0.375l-0,8.25c-0,0.207 0.168,0.375 0.375,0.375l0.75,-0Z" style="fill:currentColor;"/>
        </svg>
      </button>
    `;

    const btn = heading.querySelector('button');

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !expanded);
      heading.nextElementSibling.hidden = expanded;
    });
  });
})();





