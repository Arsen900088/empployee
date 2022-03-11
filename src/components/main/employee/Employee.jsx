const Employee = ({name,salary,bonus,levelUp,id, deleteEmployee}) => {
    return(
         <li>
             <span>{name}</span>
             <span>{salary}</span>
             <button onClick={() => deleteEmployee(id)}>delete</button>
         </li>
    )
   
}
export default Employee;