
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

                <div style={{ maxWidth: '800px', margin: '4rem auto 0', textAlign: 'center', background: 'white', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #eee' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                            To provide hassle-free property management services that enable our clients to enjoy the benefits of property ownership without the stress of day-to-day management.
                        </p>
                        <p style={{ lineHeight: 1.7 }}>
                            We leverage technology and local expertise to ensure your assets are protected, maintained, and appreciated over time.
                        </p>

                </div>
            </div>
        </main>
    );
}
