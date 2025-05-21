import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white p-6 text-center">
    <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
  </footer>
);

export default Footer;
