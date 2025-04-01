import './Result-2.css';

const GridLayout = () => {
  return (
      <div className="grid-container">
        {/* Base layer elements */}
        <div className="base-layer layer-1"></div>
        <div className="base-layer layer-2"></div>
        <div className="base-layer layer-3"></div>

        {/* Overlapping card elements */}
        <div className="card card-1"></div>
        <div className="card card-2"></div>
        <div className="card card-3"></div>
        <div className="card card-4"></div>
        <div className="card card-5"></div>

        {/* Floating elements that overlap multiple grid areas */}
        <div className="floating floating-1"></div>
        <div className="floating floating-2"></div>

        {/* Footer area */}
        <footer className="footer"></footer>
      </div>
  );
};

export default GridLayout;