import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          SocialX Dashboard
        </Link>

        {/* Buttons */}
        <div className="space-x-4">
          <Link to="/login" className="btn btn-accent">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
