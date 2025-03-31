import './Result-1.css';

function Layout() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">Company Name</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="hero">
          <h1>Welcome to Our Website</h1>
          <p>Your trusted partner for amazing solutions</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <div className="container">
        <div className="content-wrapper">
          <main>
            <section className="featured">
              <h2>Our Services</h2>
              <div className="services-grid">
                <div className="service-card">
                  <h3>Service 1</h3>
                  <p>Description of this amazing service and how it can benefit customers.</p>
                  <a href="#" className="learn-more">Learn More</a>
                </div>
                <div className="service-card">
                  <h3>Service 2</h3>
                  <p>Description of another amazing service we offer to our valued clients.</p>
                  <a href="#" className="learn-more">Learn More</a>
                </div>
                <div className="service-card">
                  <h3>Service 3</h3>
                  <p>Information about our third service option that customers love.</p>
                  <a href="#" className="learn-more">Learn More</a>
                </div>
              </div>
            </section>

            <section className="about-summary">
              <h2>About Us</h2>
              <p>
                We are a dedicated team passionate about delivering high-quality solutions. With years of
                experience in the industry, we strive to exceed client expectations on every project.
              </p>
              <p>
                Our mission is to provide innovative solutions that help our clients achieve their goals
                efficiently and effectively.
              </p>
            </section>
          </main>

          <aside>
            <div className="sidebar-widget">
              <h3>Latest News</h3>
              <ul className="news-list">
                <li>
                  <a href="#">New Product Launch</a>
                  <span className="date">March 25, 2025</span>
                </li>
                <li>
                  <a href="#">Upcoming Webinar Series</a>
                  <span className="date">April 5, 2025</span>
                </li>
                <li>
                  <a href="#">Industry Award Winner</a>
                  <span className="date">February 18, 2025</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3>Contact Us</h3>
              <form className="contact-form">
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>

            <div className="sidebar-widget">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-icon">Facebook</a>
                <a href="#" className="social-icon">Twitter</a>
                <a href="#" className="social-icon">LinkedIn</a>
                <a href="#" className="social-icon">Instagram</a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <footer>
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Service 1</a></li>
              <li><a href="#">Service 2</a></li>
              <li><a href="#">Service 3</a></li>
              <li><a href="#">Custom Solutions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <address>
              123 Business Street
              <br />
              City, State 12345
              <br />
              Email: info@example.com
              <br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Company Name. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
  ;
}

export default Layout;
