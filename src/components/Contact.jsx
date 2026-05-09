import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Let's connect and create something amazing together</p>
        
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <h4>Email</h4>
            <a href="mailto:yashkasat38@gmail.com">yashkasat38@gmail.com</a>
          </div>
          <div className="contact-info-item">
            <h4>Phone</h4>
            <a href="tel:+918830114207">+91-8830114207</a>
          </div>
          <div className="contact-info-item">
            <h4>Location</h4>
            <p>Pune, India</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for reaching out! I will get back to you soon.');
        }}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              required 
              className="form-input"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <div className="social-links">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/yash-kasat-40a531287" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
            <a href="https://github.com/yashkasat" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
            <a href="mailto:yashkasat38@gmail.com" className="social-icon">Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
