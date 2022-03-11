import styles from './header.module.scss';
import logo from './images/nkar1.jpg'

const Header = ({employeeCount}) => {
    return (
        <header id={styles.header_all}>
            <div id={styles.header_inside1}>
                <img src={logo} alt="ikon of molekul" />
            </div>
            <div id={styles.header_inside2}>
                <h1>HADES</h1>
                <h2>CORPORATION</h2>
            </div>
            <div id={styles.header_inside3}>
                <h3>Учет сотрудников в компании</h3>
                <h4 id={styles.employeeCount}>
                    Общее число сотрудников:
                     {employeeCount}
                </h4>
                <h5 id={styles.employeeCountBonus}>
                    Премию получать: 
                    {/* {bonusCount} */}
                </h5>
            </div>
        </header>

    )
}

export default Header