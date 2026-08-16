import { motion } from 'framer-motion';
import Reveal from './Reveal';

const TIMELINE = [
  {
    period: '2026',
    title: 'Java Full Stack Developer Intern',
    place: 'CODETIKKI PRIVATE LIMITED',
    desc: 'Worked on application development with a focus on backend tasks, APIs, and full-stack product workflows.',
  },
  {
    period: '2026',
    title: 'Feast & Fete — Full-Stack Project',
    place: 'Personal / Academic Project',
    desc: 'Built a full-stack event catering platform using Spring Boot microservices, React, JWT authentication, Cloudinary, and Razorpay.',
  },
  {
    period: 'BCA',
    title: 'Bachelor of Computer Applications',
    place: 'Computer Applications',
    desc: 'Built a foundation in programming, databases, web development, and software engineering.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container experience-layout">
        <Reveal>
          <div className="experience-intro">
            <p className="eyebrow">04 / Journey</p>
            <h2 className="display-title">A little bit of <span className="gradient-text">my story.</span></h2>
            <p>Learning, building, shipping — and getting better with every project.</p>
          </div>
        </Reveal>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <motion.article className="timeline-item" whileHover={{ x: 8 }}>
                <div className="timeline-dot" />
                <div className="timeline-date">{item.period}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.desc}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
