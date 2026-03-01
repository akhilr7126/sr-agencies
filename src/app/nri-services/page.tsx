
import React from 'react';
import Button from '../../components/ui/Button/Button';
import { Plane, Video, FileCheck, Landmark } from 'lucide-react';

export const metadata = {
    title: 'NRI Services | SR Agencies',
    description: 'Specialized property management for Non-Resident Indians.',
};

export default function NRIServicesPage() {
    const points = [
        {
            icon: <Video size={32} />,
            title: 'Virtual Inspections',
            text: 'Schedule live video calls to inspect your property or oversee ongoing work from anywhere.'
        },
        {
            icon: <FileCheck size={32} />,
            title: 'Power of Attorney',
            text: 'We assist with the drafting, adjudication, and management of POA for property transactions.'
        },
        {
            icon: <Landmark size={32} />,
            title: 'Financial Management',
            text: 'Tax payments, utility bills, and repatriation assistance for rental income.'
        },
        {
            icon: <Plane size={32} />,
            title: 'Concierge Services',
            text: 'Airport pick-up and dedicated support when you visit India to check your properties.'
        }
    ];

    return (
        <main>
            <section style={{
                background: 'linear-gradient(rgba(10, 38, 71, 0.9), rgba(10, 38, 71, 0.8)), url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Dedicated to NRIs</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.25rem', opacity: 0.9 }}>
                        Managing your investment in India shouldn't be a burden. <br />
                        We act as your eyes and ears on the ground.
                    </p>
                    <Button href="/contact" variant="primary">
                        Schedule a Free Consultation
                    </Button>
                </div>
            </section>

            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {points.map((p, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                color: 'var(--primary-blue)',
                                background: 'var(--bg-off-white)',
                                width: '80px', height: '80px',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 1.5rem'
                            }}>
                                {p.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{p.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-off-white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Why NRIs Trust SR Agencies</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: 'var(--radius-lg)' }}>
                            <h4>Transparent Reporting</h4>
                            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>Monthly statements and photo updates sent directly to your email or WhatsApp.</p>
                        </div>
                        <div style={{ padding: '2rem', background: 'white', borderRadius: 'var(--radius-lg)' }}>
                            <h4>Legal Expertise</h4>
                            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem' }}>We understand the complexities of Indian property law for OCI/NRIs.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
