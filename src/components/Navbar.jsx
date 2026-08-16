import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          Yasar<span>.</span>M
        </a>

        <nav className="desktop-nav">
          {LINKS.map((link, i) => (
            <a href={link.href} key={link.href} className="nav-item">
              <span>0{i + 1}</span>{link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">Let's talk <span>↗</span></a>

        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(v => !v)}>
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {LINKS.map((link, i) => (
              <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
                <span>0{i + 1}</span>{link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
