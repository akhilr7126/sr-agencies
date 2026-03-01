
import React from 'react';
import Button from '../../components/ui/Button/Button';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
    title: 'Our Services | SR Agencies',
    description: 'Comprehensive property management services: maintenance, rentals, legal, and more.',
};

export default function ServicesPage() {
    const services = [
        {
            title: 'Property Maintenance',
            description: 'We keep your property in showroom condition. Schedule regular cleaning, repairs, and inspections.',
            features: ['Plumbing & Electrical Repairs', 'Deep Cleaning', 'Painting & Renovation', 'Pest Control']
        },
        {
            title: 'Tenant Management',
            description: 'End-to-end tenant handling from finding the right people to collecting rent on time.',
            features: ['Background Verification', 'Rental Agreements', 'Rent Collection', 'Utility Bill Payments']
        },
        {
            title: 'Legal & Documentation',
            description: 'Navigate the complex legal landscape with our expert assistance.',
            features: ['Property Tax Payment', 'EC & Legal Opinions', 'Dispute Resolution', 'Registration Assistance']
        },
        {
            title: 'NRI Exclusive Services',
            description: 'Specialized services designed for the unique needs of Non-Resident Indians.',
            features: ['Power of Attorney Mgmt', 'Video Inspections', 'Repatriation Assistance', 'Vacant Property Monitoring']
        }
    ];

    return (
        <main>
            <div style={{ background: 'var(--primary-blue)', color: 'white', padding: '6rem 0 4rem', textAlign: 'center' }}>
                <h1 className="container">Our Services</h1>
                <p className="container" style={{ marginTop: '1rem', opacity: 0.9 }}>
                    Comprehensive solutions for your real estate assets
                </p>
            </div>

            <div className="container section">
                <div style={{ display: 'grid', gap: '4rem' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '2rem',
                            alignItems: 'center',
                            padding: '2rem',
                            background: 'white',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                            border: '1px solid #eee'
                        }}>
                            <div>
                                <h2 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>{service.title}</h2>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>{service.description}</p>
                                <Button href="/contact" variant="outline">Enquire Now</Button>
                            </div>

                            <div style={{ background: 'var(--bg-off-white)', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ marginBottom: '1rem' }}>Includes:</h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {service.features.map(f => (
                                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <CheckCircle2 size={18} color="var(--secondary-green)" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
