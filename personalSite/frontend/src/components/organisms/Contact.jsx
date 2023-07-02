import styles from './contact.module.scss';
import mapIcon from '../../assets/icons/map.svg';

export default function Contact() {
    return (
        <section>
            <div className="container">
                <small>Say Hello!</small>
                <div className={styles.contact}>
                    <div className={styles.contactDetails}>
                        <div className="icon-container">
                            <img src={mapIcon} />
                        </div>
                        <h3>Bucharest, Romania</h3>
                        <h4>+40 770 622 758</h4>
                        <p>
                            077105
                            <br />
                            Glina, Soseaua Libertatii 320A
                        </p>
                    </div>
                    <div className={styles.contactForm}>
                        <form>
                            <div className='input-container'>
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className='input-container'>
                                <input type="text" placeholder='e-mail' />
                            </div>
                            <div className='input-container'>
                                <textarea placeholder='Your Message' rows="1"></textarea>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}