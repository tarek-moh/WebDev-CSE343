import React, { useState } from "react";
import { Search, ShoppingCart, Globe , ChevronRight} from "lucide-react";
import "./Navbar.css"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
         {/* Logo + Explore */}
        <div className="logo-explore">
          <a href="#" className="logo-link">
            <img
              src="/src/assets/logo-udemy.svg"
              alt="Udemy"
              className="logo"
            />
          </a>

          {/* Explore Button */}
          <div
            className="explore-container"
            onMouseEnter={() => setIsExploreOpen(true)}
            onMouseLeave={() => setIsExploreOpen(false)}
          >
            <button className="explore-link">
              Explore
            </button>

            {/* Dropdown */}
            {isExploreOpen && (
            <>
              <div className="hover-bridge"></div>
              <div className="explore-dropdown">
                <div className="dropdown-item">
                  Development <ChevronRight size={18} />
                </div>
                <div className="dropdown-item">
                  Business <ChevronRight size={18} />
                </div>
                <div className="dropdown-item">
                  Finance & Accounting <ChevronRight size={18} />
                </div>
                <div className="dropdown-item">
                  IT & Software <ChevronRight size={18} />
                </div>
                <div className="dropdown-item">
                  Design <ChevronRight size={18} />
                </div>
                <div className="dropdown-item">
                  Teaching & Academics <ChevronRight size={18} />
                </div>
              </div>
            </>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <button className="search-icon">
              <Search size={20} strokeWidth={2} />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search for anything"
            />
          </div>
        </div>

        {/* Text Links */}
        <div className="text-links">
          <a href="#">Plans & Pricing</a>
          <a href="#">Udemy Business</a>
          <a href="#">Teach on Udemy</a>
        </div>

        {/* Actions */}
        <div className="actions">
          <button className="icon-btn">
            <ShoppingCart size={18} strokeWidth={2} />
          </button>

          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>

          <button className="icon-btn">
            <Globe size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </nav>
  );
}
