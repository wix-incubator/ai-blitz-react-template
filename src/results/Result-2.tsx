import './Result-2.css';

function Layout() {
  return (
      <body>
      <div className="grid-container">
        <div className="grid-item top-center top-center-overlap">
          <h1 className="inspiring-text">Discover the world not as it is, but as you are</h1>
        </div>

        <div className="grid-item">Journey beyond the familiar</div>
        <div className="grid-item middle">
          <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
              alt="Majestic mountain landscape"
              className="feature-image"
          />
        </div>
        <div className="grid-item">Embrace the unknown path</div>

        <div className="grid-item bottom-center">
          <p className="disclaimer">All adventures should be undertaken responsibly. Respect nature, local cultures, and travel safely.</p>
        </div>
      </div>
      </body>
  );
}
export default Layout;
