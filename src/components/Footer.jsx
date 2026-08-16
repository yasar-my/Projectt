export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Yasar M</span>
        <span>Designed & built with React</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
