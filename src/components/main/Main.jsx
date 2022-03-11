import styles from './main.module.scss';
import klorImg from './images/klor1.jpg'
import zibilImg from './images/zibil2.jpg'
import astxImgActiv from './images/astx3.jpg'
import astxImg from './images/voidStar.jpeg'
import Employee from './employee/Employee'

const Main = ({employeeList, deleteEmployee}) => {
    return (
        <ul className={styles.employeeList}>
            {employeeList.map(item => {
                return(<Employee 
                    key={item.id} 
                    name={item.name} 
                    salary={item.salary} 
                    bonus={item.bonus} 
                    id={item.id} 
                    levelUp={item.levelUp} 
                    deleteEmployee={deleteEmployee}
                />)
            })}
        </ul>
    )
}

export default Main
