import { useEffect, useRef } from 'react';

import styles from './header.module.scss';
import kittenImg from '../../assets/kitten.jpg';

export default function Header({onSidebarIsOpen}) {
    const headerRef = useRef(null);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            headerRef.current.style.backgroundColor = 'black';
            headerRef.current.style.padding = '2rem 0';
        } else {
            headerRef.current.style.backgroundColor = 'transparent';
            headerRef.current.style.padding = '1.5rem 0';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={styles.header}>
            <div ref={headerRef} className={styles.headerTop}>
                <div className="container">
                    <a href="" className="name">George</a>
                    <div className={styles.headerHamburger} onClick={onSidebarIsOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div id='home' className={styles.headerWelcome}>
                <div className={styles.headerSplit}>
                    <h1>We are a fully integrated <span>Software development</span> tool</h1>
                </div>
                <div className={styles.headerSplit}>
                    <img src={kittenImg} alt='' />
                </div>
            </div>
            <div className={styles.headerDecorations}>
                <div>
                    <h3>01</h3>
                    <h4>Mie imi plac ciresele amare</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <h3>02</h3>
                    <h4>Mie imi plac ananasurile</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <h3>03</h3>
                    <h4>Mie imi plac castravetii</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <h3>04</h3>
                    <h4>Mie imi plac ciresele ducli</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <h3>05</h3>
                    <h4>Mie imi plac pepenii</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <h3>06</h3>
                    <h4>Mie imi plac de dabuleni</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </header>
    );
}