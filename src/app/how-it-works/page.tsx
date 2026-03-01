
import React from 'react';
import Button from '../../components/ui/Button/Button';

export const metadata = {
    title: 'How It Works | SR Agencies',
    description: 'Simple 4-step process to get started with property management.',
};

export default function HowItWorksPage() {
    const steps = [
        {
            step: '01',
            title: 'Contact Us',
            content: 'Fill out our inquiry form or message us on WhatsApp. Tell us about your property and your needs.'
        },
        {
            step: '02',
            title: 'Property Inspection',
            content: 'Our team visits your property for a comprehensive assessment. We identify maintenance needs and rental potential.'
        },
        {
            step: '03',
            title: 'Proposal & Agreement',
            content: 'We provide a tailored management plan and quote. Once approved, we sign a transparent service agreement.'
        },
        {
            step: '04',
            title: 'Relax',
            content: 'We take over the keys and the stress. You receive regular updates and rent credits while you focus on your life.'
        }
    ];

    return (
        <main className="section">
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>How It Works</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '5rem' }}>
                    Onboarding with SR Agencies is simple and handled entirely remotely if needed.
                </p>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {steps.map((s, i) => (
                        <div key={i} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: 800,
                                color: 'var(--bg-off-white)',
                                lineHeight: 1,
                                textStroke: '1px var(--primary-blue)',
                                WebkitTextStroke: '1px var(--primary-blue)',
                                minWidth: '80px'
                            }}>
                                {s.step}
                            </div>
                            <div>
                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem' }}>{s.title}</h3>
                                <p style={{ color: 'var(--text-light)', lineHeight: 1.7 }}>{s.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <Button href="/contact" variant="primary">Start the Process</Button>
                </div>
            </div>
        </main>
    );
}
