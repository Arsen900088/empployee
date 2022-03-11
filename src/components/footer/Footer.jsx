import styles from './footer.module.scss';

const Footer = () => {
    return (
    <footer>
        <div id={styles.text_footera}>
            <h6>Добавьте нового сотрудника</h6>
        </div>
        <form id={styles.input_footera}>
            <input type="text" id={styles.kak_zovut} placeholder="Как его зовут?" minLength="3" />
            <input type="number" id={styles.vvod_zarplat} placeholder="З/П в $?" min="100" step="10" />
            <button id={styles.dobavit}>Добавить</button>
        </form>
    </footer>
    )
}

export default Footer