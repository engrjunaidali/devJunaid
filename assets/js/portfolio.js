'use strict';

const PROJECTS = {
  regal: {
    title: 'Regal Media Press',
    industry: 'Publishing & media',
    category: 'websites',
    image: './assets/images/portfolio/work1- regal.webp',
    url: 'https://www.regalmediapress.com/',
    role: 'Solo developer',
    stack: 'WordPress, PHP, SEO',
    teaser: 'Professional media site — live & mobile-ready',
    problem: 'The client needed a credible online presence to showcase their publishing and media services to a wider audience.',
    result: 'Delivered a clean, mobile-friendly website that represents the brand professionally and is easy for the team to update.'
  },
  villagedukaan: {
    title: 'Village Dukaan',
    industry: 'Community marketplace',
    category: 'websites',
    image: './assets/images/portfolio/work2 - VillageDukaan.webp',
    url: 'https://villagedukaan.com/',
    role: 'Solo developer',
    stack: 'WordPress, WooCommerce, PHP',
    teaser: 'Community marketplace — live',
    problem: 'A local community needed a digital marketplace to connect buyers and sellers in one place.',
    result: 'Launched a functional marketplace website that lets the community browse and engage online.'
  },
  kenduit: {
    title: 'Kenduit Company Website',
    industry: 'Corporate / business services',
    category: 'websites',
    image: './assets/images/portfolio/kenduit.com.png',
    url: 'https://www.kenduit.com/',
    role: 'Solo developer',
    stack: 'WordPress, custom theme, responsive design',
    teaser: 'Corporate site — live at kenduit.com',
    problem: 'The company lacked a modern website to present their services and build trust with potential clients.',
    result: 'Built a professional corporate website that clearly communicates services and works across all devices.'
  },
  gfs: {
    title: 'Global Fire Services',
    industry: 'Fire safety services — Maldives',
    category: 'web apps',
    image: './assets/images/portfolio/web_applications/work1 - gfs.webp',
    url: 'https://gfsmaldives.com/',
    role: 'Lead developer',
    stack: 'Laravel, PHP, MySQL',
    teaser: 'Live platform for Maldives\' largest fire safety provider',
    problem: 'Maldives\' leading fire safety provider needed a professional web platform to showcase services, build trust with resorts and institutions, and generate inbound leads.',
    result: 'Delivered a live site at gfsmaldives.com with service pages, company information, and contact flows aligned with an international safety brand.'
  },
  aisp: {
    title: 'American Institute of Safety Professionals',
    industry: 'Professional training & certifications — USA',
    category: 'web apps',
    image: './assets/images/portfolio/web_applications/work2 - aisp.webp',
    url: 'https://amiosp.com/',
    role: 'Developer (NCCS NED)',
    stack: 'Laravel, PHP, MySQL, online enrollment',
    teaser: 'Safety training platform — live at amiosp.com',
    problem: 'The institute needed a web platform to present courses, handle online registrations, and support certification programs for safety professionals.',
    result: 'Built a live training platform supporting online course discovery and enrollment for a US-based safety education provider.'
  },
  sindhhec: {
    title: 'Sindh HEC Job Portal',
    industry: 'Government / higher education — Pakistan',
    category: 'web apps',
    image: './assets/images/portfolio/web_applications/work3 - sindhhec.webp',
    url: 'https://sindhhec.gov.pk/job-openings/',
    role: 'Lead developer (NCCS NED internship)',
    stack: 'Laravel, Voyager, MySQL',
    teaser: 'Government job portal — live',
    problem: 'Sindh Higher Education Commission needed a digital system to publish job openings, share application forms, and streamline recruitment communication.',
    result: 'Delivered a government job portal that simplified how vacancies are published and accessed by candidates across Sindh.'
  },
  punjabimasala: {
    title: 'Punjabi Masala',
    industry: 'Swedish food ecommerce',
    category: 'web apps',
    image: './assets/images/portfolio/punjabimasala.se.png',
    url: 'https://punjabimasala.se/home',
    role: 'Solo freelance developer',
    stack: 'Ecommerce, product catalog, Stripe-ready checkout',
    teaser: 'Swedish food store — live ecommerce',
    problem: 'A food brand entering the Swedish market needed an online store to sell products with a smooth browsing and ordering experience.',
    result: 'Launched a live ecommerce store with product catalog and ordering flow tailored for the Swedish market.'
  },
  helpwithmyonlineclass: {
    title: 'Help With My Online Class',
    industry: 'Education & academic services',
    category: 'websites',
    image: './assets/images/portfolio/work4 - helpwithmyonlineclass.webp',
    url: 'https://helpwithmyonlineclass.com/',
    role: 'Solo developer',
    stack: 'WordPress, lead capture forms, responsive design',
    teaser: 'Lead-generation site — live',
    problem: 'The business needed a website to explain services, capture inquiries, and convert visitors into enrolled students.',
    result: 'Built a conversion-focused site with service pages, testimonials, and inquiry forms that drive student sign-ups.'
  },
  socialendpoint: {
    title: 'Social Endpoint',
    industry: 'Digital marketing & lead generation',
    category: 'websites',
    image: './assets/images/portfolio/work5 - socialendpoint.webp',
    url: 'https://socialendpoint.com/',
    role: 'Solo developer',
    stack: 'WordPress, landing pages, contact funnels',
    teaser: 'Marketing site — live',
    problem: 'The agency needed a fast, professional web presence to explain services and capture leads from inbound traffic.',
    result: 'Delivered a clean marketing website with clear service messaging and contact flows for lead capture.'
  },
  granuleservices: {
    title: 'Granule Services',
    industry: 'Digital marketing agency — Karachi',
    category: 'websites',
    image: './assets/images/portfolio/work6 - granuleservices.webp',
    url: 'https://granuleservices.com/',
    role: 'Solo developer',
    stack: 'WordPress, PHP, SEO, responsive design',
    teaser: 'Agency website — live',
    problem: 'A Karachi-based digital agency needed a website that showcases web design, hosting, and marketing services to attract local businesses.',
    result: 'Launched a professional agency site that presents services clearly and supports inbound client inquiries.'
  },
  onlinecourseexperts: {
    title: 'Online Course Experts',
    industry: 'Online tutoring & academic support',
    category: 'websites',
    image: './assets/images/portfolio/work3 - onlinecourseexperts.webp',
    url: 'https://onlinecourseexperts.com/',
    role: 'Solo developer',
    stack: 'WordPress, booking flows, responsive UI',
    teaser: 'Tutoring platform — live',
    problem: 'The client needed a website to present tutoring services, build trust, and let students request help online.',
    result: 'Built a live platform highlighting subject-matter tutoring, course support, and easy contact for new students.'
  },
  gamingchair: {
    title: 'Gaming Chair Ecommerce',
    industry: 'Furniture & gaming retail',
    category: 'web apps',
    image: './assets/images/portfolio/work7 - gamingchair.webp',
    url: null,
    role: 'Solo developer',
    stack: 'Shopify, product catalog, checkout optimization',
    teaser: 'Ecommerce storefront — product-focused UX',
    problem: 'The client needed an online store to showcase gaming chairs with clear product pages and a smooth purchase path.',
    result: 'Designed and built a product-focused ecommerce experience optimized for browsing, comparison, and conversion.'
  }
};

function openProjectModal(projectId) {
  const project = PROJECTS[projectId];
  if (!project) return;

  const container = document.querySelector('[data-project-modal-container]');
  const overlay = document.querySelector('[data-project-overlay]');
  if (!container || !overlay) return;

  const img = document.querySelector('[data-project-modal-img]');
  const industry = document.querySelector('[data-project-modal-industry]');
  const title = document.querySelector('[data-project-modal-title]');
  const role = document.querySelector('[data-project-modal-role]');
  const stack = document.querySelector('[data-project-modal-stack]');
  const problem = document.querySelector('[data-project-modal-problem]');
  const result = document.querySelector('[data-project-modal-result]');
  const link = document.querySelector('[data-project-modal-link]');

  if (img) {
    img.src = project.image;
    img.alt = project.title;
  }
  if (industry) industry.textContent = project.industry;
  if (title) title.textContent = project.title;
  if (role) role.textContent = project.role;
  if (stack) stack.textContent = project.stack;
  if (problem) problem.textContent = project.problem;
  if (result) result.textContent = project.result;

  if (link) {
    if (project.url) {
      link.href = project.url;
      link.style.display = '';
    } else {
      link.style.display = 'none';
    }
  }

  container.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const container = document.querySelector('[data-project-modal-container]');
  const overlay = document.querySelector('[data-project-overlay]');
  if (container) container.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderProjectList() {
  const list = document.querySelector('[data-project-list]');
  if (!list) return;

  list.innerHTML = Object.entries(PROJECTS).map(([id, project]) => `
    <li class="project-item active" data-filter-item data-category="${project.category}" data-project-id="${id}">
      <a href="#" data-project-trigger>
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="document-text-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.industry}</p>
        <p class="project-result">${project.teaser}</p>
      </a>
    </li>
  `).join('');
}

function initPortfolio() {
  renderProjectList();

  const list = document.querySelector('[data-project-list]');
  if (list) {
    list.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-project-trigger]');
      if (!trigger) return;
      event.preventDefault();

      const item = trigger.closest('[data-project-id]');
      if (item) openProjectModal(item.dataset.projectId);
    });
  }

  const closeBtn = document.querySelector('[data-project-modal-close]');
  const overlay = document.querySelector('[data-project-overlay]');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (overlay) overlay.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProjectModal();
  });
}

document.addEventListener('DOMContentLoaded', initPortfolio);
