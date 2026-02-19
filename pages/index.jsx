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
          <h1>Rogasian Mvungi</h1>
          <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer"></span></p>
          <div className="social-links">
            <a href="/mvungi113.html" className="twitter"><i className="bx bxl-github"></i></a>
            <a href="https://twitter.com/rogasiani_" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="/rogasiangelasi.html" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="/send_1.html" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
            <a href="/public-profile.html" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
          <br />
        </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>About</h2>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img src="/images/pict.gif" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <p className="fst-italic"></p>
                <h5>What can a "full-stack developer" do, you ask? </h5>
                <p>I can make a Website from nothing into existence, fully formed. I do not use tricks, nor is the magic. I specialize in manipulating the very fabric of the web, it's raw materials of HTML, CSS, JavaScript, Dart, PHP, and other frameworks such as Bootstrap and Laravel.</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Rogasian Mvungi</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+255 769 657 633</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Mbeya, Tanzania</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Professional:</strong> <span>Software Developer</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>wekindosdev@gmail.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
                <p>Also open source technologies are more helpfully in my carear. I am a custom WordPress theme and plugin development expert.</p>
                <p>My art &amp; design Background informs idention to design though to implementation. I can plan, design, build, launch and maintain a website myself. Did I mention that I build mobile apps too? I have worked with dart and flutter to build both iOS and Android App.</p>
              </div>
            </div>

          </div>
        </section>

        <section id="facts" className="facts">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Facts</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-headset"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="0" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Skills</h2>
              <p>I use different technology to build website and Mobile application</p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">HTML <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">CSS <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Dart &amp; Flutter <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">JavaScript <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Bootstrap <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">PHP &amp; Laravel <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">Photoshop, Adobe XD &amp; Figma <i className="val">85%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
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
              <p>Professional profile and background information.</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Profile</h3>
                <div className="resume-item pb-0">
                  <h4>Rogasian Gelasi Haji</h4>
                  <p><em>Front-end and Back-end Web Developer</em></p>
                  <p>Dynamic and creative frontend and backend developer with 3 years of experience delivering visually stunning and user-friendly digital experiences. Passionate about leveraging design principles and technology to develop innovative solutions that meet the needs of clients and end-users. Eager to contribute my skills and expertise to a collaborative team.</p>
                  <ul>
                    <li>Tanzania, Mbeya</li>
                    <li>+255-697-624-409</li>
                    <li>rogashianmvugi@gmail.com</li>
                  </ul>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Mbeya University of Science and Technology (MUST)</h4>
                  <h5>2022 - 2025</h5>
                  <p><em>Bachelor of Computer Science (BCS)</em></p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Web Developer &amp; Website Maintainer</h4>
                  <h5>2025 - Present</h5>
                  <p><em>Self / Freelance</em></p>
                  <ul>
                    <li>Developed and maintained company and client websites to ensure stability and smooth performance.</li>
                    <li>Implemented responsive UI using HTML, CSS, Tailwind, and JavaScript (React/Next.js).</li>
                    <li>Built backend APIs and managed databases (MySQL, PostgreSQL) with PHP/Laravel and Supabase.</li>
                  </ul>
                </div>
                <h3 className="resume-title">Skills</h3>
                <div className="resume-item">
                  <h4>Languages &amp; Frameworks</h4>
                  <p>PHP, Laravel, HTML, CSS, Tailwind, JavaScript, Next.js, React.js</p>
                  <h4>Tools &amp; Platforms</h4>
                  <p>cPanel, Git &amp; GitHub, Figma, Adobe XD, Firebase, Supabase</p>
                  <h4>Databases</h4>
                  <p>MySQL, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
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
              <script id="portfolio-data" type="application/json" dangerouslySetInnerHTML={{__html: `
    [
      {
        "title": "Kilimo App",
        "category": "app",
        "image": "images/soil%20npk.png",
        "type": "Mobile Application",
        "description": "Agriculture helper mobile app"
      },
      {
        "title": "Coffee Website",
        "category": "web",
        "image": "images/coffee.PNG",
        "type": "Web",
        "description": "Coffee shop website"
      },
      {
        "title": "Train booking app",
        "category": "app",
        "image": "images/app%202.jpg",
        "type": "Mobile Application",
        "description": "Train ticket booking UX"
      },
      {
        "title": "Audio Music UI",
        "category": "card",
        "image": "images/home%20screen.png",
        "type": "App Design",
        "description": "Music player UI concept"
      },
      {
        "title": "Student Management System",
        "category": "web",
        "image": "images/student%20management%20system.PNG",
        "type": "Website",
        "description": "School management web app"
      },
      {
        "title": "Online Food Order",
        "category": "web",
        "image": "images/food%20web.PNG",
        "type": "Website",
        "description": "Food ordering platform"
      }
    ]
              `}} />
          </div>
        </section>

        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                    </svg>
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h4><a href="">Mobile App</a></h4>
                  <p>Many people are currently using smart phones. It's your time to transfer your business online so that you can meet your customers very easily</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-orange ">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                    </svg>
                    <i className="bx bx-file"></i>
                  </div>
                  <h4><a href="">Website</a></h4>
                  <p>Through the website you can increase the sales of your products by advertising them online anywhere in the word</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-pink">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
                    </svg>
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h4><a href="">Busines Cards</a></h4>
                  <p>Your business needs to have a business card that will facilitate communication between you and your customer</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-yellow">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
                    </svg>
                    <i className="bx bx-layer"></i>
                  </div>
                  <h4><a href="">Logo</a></h4>
                  <p>The logo is what carries the reality  of your business. Let us create a good logo for your business.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box iconbox-red">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
                    </svg>
                    <i className="bx bx-slideshow"></i>
                  </div>
                  <h4><a href="">Videos</a></h4>
                  <p>We make short videosfor your business advertisements, we are ready to serve you.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box iconbox-teal">
                  <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
                    </svg>
                    <i className="bx bx-arch"></i>
                  </div>
                  <h4><a href="">Poster &amp; Banners</a></h4>
                  <p>Posters and Banners are important things for promoting your business</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="footer">
          <div className="container">
            <h3>Rogasian Mvungi</h3>
            <p>full-stack Developer</p>
            <div className="social-links">
              <a href="/wekindos.html" className="twitter"><i className="bx bxl-github"></i></a>
              <a href="https://twitter.com/mvungirogashian" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="/send.html" className="whatsapp"><i className="bx bxl-whatsapp"></i></a>
              <a href="/wekindosdev.html" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="/public-profile.html" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
            <div className="copyright">© Copyright <strong><span>Wekindos devs</span></strong>. All Rights Reserved</div>
            <div className="credits"></div>
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
