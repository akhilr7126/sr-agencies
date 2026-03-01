import Link from 'next/link';
import Button from '../components/ui/Button/Button';
import styles from './page.module.css';


export default function HomePage() {


    return (
        <main>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>
                            Manage Your Indian Property <br /> From Anywhere in the World
                        </h1>
                        <p className={styles.subtitle}>
                            <strong className={styles.highlight}>SR Agencies provides premium, end-to-end property management services in Hyderabad, Telangana</strong>
                            <br />
                            The trusted partner for NRIs.
                        </p>
                        <div className={styles.heroButtons}>
                            <Button href="/contact" variant="primary">Get Started</Button>
                            <Button href="/services" variant="outline">Our Services</Button>
                        </div>
                    </div>
                </div>
            </section>




        </main>
    );
}
