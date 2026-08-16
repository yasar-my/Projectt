import { motion } from 'framer-motion';
import Reveal from './Reveal';

const GROUPS = [
  { num: '01', title: 'Frontend', accent: 'teal', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'] },
  { num: '02', title: 'Backend', accent: 'gold', items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'Microservices'] },
  { num: '03', title: 'Data', accent: 'violet', items: ['MySQL', 'PostgreSQL', 'JPA / Hibernate', 'SQL', 'Database Design'] },
  { num: '04', title: 'Tools', accent: 'white', items: ['Git', 'GitHub', 'Postman', 'Docker', 'Razorpay', 'Cloudinary'] },
];

export default function Skills() {
  return (
    <section id="stack" className="section stack-section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 / Technology</p>
          <div className="section-heading-row">
            <h2 className="display-title">My <span className="gradient-text">toolbox.</span></h2>
            <p>Technologies I use to turn product requirements into maintainable software.</p>
          </div>
        </Reveal>

        <div className="skill-grid">
          {GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <motion.article className={`skill-card ${group.accent}`} whileHover={{ y: -8 }}>
                <div className="skill-top"><span>{group.num}</span><span>↗</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map(item => <span key={item}>{item}</span>)}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
