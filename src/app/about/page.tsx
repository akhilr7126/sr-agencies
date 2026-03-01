
import React from 'react';
// import { Users, UserCheck } from 'lucide-react'; // Removed as we are using images now

export const metadata = {
    title: 'About Us | SR Agencies',
    description: 'Meet the leadership team behind SR Agencies - Srinivas Rao Kamma and Srikala Kamma.',
};

export default function AboutPage() {
    return (
        <main className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>About SR Agencies</h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-light)', lineHeight: 1.8 }}>
                        SR Agencies was founded in 1995 by Mr. Srinivas Rao Kamma with a vision to provide dependable electrical contracting services across Telangana.
                        Over the years, the company earned the trust of clients through consistent service quality and strong technical expertise.
                        Today, carrying forward this legacy, SR Agencies is expanding into Property Management services, bringing the same reliability, operational excellence, and customer-first approach to the management of residential and commercial properties.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    {/* Values */}
                    <div>
                        <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                            To provide hassle-free property management services that enable our clients to enjoy the benefits of property ownership without the stress of day-to-day management.
                        </p>
                        <p style={{ lineHeight: 1.7 }}>
                            We leverage technology and local expertise to ensure your assets are protected, maintained, and appreciated over time.
                        </p>
                    </div>

                    {/* Leadership */}
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>Leadership</h2>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            {/* CEO Profile */}
                            <div style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid #eee',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    width: '120px',
                                    height: '120px',
                                    flexShrink: 0,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid var(--bg-off-white)',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    {/* Note: User must save image as public/team/ceo.jpg */}
                                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                        <img
                                            src="/team/ceo.jpg"
                                            alt="Srinivas Rao Kamma"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Srinivas Rao Kamma</h3>
                                    <p style={{ color: 'var(--secondary-green)', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>CEO</p>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                                        Visionary leader with extensive experience in real estate and operations, dedicated to bringing transparency to the property market.
                                    </p>
                                </div>
                            </div>

                            {/* MD Profile */}
                            <div style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid #eee',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    width: '120px',
                                    height: '120px',
                                    flexShrink: 0,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '4px solid var(--bg-off-white)',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}>
                                    {/* Note: User must save image as public/team/md.jpg */}
                                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                        <img
                                            src="/team/md.jpg"
                                            alt="Srikala Kamma"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Srikala Kamma</h3>
                                    <p style={{ color: 'var(--secondary-green)', fontWeight: 600, marginBottom: '0.75rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Managing Director</p>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
                                        Driving operational excellence and customer satisfaction. Focused on delivering a premium experience for every client.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
