import styles from './projectList.module.scss';
import ProjectPreview from "./ProjectPreview";

export default function ProjectList({ data, onToggleModal }) {
    return (
        <section id='portofolio'>
            <div className="container">
                    <small>Featured Works.</small>
                    <div className={styles.projectsList}>
                        {data && data.map(card => card.isVisible && <ProjectPreview key={card.id} card={card} onToggleModal={onToggleModal} />)}
                    </div>
            </div>
        </section>
    );
}