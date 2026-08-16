import { motion } from 'framer-motion';
import Reveal from './Reveal';

const LINKS = [
  { label: 'Email', value: 'Connect via email', href: 'mailto:yasar@example.com' },
  { label: 'GitHub', value: 'github.com/yasar-my', href: 'https://github.com/yasar-my' },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/' },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">05 / Contact</p>
          <h2 className="contact-title">Let's build something <span>worth remembering.</span></h2>
          <p className="contact-copy">
            Looking for a Java / Spring Boot or full-stack opportunity. If you have a project,
            role, or idea in mind, I'd love to hear from you.
          </p>
        </Reveal>

        <div className="contact-links">
          {LINKS.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.08}>
              <motion.a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" whileHover={{ x: 10 }} className="contact-link">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
                <b>↗</b>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
