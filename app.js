/* =====================================================
   PREMIUM ROMANTIC LOVE WEBSITE - COMPLETE JS
   ===================================================== */

// ===== LOGOUT =====
function handleLogout() {
  // Create full-screen goodbye flash
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: fixed; inset: 0; z-index: 99999;
    background: linear-gradient(135deg, #1a0a1e, #2d0a2e, #1f0a2f);
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    opacity: 0; transition: opacity 0.5s ease;
  `;
  flash.innerHTML = `
    <div style="font-size:5rem; animation: hb 0.8s ease-in-out infinite; margin-bottom:20px;">🌹</div>
    <div style="font-family:'Playfair Display',serif; font-size:1.8rem; color:#ffb3d0; font-weight:700;">See You Soon, My Love</div>
    <div style="font-family:'Dancing Script',cursive; font-size:1.1rem; color:#c3b1e1; margin-top:10px; opacity:0.8;">Missing you already... 💕</div>
    <style>@keyframes hb { 0%,100%{transform:scale(1);} 50%{transform:scale(1.25);} }</style>
  `;
  document.body.appendChild(flash);
  setTimeout(() => { flash.style.opacity = '1'; }, 10);
  setTimeout(() => { window.location.href = 'login.html'; }, 1800);
}

// ===== CONFIGURATION =====
const CONFIG = {
  // SET YOUR RELATIONSHIP START DATE HERE
  loveStartDate: new Date('2025-02-07T00:00:00'),

  // Photo paths - relative to index.html
  photos: [
    {
      src: 'photos/photo_1.jpeg',
      title: 'Our Little Paradise',
      desc: 'This wasn\'t just another picture. It was another beautiful chapter in our story. Looking at you in this moment reminds me how lucky I am to walk through life with someone as wonderful as you. Every glance, every laugh, every feeling captured here will forever remain one of my most treasured memories.',
      quote: '❝ You are my paradise ❞'
    },
    {
      src: 'photos/photo_2.jpeg',
      title: 'The Smile I Fell For',
      desc: 'That smile. The one that stops time. The one that makes every difficult day feel like it was worth it, because it led me here — to you. I could spend a lifetime memorizing the way you light up, and it still wouldn\'t feel like enough.',
      quote: '❝ Your smile is my favorite sight ❞'
    },
    {
      src: 'photos/photo_3.jpeg',
      title: 'A Forever Memory',
      desc: 'Some moments are so beautiful that the heart refuses to let them go. This is one of those moments. Frozen in time, yet alive in feeling — a reminder that what we have is rare, real, and incredibly beautiful.',
      quote: '❝ This moment lives in my heart forever ❞'
    },
    {
      src: 'photos/photo_4.jpeg',
      title: 'My Favorite Place Is Beside You',
      desc: 'Wherever you are becomes my favorite place in the world. With you, even the most ordinary moments feel extraordinary. Every adventure we share, every quiet instant we spend together — each one becomes a treasure I carry with me always.',
      quote: '❝ Home is wherever you are ❞'
    },
    {
      src: 'photos/photo_5.jpeg',
      title: 'Our Beautiful Journey',
      desc: 'Every journey is more beautiful when shared with the right person. And with you, every step forward feels like a gift. I look at this picture and see not just a moment, but a promise — that every path we walk, we walk together.',
      quote: '❝ Every road is better with you ❞'
    },
    {
      src: 'photos/photo_6.jpeg',
      title: 'Written in the Stars',
      desc: 'I believe some meetings are written long before they happen. Ours was written in the stars, destined to unfold exactly as it did. And now, looking at you, I understand why everything in my life happened — it all led me to you.',
      quote: '❝ We were meant to be ❞'
    },
    {
      src: 'photos/photo_7.jpeg',
      title: 'You Are My Sunshine',
      desc: 'On cloudy days, just thinking of you makes everything brighter. You are the warmth that finds me in every cold moment, the light that guides me through every dark night. You are, quite simply, my sunshine.',
      quote: '❝ You brighten my every day ❞'
    },
    {
      src: 'photos/photo_8.jpeg',
      title: 'Captured in Love',
      desc: 'There are moments so full of love that even the air feels different. This is one of those moments. Where everything else fades and all that exists is you and me and this beautiful, unspoken language we share.',
      quote: '❝ Every moment with you is magic ❞'
    },
    {
      src: 'photos/photo_9.jpeg',
      title: 'My Heart\'s Favorite Chapter',
      desc: 'If my life were a book, this would be my favorite chapter. The one I return to again and again. The one I could read a thousand times and still feel the same butterflies, the same warmth, the same overwhelming gratitude that you chose me.',
      quote: '❝ You are my greatest story ❞'
    },
    {
      src: 'photos/photo_10.jpeg',
      title: 'Together Is My Favorite Place',
      desc: 'I used to think happiness was a destination. Something to chase, somewhere to arrive. Then I found you, and I understood — happiness is not a place. It\'s a person. It\'s this moment. It\'s you.',
      quote: '❝ You are my happy place ❞'
    },
    {
      src: 'photos/photo_11.jpeg',
      title: 'Love Beyond Words',
      desc: 'There are feelings so deep that words feel inadequate. What I feel for you is one of those feelings. It lives somewhere between the first breath of morning and the last thought before sleep — vast, quiet, and endlessly beautiful.',
      quote: '❝ Words fall short of how much I love you ❞'
    },
    {
      src: 'photos/photo_12.jpeg',
      title: 'Infinite Moments of Us',
      desc: 'Every photo we take is a tiny miracle — a fraction of a second held still forever. But the love in this image is not frozen. It grows. It deepens. It becomes more beautiful with every passing day, just like us.',
      quote: '❝ Our love grows more beautiful every day ❞'
    },
    {
      src: 'photos/photo_13.jpeg',
      title: 'My Greatest Adventure',
      desc: 'I have seen beautiful places and lived beautiful moments. But nothing compares to the adventure of loving you. Of growing with you. Of discovering, day by day, how extraordinary ordinary life becomes when you live it with your person.',
      quote: '❝ You are my greatest adventure ❞'
    }
  ]
};

// ===== 100 REASONS =====
const REASONS = [
  "❤️ Your beautiful smile that lights up every room",
  "❤️ The way your eyes sparkle when you laugh",
  "❤️ Your endless kindness to everyone around you",
  "❤️ How you make me feel at home wherever we are",
  "❤️ Your warm and caring heart",
  "❤️ The way you always know what I need",
  "❤️ Your beautiful laugh that is my favorite sound",
  "❤️ How you support me without hesitation",
  "❤️ Your incredible strength and courage",
  "❤️ The way ordinary days become magical with you",
  "❤️ Your honest and pure soul",
  "❤️ How you make me want to be a better person",
  "❤️ Your gentle touch that calms every storm",
  "❤️ The way you listen — truly, deeply listen",
  "❤️ Your beautiful mind and the way you think",
  "❤️ How you love with your whole heart",
  "❤️ The way you make everyone feel special",
  "❤️ Your patience, even when I am difficult",
  "❤️ How you find beauty in the smallest things",
  "❤️ The way your presence fills any room",
  "❤️ Your bravery in facing everything with grace",
  "❤️ The dreams you carry and the passion you have",
  "❤️ How you make me feel seen and understood",
  "❤️ Your ability to make me laugh without trying",
  "❤️ The way you say my name",
  "❤️ How your hugs feel like coming home",
  "❤️ Your warmth that melts every cold moment",
  "❤️ How protective and caring you are",
  "❤️ The little things you do without being asked",
  "❤️ How you never give up on the things you love",
  "❤️ Your beautiful heart that loves so deeply",
  "❤️ The way you bring peace to everything chaotic",
  "❤️ How you celebrate every small victory",
  "❤️ Your loyalty that I treasure more than anything",
  "❤️ The way time stands still when we are together",
  "❤️ How you turn arguments into understanding",
  "❤️ Your ability to see the good in everything",
  "❤️ The way you make me feel safe and loved",
  "❤️ How you remember every little detail about me",
  "❤️ Your authenticity — you are always fully you",
  "❤️ The way you dance when no one is watching",
  "❤️ How your enthusiasm is completely contagious",
  "❤️ Your thoughtfulness in everything you do",
  "❤️ The way you hold my hand like it matters",
  "❤️ How you always know just the right thing to say",
  "❤️ Your resilience in the face of every challenge",
  "❤️ The way you make me feel chosen every day",
  "❤️ How you inspire me to chase my dreams",
  "❤️ Your love for the little beautiful things in life",
  "❤️ The way you look at me like I am enough",
  "❤️ How you never let me feel alone",
  "❤️ Your fierce love that never wavers",
  "❤️ The way you make every place feel like home",
  "❤️ How you carry yourself — with quiet confidence",
  "❤️ Your ability to forgive and move forward",
  "❤️ The way you grow and evolve every day",
  "❤️ How you always stand by what you believe",
  "❤️ Your endless curiosity about the world",
  "❤️ The way you find humor in everything",
  "❤️ How deeply you care for the people you love",
  "❤️ Your courage to be vulnerable with me",
  "❤️ The way you make sacrifices without complaint",
  "❤️ How your presence is better than any cure",
  "❤️ Your love that feels like a warm fireplace",
  "❤️ The way you make me feel like I matter",
  "❤️ How you believe in me even when I don't",
  "❤️ Your gentle words that heal every wound",
  "❤️ The way you make peace feel possible",
  "❤️ How our silences are never uncomfortable",
  "❤️ Your heart that knows exactly how to love me",
  "❤️ The way you embrace my imperfections",
  "❤️ How you make every meal more delicious",
  "❤️ Your joy that is completely infectious",
  "❤️ The way you show up, every single time",
  "❤️ How you make loving you the easiest thing",
  "❤️ Your ability to make me feel beautiful",
  "❤️ The way you turn pain into purpose",
  "❤️ How you see the person I'm trying to become",
  "❤️ Your love for family and the people around you",
  "❤️ The way you handle everything with grace",
  "❤️ How you make every ending feel like a new beginning",
  "❤️ Your unwavering faith in us",
  "❤️ The way you make me believe in forever",
  "❤️ How you make even the hardest days feel lighter",
  "❤️ Your smile that I would cross oceans to see",
  "❤️ The way you grow more beautiful every day",
  "❤️ How you carry love like it's the most natural thing",
  "❤️ Your gentleness with everything fragile",
  "❤️ The way you dream with your whole heart",
  "❤️ How you make me feel deeply, completely loved",
  "❤️ Your voice — my favorite sound in the universe",
  "❤️ The way every version of you is beautiful",
  "❤️ How you remind me what truly matters",
  "❤️ Your love that makes life feel like poetry",
  "❤️ The way you are always, completely enough",
  "❤️ How you turn my world into something magical",
  "❤️ Your mere existence — beautiful and rare",
  "❤️ Everything you are, everything you do",
  "❤️ Simply because you are you — and that's everything"
];

// ===== QUOTES =====
const QUOTES = [
  { text: "You are my today and all of my tomorrows.", author: "— Forever Yours" },
  { text: "My favorite place is wherever you are.", author: "— Your Person" },
  { text: "Every love story is beautiful, but ours is my favorite.", author: "— From My Heart" },
  { text: "You make my world brighter just by being in it.", author: "— With All My Love" },
  { text: "In a sea of people, my eyes will always search for you.", author: "— Always" },
  { text: "I love you not only for what you are, but for what I am when I am with you.", author: "— Elizabeth Barrett Browning" },
  { text: "You are the first thought in the morning and the last dream at night.", author: "— Forever" },
  { text: "My heart is and always will be yours.", author: "— Jane Austen" },
  { text: "If I know what love is, it is because of you.", author: "— Herman Hesse" },
  { text: "You had me at hello — and every second since.", author: "— Your Heart" },
  { text: "I would choose you in a hundred lifetimes, in a hundred worlds.", author: "— Always Yours" },
  { text: "The best thing to hold onto in life is each other.", author: "— Audrey Hepburn" }
];

// ===== DREAMS =====
const DREAMS = [
  { emoji: "🏡", title: "Our Dream Home", desc: "A place we build together — filled with laughter, warmth, and a love that makes every corner glow." },
  { emoji: "✈️", title: "Traveling the World", desc: "Every destination more beautiful because I get to discover it with you by my side." },
  { emoji: "🌅", title: "Watching Every Sunset", desc: "Side by side, wrapped in golden light, watching the sky paint itself for us." },
  { emoji: "☕", title: "Morning Coffee Together", desc: "Starting every day with you — slow mornings, warm cups, and your sleepy smile." },
  { emoji: "🎂", title: "Every Birthday Together", desc: "Celebrating you every year, watching you grow more beautiful with each one." },
  { emoji: "👶", title: "Building Our Family", desc: "A future full of little laughs and small hands, created from our love." },
  { emoji: "📸", title: "A Million More Photos", desc: "Filling albums with chapters of us — adventures, lazy days, and everything in between." },
  { emoji: "👴", title: "Growing Old Together", desc: "Still holding your hand when our hair turns silver, still choosing you every single day." },
  { emoji: "🌸", title: "Spring Walks Together", desc: "Strolling through blooming worlds with you, finding beauty in every quiet moment." },
  { emoji: "🌙", title: "Late Night Conversations", desc: "Talking until the world sleeps, sharing our hearts in the stillness of the night." },
  { emoji: "🎉", title: "Celebrating Every Win", desc: "Cheering loudest for each other — your victories are always mine too." },
  { emoji: "💫", title: "A Lifetime of Love", desc: "Not just years together, but a life richly lived — in love, in joy, in each other." }
];

// ===== LOVE STATS =====
const STATS = [
  { icon: "∞", num: "∞", label: "Endless Love", animate: false },
  { icon: "❤️", num: "∞", label: "Infinite Memories", animate: false },
  { icon: "😊", num: "∞", label: "Smiles Shared", animate: false },
  { icon: "💕", num: "∞", label: "Forever Together", animate: false }
];

// ===== FLOATING NOTES =====
const NOTES = [
  "❤️ Forever Yours", "💕 You Complete Me", "🌹 My Sunshine",
  "✨ My Favorite Person", "💖 My Forever", "🌸 You & Me",
  "💫 Always Yours", "🌙 My Moonlight", "🦋 My Everything",
  "💝 Endlessly Loved", "🌺 My Beautiful", "⭐ My Star"
];

// ===== HEART MESSAGES =====
const HEART_MESSAGES = [
  "You are my everything 💖",
  "I love you to infinity ❤️",
  "My heart beats for you 💕",
  "You are my world 🌹",
  "Forever and always yours ✨",
  "You make life beautiful 💫"
];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic', offset: 80 });

  initHeroCanvas();
  initParticles();
  initFloatingNotes();
  initLoveTimer();
  initGallery();
  initReasons();
  initQuotes();
  initHeart();
  initSurprise();
  initDreams();
  initStats();
  initFooterCanvas();
  initFooterFireflies();
  initMusicPlayer();
  initSparkles();
});

// ===== HERO CANVAS (Hearts + Stars + Petals) =====
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const SYMBOLS = ['❤️', '💕', '✨', '🌹', '💫', '⭐', '🌸', '💖'];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = H + 30;
      this.size = 10 + Math.random() * 18;
      this.speed = 0.4 + Math.random() * 1;
      this.symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      this.opacity = 0.3 + Math.random() * 0.5;
      this.drift = (Math.random() - 0.5) * 0.5;
      this.wobble = Math.random() * Math.PI * 2;
      this.wobbleSpeed = 0.02 + Math.random() * 0.03;
    }
    update() {
      this.y -= this.speed;
      this.wobble += this.wobbleSpeed;
      this.x += Math.sin(this.wobble) * 0.5 + this.drift;
      if (this.y < -40) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px serif`;
      ctx.fillText(this.symbol, this.x, this.y);
      ctx.restore();
    }
  }

  for (let i = 0; i < 60; i++) {
    const p = new Particle();
    p.y = Math.random() * H;
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ===== PARTICLES.JS =====
function initParticles() {
  if (typeof particlesJS === 'undefined') return;
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 1000 } },
      color: { value: ['#ff6b9d', '#c3b1e1', '#ffc0cb', '#ffffff'] },
      shape: { type: 'circle' },
      opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false } },
      size: { value: 2, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
      line_linked: { enable: false },
      move: { enable: true, speed: 0.8, direction: 'top', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } } },
    retina_detect: true
  });
}

// ===== FLOATING NOTES =====
function initFloatingNotes() {
  const container = document.getElementById('floating-notes-container');
  function spawnNote() {
    const note = document.createElement('div');
    note.className = 'floating-note';
    note.textContent = NOTES[Math.floor(Math.random() * NOTES.length)];
    note.style.left = Math.random() * 90 + '%';
    note.style.animationDuration = (10 + Math.random() * 8) + 's';
    note.style.animationDelay = '0s';
    container.appendChild(note);
    setTimeout(() => note.remove(), 18000);
  }
  for (let i = 0; i < 5; i++) setTimeout(spawnNote, i * 2000);
  setInterval(spawnNote, 3000);
}

// ===== LOVE TIMER =====
function initLoveTimer() {
  const els = {
    y: document.getElementById('t-years'),
    mo: document.getElementById('t-months'),
    d: document.getElementById('t-days'),
    h: document.getElementById('t-hours'),
    mi: document.getElementById('t-minutes'),
    s: document.getElementById('t-seconds')
  };

  function pad(n) { return String(Math.floor(n)).padStart(2, '0'); }

  function tick() {
    const now = new Date();
    const diff = now - CONFIG.loveStartDate;

    // Calculate
    const totalSeconds = Math.floor(diff / 1000);
    const years = Math.floor(totalSeconds / (365.25 * 24 * 3600));
    const months = Math.floor((totalSeconds % (365.25 * 24 * 3600)) / (30.44 * 24 * 3600));
    const days = Math.floor((totalSeconds % (30.44 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const update = (el, val) => {
      const s = pad(val);
      if (el.textContent !== s) {
        el.style.transform = 'translateY(-4px) scale(1.05)';
        el.textContent = s;
        setTimeout(() => el.style.transform = '', 200);
      }
    };

    update(els.y, years);
    update(els.mo, months);
    update(els.d, days);
    update(els.h, hours);
    update(els.mi, minutes);
    update(els.s, seconds);
  }

  tick();
  setInterval(tick, 1000);
}

// ===== GALLERY — FLOATING PETAL STYLE =====
function initGallery() {
  const scene = document.getElementById('petal-photos');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbTitle = document.getElementById('lb-title');
  const lbDesc = document.getElementById('lb-desc');
  let currentIndex = 0;

  // Drift animations pool
  const DRIFT_ANIMS = ['petalDrift1','petalDrift2','petalDrift3','petalDrift4','petalDrift5','petalDrift6'];

  // Pre-designed layout: each photo gets a hand-tuned position so they
  // feel scattered organically — like petals blown onto a surface.
  // Positions are in percent of scene width/height.
  // sizes in px (width), depths for visual layering.
  const LAYOUT = [
    // Row 1 — staggered top edge
    { left:  0, top:  20, w: 240, rot: -8,  z: 10, speed: 7  },
    { left: 22, top:   0, w: 200, rot:  4,  z: 20, speed: 9  },
    { left: 42, top:  18, w: 260, rot: -3,  z: 15, speed: 8  },
    { left: 64, top:   5, w: 220, rot:  7,  z: 8,  speed: 10 },
    { left: 83, top:  25, w: 190, rot:-11,  z: 18, speed: 7  },
    // Row 2 — overlapping with row 1 bottom & row 3 top
    { left:  5, top: 260, w: 215, rot:  9,  z: 25, speed: 11 },
    { left: 28, top: 240, w: 270, rot: -5,  z: 30, speed: 8  },
    { left: 55, top: 255, w: 230, rot:  3,  z: 22, speed: 9  },
    { left: 78, top: 245, w: 200, rot: -9,  z: 12, speed: 10 },
    // Row 3 — bottom row
    { left:  2, top: 510, w: 250, rot:  6,  z: 28, speed: 7  },
    { left: 24, top: 490, w: 215, rot: -4,  z: 20, speed: 9  },
    { left: 50, top: 505, w: 245, rot: 10,  z: 35, speed: 11 },
    { left: 74, top: 495, w: 200, rot: -7,  z: 18, speed: 8  },
  ];

  CONFIG.photos.forEach((photo, i) => {
    const layout = LAYOUT[i % LAYOUT.length];
    const driftAnim = DRIFT_ANIMS[i % DRIFT_ANIMS.length];
    const delay = (i * 0.4).toFixed(1);
    const w = layout.w;
    const h = Math.round(w * 1.35); // tall portrait — enough room to show faces

    const el = document.createElement('div');
    el.className = 'petal-photo';
    el.style.cssText = `
      left: ${layout.left}%;
      top: ${layout.top}px;
      width: ${w}px;
      z-index: ${layout.z};
      animation: ${driftAnim} ${layout.speed}s ease-in-out ${delay}s infinite;
    `;

    el.innerHTML = `
      <div class="petal-glow"></div>
      <div class="petal-frame" style="width:${w}px; height:${h}px;">
        <img
          src="${photo.src}"
          alt="${photo.title}"
          loading="lazy"
          style="width:${w}px; height:${h}px;"
          onerror="this.style.display='none'; this.parentElement.style.background='rgba(255,107,157,0.15)'; this.parentElement.innerHTML += '<div style=\\'display:flex;align-items:center;justify-content:center;height:${h}px;font-size:3rem;\\'>📸</div>'"
        />
        <div class="petal-caption">
          <div class="petal-caption-title">${photo.title}</div>
        </div>
        <div class="petal-hearts">💕✨</div>
      </div>
    `;

    el.addEventListener('click', () => openLightbox(i));
    el.addEventListener('mouseenter', (e) => createSparkle(e));
    scene.appendChild(el);
  });

  // Dynamically set scene height to contain all photos
  const sceneEl = document.getElementById('floating-scene');
  const petalEl = document.getElementById('petal-photos');
  setTimeout(() => {
    const items = petalEl.querySelectorAll('.petal-photo');
    let maxBottom = 900;
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const sceneRect = petalEl.getBoundingClientRect();
      const bottom = (item.offsetTop || 0) + (item.offsetHeight || 0) + 60;
      if (bottom > maxBottom) maxBottom = bottom;
    });
    sceneEl.style.minHeight = maxBottom + 'px';
    petalEl.style.minHeight = maxBottom + 'px';
  }, 500);

  // ── Lightbox ──
  function openLightbox(i) {
    currentIndex = i;
    const photo = CONFIG.photos[i];
    lbImg.src = photo.src;
    lbTitle.textContent = photo.title;
    lbDesc.textContent = photo.desc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-overlay').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
    openLightbox(currentIndex);
  });
  document.getElementById('lb-next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % CONFIG.photos.length;
    openLightbox(currentIndex);
  });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length; openLightbox(currentIndex); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % CONFIG.photos.length; openLightbox(currentIndex); }
  });
}


// ===== REASONS =====
function initReasons() {
  const grid = document.getElementById('reasons-grid');
  REASONS.forEach((reason, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (i % 5) * 50);
    card.innerHTML = `
      <div class="reason-inner">
        <div class="reason-front">
          <span class="reason-num">${i + 1}</span>
          ${reason}
        </div>
        <div class="reason-back">
          <span class="reason-num">#${i + 1}</span>
          ${reason}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ===== QUOTES =====
function initQuotes() {
  const textEl = document.getElementById('quote-text');
  const authorEl = document.getElementById('quote-author');
  const dotsEl = document.getElementById('quote-dots');
  let current = 0;
  let typeInterval = null;

  // Create dots
  QUOTES.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'q-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => showQuote(i));
    dotsEl.appendChild(dot);
  });

  function typeWriter(el, text, cb) {
    if (typeInterval) clearInterval(typeInterval);
    el.textContent = '';
    let idx = 0;
    typeInterval = setInterval(() => {
      el.textContent += text[idx];
      idx++;
      if (idx >= text.length) { clearInterval(typeInterval); if (cb) cb(); }
    }, 40);
  }

  function showQuote(i) {
    current = i;
    textEl.style.opacity = '0';
    authorEl.style.opacity = '0';
    document.querySelectorAll('.q-dot').forEach((d, di) => d.classList.toggle('active', di === i));
    setTimeout(() => {
      typeWriter(textEl, QUOTES[i].text, () => {
        textEl.style.opacity = '1';
        authorEl.textContent = QUOTES[i].author;
        authorEl.style.opacity = '1';
      });
      textEl.style.opacity = '1';
    }, 300);
  }

  showQuote(0);
  setInterval(() => showQuote((current + 1) % QUOTES.length), 5000);
}

// ===== HEART =====
function initHeart() {
  const heart = document.getElementById('giant-heart');
  const msg = document.getElementById('heart-message');
  let msgIdx = 0;

  heart.addEventListener('click', () => {
    // Confetti burst
    if (typeof confetti !== 'undefined') {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 }, colors: ['#ff6b9d', '#c3b1e1', '#ffc0cb', '#fff', '#b76e79'] });
    }

    // Show message
    msg.textContent = HEART_MESSAGES[msgIdx % HEART_MESSAGES.length];
    msg.classList.add('visible');
    msgIdx++;

    // Mini hearts burst
    for (let i = 0; i < 20; i++) {
      const rect = heart.getBoundingClientRect();
      createSparkleAt(rect.left + rect.width / 2 + (Math.random() - 0.5) * 100, rect.top + rect.height / 2 + (Math.random() - 0.5) * 100, '❤️');
    }

    setTimeout(() => msg.classList.remove('visible'), 3000);
  });
}

// ===== SURPRISE =====
function initSurprise() {
  const btn = document.getElementById('surprise-btn');
  const modal = document.getElementById('surprise-modal');
  const closeBtn = document.getElementById('sm-close');
  const overlay = document.getElementById('sm-overlay');

  btn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Fireworks
    if (typeof confetti !== 'undefined') {
      const duration = 4000;
      const end = Date.now() + duration;
      (function frame() {
        confetti({ particleCount: 8, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff6b9d', '#c3b1e1', '#ffc0cb'] });
        confetti({ particleCount: 8, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff6b9d', '#c3b1e1', '#ffc0cb'] });
        if (Date.now() < end) requestAnimationFrame(frame);
      })();
    }
  });

  function close() { modal.classList.remove('active'); document.body.style.overflow = ''; }
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
}

// ===== DREAMS =====
function initDreams() {
  const grid = document.getElementById('dreams-grid');
  DREAMS.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'dream-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (i % 3) * 100);
    card.innerHTML = `
      <div class="dream-emoji">${d.emoji}</div>
      <div class="dream-title">${d.title}</div>
      <div class="dream-desc">${d.desc}</div>
    `;
    grid.appendChild(card);
  });
}

// ===== STATS =====
function initStats() {
  const grid = document.getElementById('stats-grid');
  STATS.forEach(s => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.innerHTML = `
      <div class="stat-icon">${s.icon}</div>
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    `;
    grid.appendChild(card);
  });
}

// ===== FOOTER CANVAS (Night Sky) =====
function initFooterCanvas() {
  const canvas = document.getElementById('footer-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    const parent = canvas.parentElement;
    W = canvas.width = parent.offsetWidth;
    H = canvas.height = parent.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const stars = Array.from({ length: 150 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.7,
    speed: 0.5 + Math.random() * 2
  }));

  function drawStars() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.opacity += (Math.random() - 0.5) * 0.05;
      s.opacity = Math.max(0.1, Math.min(1, s.opacity));
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 240, 220, ${s.opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

// ===== FOOTER FIREFLIES =====
function initFooterFireflies() {
  const container = document.getElementById('footer-fireflies');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const ff = document.createElement('div');
    ff.className = 'firefly';
    ff.style.left = Math.random() * 100 + '%';
    ff.style.top = Math.random() * 100 + '%';
    ff.style.animationDelay = Math.random() * 4 + 's';
    ff.style.animationDuration = (3 + Math.random() * 4) + 's';
    container.appendChild(ff);
  }
}

// ===== MUSIC PLAYER =====
function initMusicPlayer() {
  const SONGS = [
    { title: 'Romantic Melody 1', url: 'https://www.bensound.com/bensound-music/bensound-romantic.mp3' },
    { title: 'Acoustic Love', url: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3' },
    { title: 'Tender Moments', url: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3' }
  ];

  const audio = document.getElementById('audio-player');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const volSlider = document.getElementById('volume-slider');
  const titleEl = document.getElementById('music-title');
  let current = 0;
  let playing = false;

  function loadSong(i) {
    current = i;
    audio.src = SONGS[i].url;
    titleEl.textContent = SONGS[i].title;
    audio.volume = parseFloat(volSlider.value);
    if (playing) audio.play().catch(() => {});
  }

  function togglePlay() {
    if (playing) {
      audio.pause();
      playing = false;
      playIcon.className = 'fas fa-play';
    } else {
      audio.play().catch(() => {});
      playing = true;
      playIcon.className = 'fas fa-pause';
    }
  }

  playBtn.addEventListener('click', togglePlay);
  prevBtn.addEventListener('click', () => { loadSong((current - 1 + SONGS.length) % SONGS.length); });
  nextBtn.addEventListener('click', () => { loadSong((current + 1) % SONGS.length); });
  volSlider.addEventListener('input', () => { audio.volume = parseFloat(volSlider.value); });
  audio.addEventListener('ended', () => { loadSong((current + 1) % SONGS.length); });

  loadSong(0);
}

// ===== SPARKLE EFFECTS =====
function initSparkles() {
  document.addEventListener('mousemove', throttle((e) => {
    if (Math.random() > 0.97) createSparkle(e);
  }, 50));
}

function createSparkle(e) {
  createSparkleAt(e.clientX, e.clientY, Math.random() > 0.5 ? '✨' : '💕');
}

function createSparkleAt(x, y, symbol) {
  const el = document.createElement('div');
  el.className = 'sparkle-particle';
  el.textContent = symbol;
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  el.style.setProperty('--dx', (Math.random() - 0.5) * 100 + 'px');
  el.style.setProperty('--dy', -(20 + Math.random() * 60) + 'px');
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

function throttle(fn, ms) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn.apply(this, args); }
  };
}

// ===== SMOOTH SCROLL =====
document.getElementById('begin-journey-btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('love-timer').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ===== GSAP SCROLL ANIMATIONS =====
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Petal photos — staggered entrance from different directions
  gsap.utils.toArray('.petal-photo').forEach((el, i) => {
    const fromX = (i % 2 === 0) ? -80 : 80;
    const fromY = 60 + (i % 3) * 20;
    gsap.fromTo(el,
      { opacity: 0, x: fromX, y: fromY, scale: 0.85 },
      { opacity: 1, x: 0, y: 0, scale: 1,
        duration: 1.2, ease: 'power3.out',
        delay: (i % 5) * 0.15,
        scrollTrigger: { trigger: '#gallery', start: 'top 80%', once: true }
      }
    );
  });

  gsap.fromTo('.letter-paper',
    { opacity: 0, scale: 0.95, y: 40 },
    { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: '.letter-paper', start: 'top 80%', once: true }
    }
  );
}

