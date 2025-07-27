import React from 'react';

const Navigation = () => {
  const navItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 right-0 p-8 z-50">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-foreground font-light text-sm tracking-wide relative group transition-colors duration-300 hover:text-primary"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;