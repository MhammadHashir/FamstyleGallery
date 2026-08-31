document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      if (open) {
        nav.style.display = 'block';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#f7f2e7';
        nav.style.borderTop = '1px solid rgba(33,27,20,0.14)';
        nav.style.padding = '18px 28px';
        nav.querySelector('ul').style.flexDirection = 'column';
        nav.querySelector('ul').style.alignItems = 'flex-start';
        nav.querySelector('ul').style.gap = '18px';
      } else {
        nav.style.display = '';
      }
    });
  }

  // scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // simple contact form (no backend) — confirms via WhatsApp link
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var message = form.querySelector('#message').value.trim();
      var status = form.querySelector('.form-status');
      if (!name || !message) {
        if (status) { status.textContent = 'Please fill in your name and message.'; }
        return;
      }
      var text = encodeURIComponent('Assalam-o-Alaikum, my name is ' + name + '. ' + message);
      window.open('https://wa.me/923030581519?text=' + text, '_blank');
      if (status) { status.textContent = 'Opening WhatsApp to send your message…'; }
    });
  }
});
