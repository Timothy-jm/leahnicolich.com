const contactEmail = '';

const artwork = (folder, entries) => entries.map(([file, title, details]) => ({
  src: `assets/images/${folder}/${file}`,
  title,
  details,
  alt: `${title}, artwork by Leah Nicolich`
}));

const collections = {
  paintings: {
    title: 'Paintings',
    eyebrow: 'Selected work · 2015–2016',
    intro: 'Small, intimate studies make psychological tension physical: a grip, a pull, a quiet attempt to change what cannot be changed.',
    items: artwork('paintings', [
      ['painted-hand-1.jpg', 'Painted Hand 1', 'Oil on Masonite · 6 × 6 in · 2016'],
      ['painted-hand-3.jpg', 'Painted Hand 3', 'Oil on Masonite · 6 × 6 in · 2016'],
      ['painted-hand-2.jpg', 'Painted Hand 2', 'Oil on Masonite · 6 × 6 in · 2016'],
      ['friday-250pm.jpg', 'Friday, 2:50pm', 'Oil on Masonite · 9 × 12 in · 2016'],
      ['monday-300am.jpg', 'Monday, 3:00am', 'Oil on Masonite · 11 × 14 in · 2016'],
      ['thursday-1020am.jpg', 'Thursday, 10:20am', 'Oil on Masonite · 11 × 14 in · 2016'],
      ['hand-on-glass-4a.jpg', 'Hand on Glass 4', 'Oil on Masonite · 8 × 10 in · 2016'],
      ['hand-on-glass-4b.jpg', 'Hand on Glass 4', 'Oil on Masonite · 8 × 10 in · 2016'],
      ['hand-on-glass-1.jpg', 'Hand on Glass 1', 'Oil on Masonite · 8 × 10 in · 2016'],
      ['contemplation.jpg', 'Contemplation', 'Oil on paper · 30 × 22 in · 2015']
    ])
  },
  drawings: {
    title: 'Drawings',
    eyebrow: 'Hand series · 2016',
    intro: 'Charcoal studies of hands held in distinct moments of pressure, hesitation, and release.',
    items: artwork('drawings', [
      ['drawn-hand-1.jpg', 'Drawn Hand 1', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-2.jpg', 'Drawn Hand 2', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-4.jpg', 'Drawn Hand 4', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-5.jpg', 'Drawn Hand 5', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-6.jpg', 'Drawn Hand 6', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-8.jpg', 'Drawn Hand 8', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-9.jpg', 'Drawn Hand 9', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-11.jpg', 'Drawn Hand 11', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-12.jpg', 'Drawn Hand 12', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-13.jpg', 'Drawn Hand 13', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-14.jpg', 'Drawn Hand 14', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-17.jpg', 'Drawn Hand 17', 'Charcoal on toned paper · 8 × 8¼ in · 2016'],
      ['drawn-hand-18.jpg', 'Drawn Hand 18', 'Charcoal on toned paper · 8 × 8¼ in · 2016']
    ])
  },
  sculptures: {
    title: 'Sculptures',
    eyebrow: 'Hand series · 2016',
    intro: 'Miniature sculpted hands gather into a dense record of individual moments, each gesture carrying a separate tension.',
    items: artwork('sculptures', [
      ['march-11-front.jpg', 'March 11th — Front', 'Sculpey · 6 × 7 × 5 in · 2016'],
      ['march-11-top.jpg', 'March 11th — Top', 'Sculpey · 6 × 7 × 5 in · 2016'],
      ['march-12.jpg', 'March 12th', 'Sculpey · 5 × 2 × 1½ in · 2016'],
      ['hand-series-1.jpg', 'Hand Series — Hand 1', 'Sculpey · 3 × 1 × 4½ in · 2016'],
      ['hand-series-2-front.jpg', 'Hand Series — Hand 2', 'Sculpey · 3 × 1 × 4½ in · 2016']
    ])
  },
  'past-projects': {
    title: 'Past Projects',
    eyebrow: 'Selected work · 2014–2015',
    intro: 'Earlier work across painting, drawing, ceramics, and paper sculpture.',
    items: artwork('past', [
      ['neighbors-morning.jpg', 'Neighbors — Morning', 'Matte flow acrylic on paper · 4 × 5½ in · 2015'],
      ['neighbors-evening.jpg', 'Neighbors — Evening', 'Matte flow acrylic on paper · 4 × 5½ in · 2015'],
      ['neighbors-night.jpg', 'Neighbors — Night', 'Matte flow acrylic on paper · 4 × 5½ in · 2015'],
      ['baldwin-park.jpg', 'Baldwin Park', 'Matte flow acrylic on paper · 3 × 5½ in · 2015'],
      ['sketch.jpg', 'Sketch', 'Charcoal on paper · 8 × 11 in · 2014'],
      ['stephanie-front.jpg', 'Stephanie — Front', 'Raku · 4 × 3½ × 6 in · 2014'],
      ['stephanie-side.jpg', 'Stephanie — Side', 'Raku · 4 × 3½ × 6 in · 2014'],
      ['stephanie-back.jpg', 'Stephanie — Back', 'Raku · 4 × 3½ × 6 in · 2014'],
      ['white.jpg', 'White', 'Paper · 8 × 3½ × 11 in · 2015']
    ])
  }
};

const content = document.querySelector('#content');
const nav = document.querySelector('#site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
let activeGallery = [];
let activeIndex = 0;

document.querySelector('#year').textContent = new Date().getFullYear();

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const collectionCard = (slug, image, number) => `
  <a class="collection-card" href="#/${slug}">
    <span class="collection-number">${number}</span>
    <img src="${image}" alt="" loading="lazy">
    <span class="collection-name">${collections[slug].title}</span>
    <span class="collection-arrow" aria-hidden="true">↗</span>
  </a>`;

const renderHome = () => {
  document.title = 'Leah Nicolich — Artist';
  content.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Long Island, New York</p>
        <h1>Leah<br>Nicolich</h1>
        <p class="hero-intro">Paintings, drawings, and sculpture exploring the quiet physical language of internal struggle.</p>
        <a class="text-link" href="#/paintings">View selected work <span aria-hidden="true">→</span></a>
      </div>
      <figure class="hero-art">
        <img src="assets/images/home/hero.jpg" alt="A sculptural arrangement of hands by Leah Nicolich">
      </figure>
    </section>
    <section class="collections-section" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">The work</h2>
      </div>
      <div class="collection-list">
        ${collectionCard('paintings', 'assets/images/paintings/monday-300am.jpg', '01')}
        ${collectionCard('drawings', 'assets/images/drawings/drawn-hand-17.jpg', '02')}
        ${collectionCard('sculptures', 'assets/images/sculptures/march-11-top.jpg', '03')}
        ${collectionCard('past-projects', 'assets/images/past/neighbors-night.jpg', '04')}
      </div>
    </section>
    <section class="home-about">
      <p class="eyebrow">Artist statement</p>
      <p class="home-quote">“I display emotional tensions in a physical experience.”</p>
      <a class="text-link" href="#/about">Read about the work <span aria-hidden="true">→</span></a>
    </section>`;
};

const renderGallery = (slug) => {
  const collection = collections[slug];
  if (!collection) return renderNotFound();
  document.title = `${collection.title} — Leah Nicolich`;
  activeGallery = collection.items;
  const cards = collection.items.map((item, index) => `
    <button class="artwork-card" type="button" data-image-index="${index}" aria-label="View ${escapeHtml(item.title)} full size">
      <span class="artwork-image"><img src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy"></span>
      <span class="artwork-caption"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.details)}</span></span>
    </button>`).join('');

  content.innerHTML = `
    <section class="page-shell">
      <header class="page-intro">
        <p class="eyebrow">${collection.eyebrow}</p>
        <h1>${collection.title}</h1>
        <p>${collection.intro}</p>
      </header>
      <div class="artwork-grid">${cards}</div>
    </section>`;

  content.querySelectorAll('[data-image-index]').forEach((button) => {
    button.addEventListener('click', () => openLightbox(Number(button.dataset.imageIndex)));
  });
};

const renderAbout = () => {
  document.title = 'About — Leah Nicolich';
  content.innerHTML = `
    <section class="page-shell about-page">
      <header class="page-intro about-intro">
        <p class="eyebrow">Artist statement</p>
        <h1>Making the<br>invisible visible.</h1>
      </header>
      <div class="statement-grid">
        <div class="statement-copy">
          <p>My current work is about internal struggles, inspired in a large part from my own struggle with generalized anxiety disorder. It’s exhausting trying to constantly change things that can’t be changed, and the silent fights I have go unseen. The battle with anxiety isn’t the only focus of my work, but these helpless, quiet struggles people endure are.</p>
          <p>To illustrate my point, I display emotional tensions in a physical experience. Paintings have hands gripping at body parts, trying to pointlessly change the skin. Sculptures are flexed miniature hands clustered in a pile. In these works, each hand is contorted in its own position to represent a different moment of trouble, with the intent to demonstrate how quickly that pile can become suffocating.</p>
          <p>What has me fascinated about this topic is the odd balance between frantic tension and overwhelming defeat that people experience during mental struggles. I prefer to work small because I believe there is an intimacy with objects that can fit in your hand. My work is made to be approachable, with the aim for people to find relief in having their troubles physically represented.</p>
        </div>
        <div class="statement-images" aria-label="Studio and process images">
          <img src="assets/images/statement/statement-1.jpg" alt="Detail from Leah Nicolich's art practice" loading="lazy">
          <img src="assets/images/statement/statement-3.jpg" alt="Artwork detail by Leah Nicolich" loading="lazy">
          <img src="assets/images/statement/statement-7.jpg" alt="Sculptural work by Leah Nicolich" loading="lazy">
        </div>
      </div>
      <div class="cv-section">
        <div>
          <p class="eyebrow">Biography</p>
          <h2>Long Island, New York.<br>Lives and works in New York.</h2>
        </div>
        <div class="cv-list">
          <section><h3>Education</h3><p>Adelphi University, Garden City, NY<br><span>BFA Studio Art, Art History Minor</span></p></section>
          <section><h3>Selected exhibitions</h3><div><p><strong>2016</strong> Senior Art Exhibition; Pop Swap — Adelphi University Galleries, Garden City, NY.</p><p><strong>2015</strong> Let Them Eat Cake; Pop Swap; Photo Annual — Adelphi University Galleries, Garden City, NY.</p><p><strong>2014</strong> The Brooks-lyn Experiment — Postmark Café, Brooklyn, NY; Pop Swap — Adelphi University Galleries.</p></div></section>
          <section><h3>Awards</h3><div><p><strong>2016</strong> President Annual Purchase Prize; A. Conger Goodyear Award — Adelphi University.</p><p><strong>2015</strong> Photo Annual Award — Adelphi University.</p></div></section>
          <section><h3>Collection</h3><p>Adelphi University, Garden City, NY.</p></section>
        </div>
      </div>
    </section>`;
};

const renderNews = () => {
  document.title = 'News & Links — Leah Nicolich';
  content.innerHTML = `
    <section class="page-shell">
      <header class="page-intro"><p class="eyebrow">Press · Exhibitions · Community</p><h1>News & Links</h1></header>
      <div class="news-grid">
        <a class="news-card" href="http://lipulse.com/2016/09/29/watch-2016-adelphi-university-pulse-cover-chalk/" target="_blank" rel="noopener"><img src="assets/images/news/chalk-up.jpg" alt="Leah Nicolich creating chalk artwork" loading="lazy"><span><small>September 22, 2016</small><strong>Pulse Article — Chalk Up</strong><em>Read article ↗</em></span></a>
        <a class="news-card" href="https://www.theodysseyonline.com/internal-struggles-making-invisible-visible" target="_blank" rel="noopener"><img src="assets/images/news/senior-show-1.jpg" alt="Senior Art Exhibition installation" loading="lazy"><span><small>May 26, 2016</small><strong>Internal Struggles: Making the Invisible Visible</strong><em>Read article ↗</em></span></a>
        <a class="news-card" href="https://adelphi.smugmug.com/Art-Exhibitions/2016-BFA-Fine-Arts-Exhibition/" target="_blank" rel="noopener"><img src="assets/images/news/bfa-19.jpg" alt="Work installed at the Senior Art Exhibition" loading="lazy"><span><small>May 9, 2016</small><strong>Senior Art Exhibition — Photos</strong><em>View photographs ↗</em></span></a>
        <article class="news-card"><img src="assets/images/news/senior-show-poster.jpg" alt="Senior Art Exhibition poster" loading="lazy"><span><small>April 6, 2016</small><strong>Senior Art Exhibition — Poster</strong></span></article>
      </div>
      <section class="artists-list">
        <p class="eyebrow">Other artists</p>
        <div>
          <a href="https://www.carsonfox.com/" target="_blank" rel="noopener">Carson Fox ↗</a>
          <a href="https://brooks-frederick.squarespace.com/" target="_blank" rel="noopener">Brooks Frederick ↗</a>
          <a href="http://alainahemlall.com/" target="_blank" rel="noopener">Alaina Hemlall ↗</a>
          <a href="http://jenmaloney.com/" target="_blank" rel="noopener">Jen Maloney ↗</a>
          <a href="https://timothyjm.com/" target="_blank" rel="noopener">Timothy Moore ↗</a>
          <a href="http://www.laurennicolichdesign.com/" target="_blank" rel="noopener">Lauren Nicolich ↗</a>
          <a href="http://www.saucedostudio.com/" target="_blank" rel="noopener">Christopher Saucedo ↗</a>
          <a href="https://www.katherinevolpeart.com/" target="_blank" rel="noopener">Katherine Volpe ↗</a>
        </div>
      </section>
    </section>`;
};

const renderContact = () => {
  document.title = 'Contact — Leah Nicolich';
  content.innerHTML = `
    <section class="page-shell contact-page">
      <div class="contact-copy"><p class="eyebrow">Get in touch</p><h1>Contact</h1><p>For exhibition, collection, or general inquiries, send Leah a note.</p><div class="contact-socials"><a href="https://www.instagram.com/leahnicolich/" target="_blank" rel="noopener">Instagram ↗</a><a href="https://www.linkedin.com/in/leah-nicolich-11a26582/" target="_blank" rel="noopener">LinkedIn ↗</a></div></div>
      <form class="contact-form" id="contact-form">
        <div class="field-row"><div class="field"><label for="first-name">First name</label><input id="first-name" name="firstName" autocomplete="given-name" required></div><div class="field"><label for="last-name">Last name</label><input id="last-name" name="lastName" autocomplete="family-name" required></div></div>
        <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="subject">Subject</label><input id="subject" name="subject" required></div>
        <div class="field"><label for="message">Message</label><textarea id="message" name="message" required></textarea></div>
        <button class="submit-button" type="submit">Prepare email</button><p class="form-status" id="form-status" aria-live="polite"></p>
      </form>
    </section>`;
  content.querySelector('#contact-form').addEventListener('submit', handleContactSubmit);
};

const handleContactSubmit = (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (!contactEmail) {
    status.textContent = 'The email destination still needs to be connected before launch. Please use Instagram or LinkedIn for now.';
    return;
  }
  const form = new FormData(event.currentTarget);
  const name = `${form.get('firstName')} ${form.get('lastName')}`.trim();
  const body = `${form.get('message')}\n\nFrom: ${name}\nEmail: ${form.get('email')}`;
  location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(form.get('subject'))}&body=${encodeURIComponent(body)}`;
};

const renderNotFound = () => {
  document.title = 'Page not found — Leah Nicolich';
  content.innerHTML = `<section class="not-found"><p class="eyebrow">404</p><h1>Page not found.</h1><a class="text-link" href="#/">Return home →</a></section>`;
};

const openLightbox = (index) => {
  activeIndex = index;
  updateLightbox();
  lightbox.showModal();
  document.body.classList.add('is-locked');
};

const updateLightbox = () => {
  const item = activeGallery[activeIndex];
  if (!item) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.innerHTML = `<strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.details)}</span>`;
};

const closeLightbox = () => { lightbox.close(); document.body.classList.remove('is-locked'); };
const stepLightbox = (amount) => { activeIndex = (activeIndex + amount + activeGallery.length) % activeGallery.length; updateLightbox(); };

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-previous').addEventListener('click', () => stepLightbox(-1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
lightbox.addEventListener('close', () => document.body.classList.remove('is-locked'));
document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') stepLightbox(-1);
  if (event.key === 'ArrowRight') stepLightbox(1);
});

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

const updateNavigation = (route) => {
  const firstPart = route.split('/').filter(Boolean)[0] || '';
  nav.querySelectorAll('a').forEach((link) => {
    if (link.dataset.route === firstPart) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  nav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
};

const route = () => {
  const path = (location.hash.slice(1) || '/').replace(/\/+$/, '') || '/';
  if (path === '/') renderHome();
  else if (collections[path.slice(1)]) renderGallery(path.slice(1));
  else if (path === '/about' || path === '/artist-statement' || path === '/exhibitions') renderAbout();
  else if (path === '/news' || path === '/news/links') renderNews();
  else if (path === '/contact') renderContact();
  else renderNotFound();
  updateNavigation(path);
  window.scrollTo(0, 0);
};

window.addEventListener('hashchange', route);
route();
