/* ============================================================
   SCRIPT.JS - Complete JavaScript for Startup Portfolio
   ============================================================
   
   TABLE OF CONTENTS:
   1.  Project Data Array (EDIT THIS TO ADD PROJECTS)
   2.  Team Data Array
   3.  DOM Ready & Initialization
   4.  Loading Screen
   5.  Navigation & SPA Routing
   6.  Mobile Menu
   7.  Theme Toggle (Dark/Light)
   8.  Scroll Effects (Navbar, Reveal, Active Link)
   9.  Custom Cursor / Mouse Glow
   10. Portfolio: Render Projects
   11. Portfolio: Filter by Category
   12. Portfolio: Search Projects
   13. Project Modal (Popup Details)
   14. Contact Form Validation
   15. Back to Top Button
   16. Skill Bars Animation
   17. Stat Counter Animation
   18. Helper Functions
   
   ============================================================ */


/* ===========================================================
   1. PROJECT DATA ARRAY
   ===========================================================
   
   ╔══════════════════════════════════════════════════════════╗
   ║          HOW TO ADD A NEW PROJECT                       ║
   ╠══════════════════════════════════════════════════════════╣
   ║                                                         ║
   ║  1. Copy one of the objects below                       ║
   ║  2. Paste it at the end of the array (before the ];)    ║
   ║  3. Change the values to match your new project         ║
   ║  4. Save the file — the website updates automatically!  ║
   ║                                                         ║
   ║  FIELDS EXPLAINED:                                      ║
   ║  - title:        Your project's name                    ║
   ║  - image:        Path to project screenshot/image       ║
   ║                  (use "" for a gradient placeholder)     ║
   ║  - description:  What the project does (2-3 sentences)  ║
   ║  - technologies: Array of tech used ["HTML", "CSS"]     ║
   ║  - category:     Must match a category in the filter    ║
   ║                  buttons. Current categories:           ║
   ║                  "Web Development"                      ║
   ║                  "Mobile App"                           ║
   ║                  "UI/UX Design"                         ║
   ║                  "AI/ML"                                ║
   ║                  (Add new ones by editing filterBtns)    ║
   ║  - date:         When it was completed ("2026")         ║
   ║  - demo:         Link to live project ("#" if none)     ║
   ║  - github:       Link to GitHub repo ("#" if none)      ║
   ║  - emoji:        Emoji shown when no image is provided  ║
   ║                                                         ║
   ╚══════════════════════════════════════════════════════════╝
*/

const projects = [
  {
    // Project 1: Example SaaS Platform
    title: "NexusAI Platform",
    image: "",  // Leave empty for gradient placeholder
    description: "An AI-powered SaaS platform that automates workflow management for startups. Features real-time collaboration, smart task assignment using machine learning, and comprehensive analytics dashboards built with modern web technologies.",
    technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS"],
    category: "AI/ML",
    date: "2026",
    demo: "#",
    github: "#",
    emoji: "🤖"  // Emoji icon for the placeholder
  },
  {
    // Project 2: E-commerce Platform
    title: "ShopFlow Commerce",
    image: "",
    description: "A modern e-commerce platform with lightning-fast performance, real-time inventory management, AI-powered product recommendations, and a seamless checkout experience designed for Gen Z shoppers.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Tailwind"],
    category: "Web Development",
    date: "2026",
    demo: "#",
    github: "#",
    emoji: "🛒"
  },
  {
    // Project 3: Mobile Fitness App
    title: "FitPulse App",
    image: "",
    description: "A cross-platform mobile fitness app with AI personal training, workout tracking, nutrition planning, social challenges, and integration with wearable devices. Built for the next generation of fitness enthusiasts.",
    technologies: ["React Native", "Firebase", "TensorFlow Lite", "Node.js"],
    category: "Mobile App",
    date: "2025",
    demo: "#",
    github: "#",
    emoji: "💪"
  },
  {
    // Project 4: Dashboard Design
    title: "CloudDash Analytics",
    image: "",
    description: "A comprehensive analytics dashboard UI/UX design for a cloud infrastructure company. Features dark mode, real-time data visualization, customizable widgets, and an intuitive user experience.",
    technologies: ["Figma", "Prototyping", "Design System", "User Research"],
    category: "UI/UX Design",
    date: "2025",
    demo: "#",
    github: "#",
    emoji: "📊"
  },
  {
    // Project 5: Social Platform
    title: "ConnectHub Social",
    image: "",
    description: "A next-generation social media platform focused on authentic connections. Features AI-curated content feeds, video stories, community spaces, encrypted messaging, and creator monetization tools.",
    technologies: ["Vue.js", "GraphQL", "MongoDB", "Socket.io", "Docker"],
    category: "Web Development",
    date: "2025",
    demo: "#",
    github: "#",
    emoji: "🌐"
  },
  {
    // Project 6: AI Image Generator
    title: "PixelForge AI",
    image: "",
    description: "An AI-powered image generation and editing tool that creates stunning visuals from text prompts. Features style transfer, image upscaling, background removal, and batch processing capabilities.",
    technologies: ["Python", "PyTorch", "FastAPI", "React", "AWS Lambda"],
    category: "AI/ML",
    date: "2026",
    demo: "#",
    github: "#",
    emoji: "🎨"
  },
  {
    // Project 7: Banking App
    title: "FinFlow Banking",
    image: "",
    description: "A modern mobile banking application with biometric authentication, real-time transaction tracking, smart budgeting, investment portfolio management, and peer-to-peer payment features.",
    technologies: ["Flutter", "Dart", "Firebase", "Plaid API", "Kotlin"],
    category: "Mobile App",
    date: "2025",
    demo: "#",
    github: "#",
    emoji: "💳"
  },
  {
    // Project 8: Design System
    title: "Prism Design System",
    image: "",
    description: "A comprehensive design system and component library for modern web applications. Includes 200+ components, accessibility-first approach, dark/light themes, and detailed documentation with Storybook integration.",
    technologies: ["Figma", "Storybook", "CSS", "Design Tokens", "A11y"],
    category: "UI/UX Design",
    date: "2026",
    demo: "#",
    github: "#",
    emoji: "✨"
  },

  /* ==========================
     HOW TO ADD A NEW PROJECT
     ==========================
     
     Simply copy the template below, fill in your values,
     and paste it right here (before the closing ];)
     
     {
       title: "Your Project Title",
       image: "",  // Path to image or leave "" for placeholder
       description: "Describe your project in 2-3 sentences.",
       technologies: ["Tech1", "Tech2", "Tech3"],
       category: "Web Development",  // Must match a filter category
       date: "2026",
       demo: "https://your-live-demo.com",
       github: "https://github.com/your-repo",
       emoji: "🚀"
     },
     
     AVAILABLE CATEGORIES:
     - "Web Development"
     - "Mobile App"
     - "UI/UX Design"
     - "AI/ML"
     
     To add a NEW category:
     1. Add the category name to your project object above
     2. The filter buttons are auto-generated from the project
        data, so your new category will appear automatically!
  */
];


/* ===========================================================
   2. TEAM DATA ARRAY
   ===========================================================
   Edit this array to add/remove/update team members.
   Each member object contains their info and social links.
*/
const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Full-Stack Developer",
    bio: "17-year-old visionary leading the team. Passionate about AI, startups, and building products that matter.",
    initials: "AC",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Maya Patel",
    role: "CTO & Backend Engineer",
    bio: "16-year-old coding prodigy. Expert in system architecture, databases, and cloud infrastructure.",
    initials: "MP",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Jordan Rivera",
    role: "Lead Designer & UI/UX",
    bio: "18-year-old creative genius. Crafts pixel-perfect designs and unforgettable user experiences.",
    initials: "JR",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Sam Okafor",
    role: "AI/ML Engineer",
    bio: "17-year-old ML enthusiast. Building intelligent systems and pushing the boundaries of what's possible.",
    initials: "SO",
    socials: {
      twitter: "#",
      github: "#",
      linkedin: "#"
    }
  }
];


/* ===========================================================
   3. DOM READY & INITIALIZATION
   ===========================================================
   This function runs when the page fully loads.
   It calls all the setup functions.
*/
document.addEventListener('DOMContentLoaded', function() {
  
  // ---- Initialize all features ----
  initLoadingScreen();    // Show & hide loading animation
  initNavigation();       // Setup nav links & SPA routing
  initMobileMenu();       // Setup hamburger menu
  initThemeToggle();      // Setup dark/light mode
  initScrollEffects();    // Scroll-based animations
  initCursorGlow();       // Mouse-follow glow effect
  renderProjects();       // Build project cards from data
  initFilterButtons();    // Setup category filter buttons
  initSearchProjects();   // Setup search functionality
  initContactForm();      // Setup form validation
  initBackToTop();        // Back to top button
  renderTeamMembers();    // Build team member cards
  initStatCounters();     // Animated stat counters
  
  // Show home page by default
  showPage('home');
  
  console.log('🚀 Portfolio website initialized successfully!');
});


/* ===========================================================
   4. LOADING SCREEN
   ===========================================================
   Shows a loading animation for 1.5 seconds, then fades out.
   This gives the page time to fully render.
*/
function initLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  
  if (loadingScreen) {
    // Wait 1.5 seconds, then hide the loading screen
    setTimeout(function() {
      loadingScreen.classList.add('hidden');
      // After fade animation completes, allow page scrolling
      document.body.style.overflow = 'auto';
    }, 1500);
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
  }
}


/* ===========================================================
   5. NAVIGATION & SPA ROUTING
   ===========================================================
   This website works as a Single Page Application (SPA).
   Instead of loading new HTML files, we show/hide page sections.
   
   Each "page" is a <div> with class "page" and a data-page attribute.
   Clicking a nav link shows the matching page and hides all others.
*/
function showPage(pageName) {
  // Get all page sections
  const pages = document.querySelectorAll('.page');
  
  // Hide all pages
  pages.forEach(function(page) {
    page.classList.remove('active');
  });
  
  // Show the target page
  const targetPage = document.querySelector('[data-page="' + pageName + '"]');
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Update active nav link styling
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('data-target') === pageName) {
      link.classList.add('active');
    }
  });
  
  // Scroll to top of the page when switching
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  if (mobileMenu) mobileMenu.classList.remove('active');
  if (hamburger) hamburger.classList.remove('active');
  
  // Re-trigger scroll reveal animations for the new page
  setTimeout(function() {
    triggerRevealAnimations();
    // Animate skill bars if on about page
    if (pageName === 'about') {
      animateSkillBars();
    }
  }, 100);
}

/* Setup navigation click handlers */
function initNavigation() {
  // Handle all nav link clicks (both desktop and mobile)
  document.addEventListener('click', function(e) {
    const navLink = e.target.closest('.nav-link');
    if (navLink) {
      e.preventDefault();
      const target = navLink.getAttribute('data-target');
      if (target) {
        showPage(target);
      }
    }
  });
}


/* ===========================================================
   6. MOBILE MENU
   ===========================================================
   The hamburger icon toggles a full-screen mobile menu.
   Three lines animate into an X shape when opened.
*/
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      // Toggle active class on both hamburger and menu
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }
}


/* ===========================================================
   7. THEME TOGGLE (Dark/Light Mode)
   ===========================================================
   Toggles between dark and light themes.
   Saves the preference to localStorage so it persists.
   
   HOW IT WORKS:
   - We add/remove data-theme="light" on the <body> element
   - CSS variables change based on this attribute (see style.css)
   - All colors update automatically because they use CSS variables
*/
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check if user previously selected a theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.textContent = '☀️';
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Check current theme
      const isLight = document.body.getAttribute('data-theme') === 'light';
      
      if (isLight) {
        // Switch to dark mode
        document.body.removeAttribute('data-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
      } else {
        // Switch to light mode
        document.body.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
      }
    });
  }
}


/* ===========================================================
   8. SCROLL EFFECTS
   ===========================================================
   Three scroll-based features:
   1. Navbar appearance change on scroll
   2. Reveal animations as elements scroll into view
   3. Active nav link based on scroll position
*/
function initScrollEffects() {
  const nav = document.querySelector('.nav');
  
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // ---- 1. Navbar scroll effect ----
    // Add "scrolled" class when scrolled more than 50px
    if (nav) {
      if (scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    
    // ---- 2. Trigger reveal animations ----
    triggerRevealAnimations();
  });
  
  // Run once on load to reveal visible elements
  triggerRevealAnimations();
}

/* 
  Reveal Animation Logic:
  Elements with class "reveal" will fade in when they
  enter the viewport (when scrolled into view).
*/
function triggerRevealAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  
  revealElements.forEach(function(el) {
    // Get element's position relative to viewport
    const elementTop = el.getBoundingClientRect().top;
    // Trigger when element is 85% visible from the top
    const triggerPoint = windowHeight * 0.85;
    
    if (elementTop < triggerPoint) {
      el.classList.add('revealed');
    }
  });
}


/* ===========================================================
   9. CUSTOM CURSOR / MOUSE GLOW
   ===========================================================
   A soft purple glow follows the mouse cursor.
   Creates a futuristic, interactive feel.
   Only active on desktop (no touch devices).
*/
function initCursorGlow() {
  const glow = document.getElementById('cursor-glow');
  
  if (glow && window.innerWidth > 768) {
    // Show the glow
    glow.style.opacity = '1';
    
    // Update glow position on mouse move
    document.addEventListener('mousemove', function(e) {
      // Use requestAnimationFrame for smooth performance
      requestAnimationFrame(function() {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      });
    });
    
    // Hide glow when mouse leaves the window
    document.addEventListener('mouseleave', function() {
      glow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
      glow.style.opacity = '1';
    });
  }
}


/* ===========================================================
   10. PORTFOLIO: RENDER PROJECTS
   ===========================================================
   This function reads the projects array (defined above)
   and generates HTML cards for each project.
   
   It is called once on page load and again when
   filters or search terms change.
*/
function renderProjects(filteredProjects) {
  // Use filtered projects if provided, otherwise show all
  const projectsToRender = filteredProjects || projects;
  
  // Get the container where cards will be placed
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  // Clear existing cards
  grid.innerHTML = '';
  
  // If no projects match the filter/search, show a message
  if (projectsToRender.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No projects found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    `;
    return;
  }
  
  // Loop through each project and create a card
  projectsToRender.forEach(function(project, index) {
    // Create the card element
    const card = document.createElement('div');
    card.className = 'project-card';
    // Set animation delay based on card index
    card.style.animationDelay = (index * 0.05) + 's';
    
    // Build the image section (real image or placeholder)
    let imageHTML;
    if (project.image && project.image !== '') {
      imageHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="project-category-badge">${project.category}</div>
          <div class="project-image-overlay">
            <span class="project-overlay-text">Click to view details →</span>
          </div>
        </div>
      `;
    } else {
      imageHTML = `
        <div class="project-image">
          <div class="project-image-placeholder">${project.emoji || '🚀'}</div>
          <div class="project-category-badge">${project.category}</div>
          <div class="project-image-overlay">
            <span class="project-overlay-text">Click to view details →</span>
          </div>
        </div>
      `;
    }
    
    // Build technology tags
    const techsHTML = project.technologies.map(function(tech) {
      return '<span class="tech-tag">' + tech + '</span>';
    }).join('');
    
    // Assemble the full card HTML
    card.innerHTML = `
      ${imageHTML}
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-techs">${techsHTML}</div>
        <div class="project-links">
          <a href="${project.demo}" class="project-link" target="_blank" onclick="event.stopPropagation()">
            🔗 Live Demo
          </a>
          <a href="${project.github}" class="project-link" target="_blank" onclick="event.stopPropagation()">
            💻 GitHub
          </a>
          <span class="project-date">📅 ${project.date}</span>
        </div>
      </div>
    `;
    
    // Add click handler to open the modal with project details
    card.addEventListener('click', function() {
      openProjectModal(project);
    });
    
    // Add the card to the grid
    grid.appendChild(card);
  });
}


/* ===========================================================
   11. PORTFOLIO: FILTER BY CATEGORY
   ===========================================================
   Filter buttons let users show only projects
   from a specific category (e.g., "Web Development").
   
   The buttons are auto-generated from the project data,
   so adding a new category to a project automatically
   creates a new filter button!
*/
function initFilterButtons() {
  const filterContainer = document.getElementById('filter-buttons');
  if (!filterContainer) return;

  // Extract unique categories from the projects array
  const categories = [...new Set(projects.map(p => p.category))];

  // Build buttons HTML: "All" button + one for each category
  let buttonsHTML = '<button class="filter-btn active" data-category="all">All Projects</button>';
  categories.forEach(function(cat) {
    buttonsHTML += `<button class="filter-btn" data-category="${cat}">${cat}</button>`;
  });
  filterContainer.innerHTML = buttonsHTML;

  // Add click handlers to all filter buttons
  const buttons = filterContainer.querySelectorAll('.filter-btn');
  
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Update active button styling
      buttons.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      
      // Get the selected category
      const category = btn.getAttribute('data-category');
      
      // Filter projects
      if (category === 'all') {
        renderProjects(projects);
      } else {
        const filtered = projects.filter(function(project) {
          return project.category === category;
        });
        renderProjects(filtered);
      }
      
      // Also apply any active search filter
      applySearchFilter();
    });
  });
}


/* ===========================================================
   12. PORTFOLIO: SEARCH PROJECTS
   ===========================================================
   Real-time search that filters projects as the user types.
   Searches through title, description, and technologies.
*/
function initSearchProjects() {
  const searchInput = document.getElementById('project-search');
  
  if (searchInput) {
    // Listen for every keystroke
    searchInput.addEventListener('input', function() {
      applySearchFilter();
    });
  }
}

/* Apply search + category filter together */
function applySearchFilter() {
  const searchInput = document.getElementById('project-search');
  const activeFilter = document.querySelector('.filter-btn.active');
  
  if (!searchInput) return;
  
  const searchTerm = searchInput.value.toLowerCase().trim();
  const category = activeFilter ? activeFilter.getAttribute('data-category') : 'all';
  
  // Start with all projects or filtered by category
  let filtered = projects;
  
  if (category !== 'all') {
    filtered = filtered.filter(function(p) {
      return p.category === category;
    });
  }
  
  // Then filter by search term
  if (searchTerm !== '') {
    filtered = filtered.filter(function(project) {
      // Search in title
      const titleMatch = project.title.toLowerCase().includes(searchTerm);
      // Search in description
      const descMatch = project.description.toLowerCase().includes(searchTerm);
      // Search in technologies
      const techMatch = project.technologies.some(function(tech) {
        return tech.toLowerCase().includes(searchTerm);
      });
      // Return true if any field matches
      return titleMatch || descMatch || techMatch;
    });
  }
  
  renderProjects(filtered);
}


/* ===========================================================
   13. PROJECT MODAL (Popup Details)
   ===========================================================
   When a project card is clicked, a modal overlay appears
   showing the full project details.
   
   The modal can be closed by:
   - Clicking the X button
   - Clicking outside the modal
   - Pressing the Escape key
*/
function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  
  // Build the modal image
  let imageHTML;
  if (project.image && project.image !== '') {
    imageHTML = `<img src="${project.image}" alt="${project.title}">`;
  } else {
    imageHTML = `<div class="modal-image-placeholder">${project.emoji || '🚀'}</div>`;
  }
  
  // Build technology tags for the modal
  const techsHTML = project.technologies.map(function(tech) {
    return '<span class="modal-tech-tag">' + tech + '</span>';
  }).join('');
  
  // Fill the modal with project data
  modal.querySelector('.modal-image').innerHTML = imageHTML;
  modal.querySelector('.modal-category').textContent = project.category;
  modal.querySelector('.modal-title').textContent = project.title;
  modal.querySelector('.modal-date').textContent = '📅 Completed: ' + project.date;
  modal.querySelector('.modal-description').textContent = project.description;
  modal.querySelector('.modal-techs').innerHTML = techsHTML;
  
  // Set the action button links
  const demoBtn = modal.querySelector('.modal-demo-btn');
  const githubBtn = modal.querySelector('.modal-github-btn');
  if (demoBtn) demoBtn.setAttribute('href', project.demo);
  if (githubBtn) githubBtn.setAttribute('href', project.github);
  
  // Show the modal with animation
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

/* Close the project modal */
function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }
}

// ---- Modal Close Handlers ----
// These are set up in the HTML (onclick) and also via event delegation

document.addEventListener('click', function(e) {
  // Close when clicking the overlay (outside the card)
  if (e.target.classList.contains('modal-overlay')) {
    closeProjectModal();
  }
  // Close when clicking the X button
  if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
    closeProjectModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});


/* ===========================================================
   14. CONTACT FORM VALIDATION
   ===========================================================
   Validates form inputs before submission.
   Shows error messages for invalid fields.
   Shows a success message when the form is valid.
   
   VALIDATION RULES:
   - Name: Required, at least 2 characters
   - Email: Required, must be valid email format
   - Subject: Required, at least 3 characters
   - Message: Required, at least 10 characters
*/
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission
      
      // Get form field values
      const name = document.getElementById('contact-name');
      const email = document.getElementById('contact-email');
      const subject = document.getElementById('contact-subject');
      const message = document.getElementById('contact-message');
      
      let isValid = true; // Track if all fields are valid
      
      // ---- Validate Name ----
      if (!name.value.trim() || name.value.trim().length < 2) {
        showFieldError(name, 'Please enter your name (at least 2 characters)');
        isValid = false;
      } else {
        clearFieldError(name);
      }
      
      // ---- Validate Email ----
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearFieldError(email);
      }
      
      // ---- Validate Subject ----
      if (!subject.value.trim() || subject.value.trim().length < 3) {
        showFieldError(subject, 'Please enter a subject (at least 3 characters)');
        isValid = false;
      } else {
        clearFieldError(subject);
      }
      
      // ---- Validate Message ----
      if (!message.value.trim() || message.value.trim().length < 10) {
        showFieldError(message, 'Please enter a message (at least 10 characters)');
        isValid = false;
      } else {
        clearFieldError(message);
      }
      
      // ---- If valid, show success ----
      if (isValid) {
        const successMsg = document.getElementById('form-success');
        if (successMsg) {
          successMsg.classList.add('show');
          // Hide success message after 5 seconds
          setTimeout(function() {
            successMsg.classList.remove('show');
          }, 5000);
        }
        // Reset the form
        form.reset();
      }
    });
  }
}

/* Show error state on a form field */
function showFieldError(input, message) {
  const formGroup = input.closest('.form-group');
  if (formGroup) {
    formGroup.classList.add('error');
    const errorEl = formGroup.querySelector('.form-error');
    if (errorEl) errorEl.textContent = message;
  }
}

/* Clear error state from a form field */
function clearFieldError(input) {
  const formGroup = input.closest('.form-group');
  if (formGroup) {
    formGroup.classList.remove('error');
  }
}


/* ===========================================================
   15. BACK TO TOP BUTTON
   ===========================================================
   A floating button that appears when the user scrolls down.
   Clicking it smoothly scrolls back to the top.
*/
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  if (backToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}


/* ===========================================================
   16. SKILL BARS ANIMATION
   ===========================================================
   Animates skill progress bars when the About page is shown.
   Each bar has a data-width attribute that defines the fill %.
*/
function animateSkillBars() {
  const skillFills = document.querySelectorAll('.skill-fill');
  
  skillFills.forEach(function(fill) {
    const targetWidth = fill.getAttribute('data-width');
    // Small delay for a staggered animation effect
    setTimeout(function() {
      fill.style.width = targetWidth + '%';
    }, 300);
  });
}


/* ===========================================================
   17. STAT COUNTER ANIMATION
   ===========================================================
   Animates numbers counting up from 0 to their target value.
   Creates an impressive "counting up" effect for statistics.
*/
function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false; // Only animate once
  
  // Use Intersection Observer to detect when stats are visible
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });
  
  // Observe the stats section
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/* Animate all stat counters */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(function(counter) {
    const target = parseInt(counter.getAttribute('data-count'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    
    function updateCounter() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);
      
      counter.textContent = prefix + current.toLocaleString() + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = prefix + target.toLocaleString() + suffix;
      }
    }
    
    updateCounter();
  });
}


/* ===========================================================
   18. RENDER TEAM MEMBERS
   ===========================================================
   Generates team member cards from the teamMembers array.
*/
function renderTeamMembers() {
  const teamGrid = document.getElementById('team-grid');
  if (!teamGrid) return;
  
  teamGrid.innerHTML = '';
  
  teamMembers.forEach(function(member) {
    const card = document.createElement('div');
    card.className = 'team-card reveal';
    
    card.innerHTML = `
      <div class="team-avatar">${member.initials}</div>
      <h3 class="team-name">${member.name}</h3>
      <p class="team-role">${member.role}</p>
      <p class="team-bio">${member.bio}</p>
      <div class="team-socials">
        <a href="${member.socials.twitter}" class="team-social-link" target="_blank" title="Twitter">𝕏</a>
        <a href="${member.socials.github}" class="team-social-link" target="_blank" title="GitHub">⌨</a>
        <a href="${member.socials.linkedin}" class="team-social-link" target="_blank" title="LinkedIn">in</a>
      </div>
    `;
    
    teamGrid.appendChild(card);
  });
}


/* ===========================================================
   END OF SCRIPT.JS
   ===========================================================
   
   SUMMARY OF FEATURES:
   ✅ Project management system (easy to edit array)
   ✅ Dynamic project card generation
   ✅ Category filtering
   ✅ Real-time search
   ✅ Project detail modal
   ✅ Dark/Light mode with localStorage
   ✅ Mobile responsive menu
   ✅ Scroll reveal animations
   ✅ Animated stat counters
   ✅ Animated skill progress bars
   ✅ Contact form validation
   ✅ Back to top button
   ✅ Mouse glow cursor effect
   ✅ Loading screen animation
   ✅ SPA routing (no page reloads)
   
   TO CUSTOMIZE:
   1. Edit the 'projects' array to add/remove projects
   2. Edit the 'teamMembers' array for team info
   3. Edit CSS variables in style.css for colors
   4. Modify animations by adjusting CSS keyframes
   =========================================================== */
