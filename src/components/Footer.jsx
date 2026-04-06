function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} Trevor Hewett. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/Tjhewett"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/trevor-hewett-endi24/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:football1756@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;