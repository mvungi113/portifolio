import React from 'react';

export default function Home() {
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">

        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
          </ul>
        </nav>

      </header>

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="hero-greeting">Hello, I'm</p>
              <h1>Rogasian Mvungi</h1>
              <p className="hero-subtitle">A <span className="typed" data-typed-items="Designer, Developer, Freelancer"></span></p>
              <p className="hero-desc">I build modern web and mobile applications with clean code and great user experiences.</p>
              <div className="hero-cta">
                <a href="#portfolio" className="btn btn-primary hero-btn">View My Work</a>
                <a href="#footer" className="btn btn-outline-primary hero-btn">Get In Touch</a>
              </div>
              <div className="social-links hero-socials">
                <a href="https://github.com/mvungi113" target="_blank" rel="noopener"><i className="bx bxl-github"></i></a>
                <a href="https://x.com/rogasiani_" target="_blank" rel="noopener"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.linkedin.com/in/rogasian-haji-2049431b2/" target="_blank" rel="noopener"><i className="bx bxl-linkedin"></i></a>
                <a href="https://wa.me/255697624409" target="_blank" rel="noopener"><i className="bx bxl-whatsapp"></i></a>
                <a href="https://www.instagram.com/rogasiangelasi" target="_blank" rel="noopener"><i className="bx bxl-instagram"></i></a>
                <a href="https://www.facebook.com/rogasian.gelas" target="_blank" rel="noopener"><i className="bx bxl-facebook"></i></a>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="hero-code-animation">
                <div className="code-window">
                  <div className="code-header">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className="code-filename">developer.js</span>
                  </div>
                  <div className="code-body">
                    <div className="code-line"><span className="kw">const</span> <span className="var">developer</span> = {`{`}</div>
                    <div className="code-line indent"><span className="prop">name</span>: <span className="str">"Rogasian"</span>,</div>
                    <div className="code-line indent"><span className="prop">role</span>: <span className="str">"Full Stack Dev"</span>,</div>
                    <div className="code-line indent"><span className="prop">skills</span>: [</div>
                    <div className="code-line indent-2"><span className="str">"React"</span>, <span className="str">"Next.js"</span>,</div>
                    <div className="code-line indent-2"><span className="str">"Laravel"</span>, <span className="str">"Flutter"</span></div>
                    <div className="code-line indent">],</div>
                    <div className="code-line indent"><span className="prop">passion</span>: <span className="str">"Building products"</span></div>
                    <div className="code-line">{`}`};</div>
                    <div className="code-line">&nbsp;</div>
                    <div className="code-line"><span className="kw">return</span> <span className="fn">createApp</span>(<span className="var">developer</span>);</div>
                    <div className="code-cursor"></div>
                  </div>
                </div>
                <div className="floating-icon float-icon-1"><i className="bx bxl-react"></i></div>
                <div className="floating-icon float-icon-2"><i className="bx bxl-nodejs"></i></div>
                <div className="floating-icon float-icon-3"><i className="bx bxl-php"></i></div>
                <div className="floating-icon float-icon-4"><i className="bx bxl-firebase"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Me</h2>
              <p>Passionate developer building impactful digital solutions</p>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="about-profile-card">
                  <img src="/images/pict.gif" className="about-img" alt="Rogasian Mvungi" />
                  <div className="about-profile-info">
                    <h3>Rogasian Gelasi Haji</h3>
                    <p className="about-role">Full Stack Web Developer</p>
                    <div className="about-contact-grid">
                      <div><i className="bx bx-map"></i> Mbeya, Tanzania</div>
                      <div><i className="bx bx-envelope"></i> rogashianmvugi@gmail.com</div>
                      <div><i className="bx bx-phone"></i> +255697624409</div>
                      <div><i className="bx bx-briefcase"></i> Freelance Available</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-content">
                  <h3>Full-Stack Web Developer</h3>
                  <p className="about-highlight">Full-stack developer with 3+ years of experience building responsive websites, management systems, and modern web platforms.</p>
                  <p>I develop complete web solutions using Laravel, Next.js, React, PHP, JavaScript, MySQL, and PostgreSQL. My work focuses on responsive UI, clean backend integration, and reliable systems that solve real operational problems.</p>
                  <div className="about-highlights">
                    <div className="highlight-item">
                      <i className="bx bx-check-circle"></i>
                      <span>Responsive UI Design</span>
                    </div>
                    <div className="highlight-item">
                      <i className="bx bx-check-circle"></i>
                      <span>Full-Stack Development</span>
                    </div>
                    <div className="highlight-item">
                      <i className="bx bx-check-circle"></i>
                      <span>API Integration</span>
                    </div>
                    <div className="highlight-item">
                      <i className="bx bx-check-circle"></i>
                      <span>Database Design</span>
                    </div>
                    <div className="highlight-item">
                      <i className="bx bx-check-circle"></i>
                      <span>Mobile App Development</span>
                    </div>
                    <div className="highlight-item">
                      <i className="bx bx-check-circle"></i>
                      <span>Performance Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="facts" className="facts">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="fact-box">
                  <div className="fact-icon"><i className="bi bi-emoji-smile"></i></div>
                  <span className="fact-number" data-target="4" data-suffix="+">0</span>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-box">
                  <div className="fact-icon"><i className="bi bi-journal-richtext"></i></div>
                  <span className="fact-number" data-target="9" data-suffix="+">0</span>
                  <p>Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-box">
                  <div className="fact-icon"><i className="bi bi-headset"></i></div>
                  <span className="fact-number" data-target="1463" data-suffix="+">0</span>
                  <p>Hours Of Support</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-box">
                  <div className="fact-icon"><i className="bi bi-award"></i></div>
                  <span className="fact-number" data-target="3" data-suffix="+">0</span>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Skills</h2>
              <p>Core technologies and tools I use to design, build, and maintain full-stack applications.</p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-php"></i> Laravel &amp; PHP</span>
                    <span className="skill-val">90%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-react"></i> React &amp; Next.js</span>
                    <span className="skill-val">88%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-javascript"></i> JavaScript</span>
                    <span className="skill-val">85%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bx-data"></i> MySQL &amp; PostgreSQL</span>
                    <span className="skill-val">82%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-html5"></i> HTML, CSS &amp; Tailwind</span>
                    <span className="skill-val">92%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-firebase"></i> Supabase &amp; Firebase</span>
                    <span className="skill-val">78%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-github"></i> Git &amp; GitHub</span>
                    <span className="skill-val">84%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bx-server"></i> Livewire &amp; REST API</span>
                    <span className="skill-val">80%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-flutter"></i> Flutter</span>
                    <span className="skill-val">72%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name"><i className="bx bxl-figma"></i> Figma &amp; Adobe XD</span>
                    <span className="skill-val">76%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Resume</h2>
              <p>Profile, education, and professional experience</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title"><i className="bx bx-user"></i> Profile</h3>
                <div className="resume-item pb-0">
                  <h4>Rogasian Gelasi Haji</h4>
                  <p><em>Front-end and Back-end Web Developer</em></p>
                  <p>Dynamic and creative frontend and backend developer with 3 years of experience delivering visually stunning and user-friendly digital experiences.</p>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> Tanzania, Mbeya</li>
                    <li><i className="bx bx-chevron-right"></i> <a href="https://mvungi-rogasian.vercel.app" target="_blank" rel="noopener">mvungi-rogasian.vercel.app</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="https://github.com/mvungi113" target="_blank" rel="noopener">github.com/mvungi113</a></li>
                    <li><i className="bx bx-chevron-right"></i> +255697624409</li>
                    <li><i className="bx bx-chevron-right"></i> rogashianmvugi@gmail.com</li>
                  </ul>
                </div>
                <h3 className="resume-title"><i className="bx bx-book"></i> Education</h3>
                <div className="resume-item">
                  <h4>Mbeya University of Science and Technology</h4>
                  <h5>2022 - 2025</h5>
                  <p><em>Bachelor of Computer Science (BCS)</em></p>
                </div>
                <div className="resume-item">
                  <h4>Mbeya University of Science and Technology</h4>
                  <h5>2019 - 2022</h5>
                  <p><em>Diploma in Information and Communication Technology</em></p>
                </div>
                <div className="resume-item">
                  <h4>Nyerere Secondary School</h4>
                  <h5>2015 - 2018</h5>
                  <p><em>Certificate of Secondary Education Examination</em></p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title"><i className="bx bx-briefcase"></i> Experience</h3>
                <div className="resume-item">
                  <h4>Web Developer (Freelance)</h4>
                  <h5>2025 - Present</h5>
                  <p><em>Mbeya</em></p>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> Developed web applications using Laravel, Next.js, React, PHP, JavaScript, MySQL, and PostgreSQL.</li>
                    <li><i className="bx bx-chevron-right"></i> Built dynamic platforms including blogs, management systems, and portfolio websites.</li>
                    <li><i className="bx bx-chevron-right"></i> Integrated REST APIs and databases including MySQL, PostgreSQL, and Supabase.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Full Stack Web Developer</h4>
                  <h5>12/2025 - 02/2026</h5>
                  <p><em>Anaby Green Company Limited</em></p>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> Developed the official company website using Laravel, MySQL, Tailwind CSS, and Livewire.</li>
                    <li><i className="bx bx-chevron-right"></i> Designed responsive interfaces and implemented backend content management features.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Full Stack Developer (Team Project)</h4>
                  <h5>07/2025 - 12/2025</h5>
                  <p><em>MUST, Mbeya</em></p>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> Contributed to Project Hub for managing finalist student projects at MUST.</li>
                    <li><i className="bx bx-chevron-right"></i> Built responsive interfaces with Next.js and React, integrated Supabase.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Network Support Intern</h4>
                  <h5>07/2024 - 09/2024</h5>
                  <p><em>TTCL, Mbeya</em></p>
                  <ul>
                    <li><i className="bx bx-chevron-right"></i> Assisted with network device configuration, maintenance, and troubleshooting.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Recent projects I've worked on</p>
            </div>
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Design</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div id="portfolio-container" className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
            </div>
            <script id="portfolio-data" type="application/json" dangerouslySetInnerHTML={{__html: JSON.stringify([
      {
        "title": "Ecommerce App",
        "category": "app",
        "image": "images/refference/ecommerce app.png",
        "source": "https://github.com/mvungi113/ecommerce",
        "type": "Mobile Application",
        "description": "A modern e-commerce mobile application built with Flutter, featuring a clean UI, smooth animations, and comprehensive shopping features."
      },
      {
        "title": "Anaby Green",
        "category": "web",
        "image": "images/refference/anabygreen.png",
        "source": "https://anabygreen.co.tz/",
        "type": "Web",
        "description": "Premium organic fertilizers and expert agricultural solutions to grow healthier crops, protect the environment, and empower Tanzanian farmers."
      },
      {
        "title": "Blog Hub",
        "category": "web",
        "image": "images/refference/bloghub.png",
        "source": "https://charming-blog.vercel.app",
        "type": "Website",
        "description": "A simple yet elegant blog platform for sharing knowledge and experiences."
      },
      {
        "title": "Smart Warehouse Management System",
        "category": "web",
        "image": "images/refference/inventory.png",
        "source": "https://tanzania-stock-flow.vercel.app/",
        "type": "Website",
        "description": "A comprehensive warehouse management system for tracking inventory and optimizing operations."
      },
      {
        "title": "Inventory Mobile App",
        "category": "app",
        "image": "images/refference/noimg.png",
        "source": "https://github.com/mvungi113/inventory",
        "type": "Mobile Application",
        "description": "Simple Mobile App for inventory management, allowing users to track and manage their stock on the go."
      },
      {
        "title": "Clearance Management System",
        "category": "web",
        "image": "images/refference/noimg.png",
        "source": "https://github.com/mvungi113/clearance-MS",
        "type": "Website",
        "description": "A system for managing clearance processes in educational institutions."
      },
      {
        "title": "Off-Campus Management System",
        "category": "web",
        "image": "images/refference/noimg.png",
        "source": "https://github.com/mvungi113/off-campus",
        "type": "Website",
        "description": "A system for managing off-campus processes in educational institutions."
      },
      {
        "title": "Zoo Surveillance Management System",
        "category": "web",
        "image": "images/refference/noimg.png",
        "source": "https://github.com/mvungi113/zoo-mis",
        "type": "Website",
        "description": "A system for managing zoo surveillance operations and animal tracking."
      },
      {
        "title": "Manage Product Expiration System",
        "category": "web",
        "image": "images/refference/noimg.png",
        "source": "https://github.com/mvungi113/manage_product_exp",
        "type": "Website",
        "description": "A system for managing product expiration dates and inventory in retail environments."
      }
    ])}} />
          </div>
        </section>

        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>What I can do for your business</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="service-card">
                  <div className="service-icon service-icon-blue">
                    <i className="bx bx-mobile-alt"></i>
                  </div>
                  <h4>Mobile App Development</h4>
                  <p>Build cross-platform mobile applications with Flutter and modern UI/UX that meet your customers where they are.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="service-card">
                  <div className="service-icon service-icon-green">
                    <i className="bx bx-globe"></i>
                  </div>
                  <h4>Web Development</h4>
                  <p>Create responsive, high-performance websites and web applications using Laravel, Next.js, and React.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div className="service-card">
                  <div className="service-icon service-icon-purple">
                    <i className="bx bx-server"></i>
                  </div>
                  <h4>Backend &amp; API</h4>
                  <p>Design and develop robust backend systems, REST APIs, and database architectures for scalable applications.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="service-card">
                  <div className="service-icon service-icon-orange">
                    <i className="bx bx-palette"></i>
                  </div>
                  <h4>UI/UX Design</h4>
                  <p>Design clean, intuitive interfaces using Figma and Adobe XD that users love and businesses trust.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                <div className="service-card">
                  <div className="service-icon service-icon-red">
                    <i className="bx bx-data"></i>
                  </div>
                  <h4>Database Design</h4>
                  <p>Architecture and optimization of MySQL, PostgreSQL, and Supabase databases for reliable data management.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                <div className="service-card">
                  <div className="service-icon service-icon-teal">
                    <i className="bx bx-support"></i>
                  </div>
                  <h4>Technical Support</h4>
                  <p>Ongoing maintenance, debugging, and optimization to keep your applications running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-brand">
                  <h3>Rogasian Mvungi</h3>
                  <p>Full-Stack Developer</p>
                </div>
                <p className="footer-desc">Building modern web and mobile applications with clean code and great user experiences. Based in Mbeya, Tanzania.</p>
                <div className="social-links footer-socials">
                  <a href="https://github.com/mvungi113" target="_blank" rel="noopener"><i className="bx bxl-github"></i></a>
                  <a href="https://x.com/rogasiani_" target="_blank" rel="noopener"><i className="bx bxl-twitter"></i></a>
                  <a href="https://www.linkedin.com/in/rogasian-haji-2049431b2/" target="_blank" rel="noopener"><i className="bx bxl-linkedin"></i></a>
                  <a href="https://wa.me/255697624409" target="_blank" rel="noopener"><i className="bx bxl-whatsapp"></i></a>
                  <a href="https://www.instagram.com/rogasiangelasi" target="_blank" rel="noopener"><i className="bx bxl-instagram"></i></a>
                  <a href="https://www.facebook.com/rogasian.gelas" target="_blank" rel="noopener"><i className="bx bxl-facebook"></i></a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><a href="#hero">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#resume">Resume</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#services">Services</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <h4 className="footer-title">Services</h4>
                <ul className="footer-links">
                  <li><a href="#services">Web Development</a></li>
                  <li><a href="#services">Mobile Apps</a></li>
                  <li><a href="#services">UI/UX Design</a></li>
                  <li><a href="#services">Backend &amp; API</a></li>
                  <li><a href="#services">Database Design</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <h4 className="footer-title">Contact</h4>
                <ul className="footer-contact">
                  <li><i className="bx bx-phone"></i> +255697624409</li>
                  <li><i className="bx bx-envelope"></i> rogashianmvugi@gmail.com</li>
                  <li><i className="bx bx-map"></i> Mbeya, Tanzania</li>
                  <li><i className="bx bx-check-circle"></i> Available for Freelance</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} <strong>Rogasian Mvungi</strong>. All Rights Reserved</p>
            </div>
          </div>
        </footer>

        <div id="preloader"></div>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        <div className="modal fade" id="portfolioModal" tabIndex="-1" aria-labelledby="portfolioModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="portfolioModalLabel">Project</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
