import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us-container" style={styles.container}>
      {/* <h1 className="mb-4 text-center" style={styles.heading}>Contact Us</h1> */}

      <div className="contact-section" style={styles.contactSection}>
        {/* Left Section */}
        <div style={styles.leftSection}>
          <h4>🏢 Our Office</h4>
          <p>
            Online Shopping Pvt. Ltd.<br />
            #27, 2nd Floor, Digital Market Street,<br />
            Bangalore, Karnataka - 543215, India
          </p>

          <h4 >📞 Phone</h4>
          <p>
            +91 98765 43210<br />
            (Available: Mon–Sat, 10AM to 7PM)
          </p>

          <h4>📧 Email</h4>
          <p style={styles.emailText}>
            <a href="mailto:support@onlineshopping.com" >support@onlineshopping.com</a><br />
            {/* <a href="mailto:sales@nastroshop.com" style={styles.emailLink}>sales@nastroshop.com</a> */}
          </p>

          {/* Contact Form */}
          <div style={styles.contactFormContainer}>
            <h4>Contact Us Directly</h4>
            <form style={styles.contactForm}>
              <input style={styles.input} type="text" placeholder="Your Name" required />
              <input style={styles.input} type="email" placeholder="Your Email" required />
              <textarea style={styles.textarea} placeholder="Your Message" required></textarea>
              <button type="submit" style={styles.button}>Submit</button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div style={styles.rightSection}>
          <h4>🕐 Business Hours</h4>
          <p style={styles.text}>
            Monday to Saturday: 10:00 AM – 7:00 PM<br />
            Sunday: Closed
          </p>

          {/* Google Map */}
          <div style={styles.mapContainer}>
            <h4>Visit Us</h4>
            <iframe 
              src="https://www.google.com/maps/embed?pb=...your-embed-link..."
              width="100%" 
              height="100%" 
              style={styles.mapIframe} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

          {/* Customer Testimonials */}
          <div style={styles.testimonialsContainer}>
            <h4>What Our Customers Say</h4>
            <div style={styles.testimonialCard}>
              <blockquote>
                "The best online shopping experience! Fast delivery and great customer support."
                <footer>- Rathinavel M</footer>
              </blockquote>
            </div>
            <div style={styles.testimonialCard}>
              <blockquote>
                "Amazing product quality and variety. I'll definitely be shopping here again!"
                <footer>- Girish Kumar</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  
  container: {
    margin: '3rem 5%',
    background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Ubuntu',
  },
  
  heading: {
    fontSize: '2.5rem',
    color: ' #ffffff00',
    textTransform: 'lowercase',
    // letterSpacing: '3px',
    marginBottom: '5px',
  },
  contactSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '100px',
  },
  leftSection: {
    width: '44%',
    paddingRight: '4rem',
  },
  rightSection: {
    width: '45%',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    // lineHeight: '1.5',
  },
  officeText: {
    fontSize: '16px',
    color: '#555',
    // lineHeight: '1.5',
  },
  phoneText: {
    fontSize: '16px',
    color: '#555',
   // lineHeight: '1.5',
  },
  emailText: {
    fontSize: '16px',
    color: '#555',
    //lineHeight: '1.5',
  },
  phoneLink: {
    //color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  emailLink: {
    //color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  contactFormContainer: {
    marginBottom: '1rem',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '1rem',
    margin: '0.5rem 0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#007bff',
  },
  textarea: {
    padding: '1rem',
    margin: '0.5rem 0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    outline: 'none',
    transition: 'border-color 0.3s',
    height: '120px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    marginTop: '1rem',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
  },
  mapContainer: {
    height: '300px',
    marginBottom: '1rem',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  mapIframe: {
    border: '0',
    borderRadius: '8px',
  },
  testimonialsContainer: {
    marginBottom: '1rem',
  },
  testimonialCard: {
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.05)',
    marginBottom: '1rem',
    fontStyle: 'italic',
    color: '#555',
  },
};

export default ContactUs;
