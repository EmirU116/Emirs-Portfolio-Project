'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'Emirulu01@hotmail.com',
    href: 'mailto:Emirulu01@hotmail.com',
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'emirulusoy-46b22124a',
    href: 'https://www.linkedin.com/in/emirulusoy-46b22124a/',
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Stockholm, Sweden',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.contact} ${visible ? styles.visible : ''}`}
    >
      <p className={styles.label}>Let&apos;s connect</p>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.intro}>
        I&apos;m currently open to new opportunities. Whether you have a project in mind,
        a role to discuss, or just want to say hello — my inbox is open.
      </p>

      <div className={styles.container}>
        {/* Contact info */}
        <div className={styles.info}>
          <h3 className={styles.infoHeading}>Contact Information</h3>
          <div className={styles.infoList}>
            {contactInfo.map(({ icon, label, value, href, external }) => (
              <div key={label} className={styles.infoCard}>
                <span className={styles.infoIcon}>{icon}</span>
                <div>
                  <p className={styles.infoLabel}>{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className={styles.infoValue}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className={styles.infoValuePlain}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          {submitted ? (
            <div className={styles.success}>
              <span>✓</span>
              <p>Message sent! I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to talk about?"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message →
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
