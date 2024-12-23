import React from 'react';
import { Link , useNavigate  } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigue vers l'URL précédente
      };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Mon Application
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="btn btn-success">
                Retour au menu
              </Link>
            </li>
            <li>
            <button onClick={handleGoBack} className="btn btn-primary mx-3">
                Retour
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
