import { motion } from 'framer-motion';
import Reveal from './Reveal';

const roles = ['Java Full Stack Developer', 'Spring Boot Developer', 'React Developer'];

const floating = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-grid" />
      <div className="hero-orbit orbit-a" />
      <div className="hero-orbit orbit-b" />

      <div className="container hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="pulse-dot" /> Available for opportunities
        </motion.div>

        <Reveal delay={0.28} y={24}>
          <p className="hero-kicker">Hello, I'm Yasar —</p>
        </Reveal>

        <Reveal delay={0.38} y={32}>
          <h1 className="hero-title">
            I build <span className="gradient-text">digital</span>
            <br />
            products that <span className="outline-text">work.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.5} y={24}>
          <p className="hero-copy">
            Java Full Stack Developer focused on clean architecture, scalable APIs,
            and polished React experiences.
          </p>
        </Reveal>

        <Reveal delay={0.62} y={20}>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>
            <a className="button button-ghost" href="#contact">Let's connect <span>↗</span></a>
          </div>
        </Reveal>

        <Reveal delay={0.72} y={16}>
          <div className="hero-stack">
            <span>JAVA</span><i /> <span>SPRING BOOT</span><i /> <span>REACT</span><i /> <span>MICROSERVICES</span>
          </div>
        </Reveal>
      </div>

      <motion.div className="hero-card card-one" variants={floating} animate="animate">
        <span className="card-label">BACKEND</span>
        <strong>Spring Boot</strong>
        <small>REST • Security • JPA</small>
      </motion.div>

      <motion.div className="hero-card card-two" variants={floating} animate="animate" transition={{ delay: 1 }}>
        <span className="card-label">FRONTEND</span>
        <strong>React.js</strong>
        <small>UI • Motion • APIs</small>
      </motion.div>

      <div className="scroll-hint"><span /> Scroll to explore</div>
    </section>
  );
}
