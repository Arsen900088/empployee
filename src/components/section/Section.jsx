import styles from './section.module.scss';

const Section = () => {
    return (
        <section id={styles.general_naiti_sotrudnika}>
            <input type="text" id={styles.naiti_sotrudnika} placeholder="Найти сотрудника" />
            <div id={styles.vse_sotrudniki}>
                <button id={styles.allEmployees}>
                    Все сотрудники
                </button>
                <button id={styles.levelUpEmployees}>
                    На повышение
                </button>
                <button id={styles.overThousandEmployees}>
                    З/П больше 1000$
                </button>
            </div>
        </section>
    )
}

export default Section