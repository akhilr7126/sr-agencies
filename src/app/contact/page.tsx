
"use client";
import React, { useState } from 'react';
import Button from '../../components/ui/Button/Button';

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate submission
        setTimeout(() => setFormStatus('success'), 1500);
    };

    return (
        <main className="section">
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem' }}>
                        Ready to get started? Fill out the form below or reach us via WhatsApp.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        {/* Contact Info */}
                        <div style={{ background: 'var(--primary-blue)', color: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Get in Touch</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <h5 style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem' }}>Email</h5>
                                    <p>info@sragencies.com</p>
                                </div>
                                <div>
                                    <h5 style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem' }}>Phone / WhatsApp</h5>
                                    <p>+91 987 654 3210</p>
                                </div>
                                <div>
                                    <h5 style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem' }}>Address</h5>
                                    <p>Hyderabad, Telangana, India</p>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <Button href="https://wa.me/919876543210" variant="secondary" fullWidth>Chat on WhatsApp</Button>
                            </div>
                        </div>

                        {/* Form */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid #eee' }}>
                            {formStatus === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <h3 style={{ color: 'var(--secondary-green)', marginBottom: '1rem' }}>Message Sent!</h3>
                                    <p>Thank you for contacting us. We will get back to you shortly.</p>
                                    <Button onClick={() => setFormStatus('idle')} variant="outline" className="mt-4">Send Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                        <input
                                            type="text"
                                            required
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }}
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                        <input
                                            type="email"
                                            required
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }}
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                        <textarea
                                            required
                                            rows={4}
                                            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }}
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                    <Button type="submit" variant="primary" fullWidth>
                                        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
