import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h3>SR Agencies</h3>
                        <p>
                            Your trusted partner for property management in Andhra Pradesh & Telangana.
                            Simplifying ownership for NRIs and locals alike.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <div className={styles.links}>
                            <Link href="/about">About Us</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/nri-services">NRI Services</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Services</h4>
                        <div className={styles.links}>
                            <Link href="/services#maintenance">Property Maintenance</Link>
                            <Link href="/services#tenant">Tenant Management</Link>
                            <Link href="/services#legal">Legal Assistance</Link>
                            <Link href="/services#renovation">Renovation</Link>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <div className={styles.links}>
                            <p>Hyderabad, Telangana</p>
                            <a href="mailto:sr9009@hotmail.com">sr9009@hotmail.com</a>
                            <a href="tel:+919346399745">+91 9346399745</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} SR Agencies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
