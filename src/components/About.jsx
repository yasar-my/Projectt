import { motion } from 'framer-motion';
import Reveal from './Reveal';

const stats = [
  ['01', 'Full Stack', 'Frontend + Backend'],
  ['02', 'Backend', 'Java + Spring Boot'],
  ['03', 'Frontend', 'React + JavaScript'],
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <Reveal>
          <div>
            <p className="eyebrow">01 / About me</p>
            <h2 className="display-title">Turning ideas into <span className="gradient-text">working products.</span></h2>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="about-copy">
            <p>
              I'm a <strong>Java Full Stack Developer</strong> who enjoys building features end to end —
              from a responsive React interface to secure Spring Boot services and reliable databases.
            </p>
            <p>
              I care about readable code, practical architecture, and user experiences that feel fast,
              intentional, and easy to use.
            </p>
            <div className="stats-grid">
              {stats.map(([num, title, desc]) => (
                <motion.div className="stat" key={num} whileHover={{ y: -6 }}>
                  <span>{num}</span>
                  <strong>{title}</strong>
                  <small>{desc}</small>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
