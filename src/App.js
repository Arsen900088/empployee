import Header from './components/header/Header';
import Section from './components/section/Section';
import Main from './components/main/Main'
import Footer from './components/footer/Footer'


import styles from './App.module.scss';
import { useState } from 'react';

function App() {
  const [employeeList, setEmployeeList] = useState([
    {
      name: 'Aram',
      salary: 500,
      bonus: false,
      levelUp: false,
      id: 1
    },
    {
      name: 'Arm',
      salary: 500,
      bonus: false,
      levelUp: false,
      id: 2
    },
    {
      name: 'Ar',
      salary: 500,
      bonus: false,
      levelUp: false,
      id:3
    }
  ])

  const deleteEmployee = (id)=> {
    setEmployeeList(employeeList.filter(item => item.id !== id))
  }

  return (
    <div className={styles.App}>
      <Header employeeCount={employeeList.length}/>
      <Section />
      <Main employeeList={employeeList}  deleteEmployee={deleteEmployee}/>
      <Footer />
    </div>
  );
}

export default App;
