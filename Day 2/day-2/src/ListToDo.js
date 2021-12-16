import { useEffect } from 'react';
import './ToDo.css'
const ListToDo = ({ done, task, index, markDone, remove }) => {
   useEffect(() => {
      console.log("rerendre");
   }, [done])
   return (
      <li key={done} className={done ? 'done' : ''}
         onDoubleClick={() => markDone(index)}>
         - {task}
         <span><button onClick={() => { remove(index) }}>{done ? 'Remove' : 'Delete'}</button></span>
      </li>
   )
}
export default ListToDo;