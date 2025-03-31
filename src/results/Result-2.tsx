import './Result-2.css';

function Layout() {
  return (
      <>
        <div className="inspiring-text">
          <p>Dreams don't work unless you do,</p>
          <p>Transform your vision into reality today.</p>
        </div>

        <div className="container">
          <div className="content-wrapper">

            <aside>
              <div className="aside-content">
                <h3>Our Mission</h3>
                <p>Discover innovative solutions crafted for your unique needs.</p>
                <div className="aside-divider"></div>
                <button className="cta-button">Learn More</button>
              </div>
            </aside>

            <main>
              <div className="image-container">
                <img src="https://picsum.photos/800/500" alt="Beautiful landscape" />
                <div className="image-overlay">
                  <h2>Creating Beautiful Experiences</h2>
                </div>
              </div>
            </main>

            <aside>
              <div className="aside-content">
                <h3>Our Expertise</h3>
                <p>Our team of experts is ready to bring your vision to life.</p>
                <div className="aside-divider"></div>
                <button className="cta-button">Contact Us</button>
              </div>
            </aside>
          </div>
        </div>

        <footer>
          <div className="footer-content">
            <p>Disclaimer: This is a demo page created from a template. Any resemblance to real websites is purely coincidental.</p>
            <p>© 2025 All Rights Reserved</p>
          </div>
        </footer>
      </>
  );
}

export default Layout;
