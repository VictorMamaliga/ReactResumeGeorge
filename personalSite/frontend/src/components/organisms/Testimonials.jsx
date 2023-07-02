import Slider from 'react-slick';

import styles from './testimonials.module.scss';

const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function Testimonials()  {
    return (
        <section>
            <div className="container">
                <div className={styles.testimonials}>
                    <Slider {...settings}>
                        <div className={styles.testimonialsItem}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque eum quod. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatura</p>
                            <h3>Titlu smecher dada</h3>
                            <span>job description</span>
                        </div>
                        <div className={styles.testimonialsItem}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque eum quod. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatura</p>
                            <h3>Titlu smecher dada</h3>
                            <span>job description</span>
                        </div>
                        <div className={styles.testimonialsItem}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque eum quod. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatura</p>
                            <h3>Titlu smecher dada</h3>
                            <span>job description</span>
                        </div>
                        <div className={styles.testimonialsItem}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque eum quod. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatura</p>
                            <h3>Titlu smecher dada</h3>
                            <span>job description</span>
                        </div>
                        <div className={styles.testimonialsItem}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque eum quod. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatura</p>
                            <h3>Titlu smecher dada</h3>
                            <span>job description</span>
                        </div>
                        <div className={styles.testimonialsItem}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur atque eum quod. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatura</p>
                            <h3>Titlu smecher dada</h3>
                            <span>job description</span>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
}