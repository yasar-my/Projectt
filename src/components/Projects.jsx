import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Reveal from './Reveal';

const PROJECTS = [
  {
    number: '01',
    title: 'Feast & Fete',
    type: 'Full-Stack Event Catering Platform',
    desc: 'A complete catering platform connecting customers, organizers, and admins with secure authentication, booking workflows, image management, and online payments.',
    stack: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Microservices', 'JWT', 'Razorpay'],
    gradient: 'project-gradient-one',
    href: 'https://github.com/yasar-my',
  },
  {
    number: '02',
    title: 'Portfolio',
    type: 'Interactive Developer Experience',
    desc: 'A performance-minded portfolio designed around motion, typography, interactive cards, and a strong engineering-focused visual identity.',
    stack: ['React', 'Framer Motion', 'CSS', 'JavaScript'],
    gradient: 'project-gradient-two',
    href: 'https://github.com/yasar-my/yasar-portfolio',
  },
  {
    number: '03',
    title: 'Backend APIs',
    type: 'Java & Spring Boot Services',
    desc: 'RESTful backend work focused on authentication, business logic, persistence, validation, and clean API contracts.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'SQL'],
    gradient: 'project-gradient-three',
    href: 'https://github.com/yasar-my',
  },
];

function TiltCard({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 22 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 22 });

  const move = e => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Reveal delay={index * 0.1}>
      <motion.a
        ref={ref}
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={`project-card ${project.gradient}`}
        onMouseMove={move}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      >
        <div className="project-glow" />
        <div className="project-meta"><span>{project.number}</span><span>View project ↗</span></div>
        <div className="project-visual">
          <div className="visual-window">
            <span /><span /><span />
            <div className="visual-lines"><i /><i /><i /><i /></div>
          </div>
        </div>
        <div className="project-info">
          <p>{project.type}</p>
          <h3>{project.title}</h3>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 / Selected work</p>
          <div className="section-heading-row">
            <h2 className="display-title">Things I've <span className="gradient-text">built.</span></h2>
            <p>Real projects, real engineering problems, and a little obsession with the details.</p>
          </div>
        </Reveal>

        <div className="projects-list">
          {PROJECTS.map((project, index) => <TiltCard key={project.number} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}
