import React, { useState } from 'react'
import './GetInTouch.css'

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Contact form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            })
        }, 3000)
    }

    return (
        <section className="section get-in-touch" id="get-in-touch">
            <div className="container">
                <div className="get-in-touch-content">
                    <div className="get-in-touch-header">
                        <h2 className="get-in-touch-title">
                            Get in <span className="gradient-text">Touch</span>
                        </h2>
                        <p className="get-in-touch-subtitle">
                            Interested in learning more? Have questions? Want to partner with us? 
                            We'd love to hear from you.
                        </p>
                    </div>
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div className="contact-details">
                                    <h3 className="contact-label">Email</h3>
                                    <a href="mailto:hello@liquidaiplatform.com" className="contact-value">
                                        hello@liquidaiplatform.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">💬</div>
                                <div className="contact-details">
                                    <h3 className="contact-label">Let's Talk</h3>
                                    <p className="contact-value">Schedule a demo or consultation</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">🤝</div>
                                <div className="contact-details">
                                    <h3 className="contact-label">Partnership</h3>
                                    <p className="contact-value">Interested in partnering with us?</p>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Your name"
                                    disabled={submitted}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="your.email@company.com"
                                    disabled={submitted}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company" className="form-label">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Your company"
                                    disabled={submitted}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-textarea"
                                    rows="5"
                                    placeholder="Tell us about your use case, questions, or how we can help..."
                                    disabled={submitted}
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn-primary btn-large form-submit"
                                disabled={submitted}
                            >
                                {submitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>
                            {submitted && (
                                <p className="form-success">
                                    Thank you! We'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch

