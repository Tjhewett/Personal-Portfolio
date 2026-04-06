function Contact() {
  return (
    <section className="page-section">
      <div className="container page-container">
        <p className="section-label">Contact</p>
        <h1>Let’s Connect</h1>

        <div className="contact-grid">
          <div className="content-card">
            <h2>Email</h2>
            <p>
              <a href="mailto:football1756@gmail.com">
                football1756@gmail.com
              </a>
            </p>
          </div>

          <div className="content-card">
            <h2>GitHub</h2>
            <p>
              <a
                href="https://github.com/Tjhewett"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Tjhewett
              </a>
            </p>
          </div>

          <div className="content-card">
            <h2>LinkedIn</h2>
            <p>
              <a
                href="https://www.linkedin.com/in/trevor-hewett-endi24/"
                target="_blank"
                rel="noreferrer"
              >
               linkedin.com/in/trevor-hewett-endi24
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;