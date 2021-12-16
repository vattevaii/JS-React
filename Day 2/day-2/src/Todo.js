import { useState } from "react";
import ListToDo from './ListToDo';
import './ToDo.css'

function ToDo() {
   const [dummy, setDummy] = useState(false);
   const [todo, updateToDo] = useState([{ task: "This one", done: true }, { task: "Another one", done: false }, { task: "Another another one", done: false }]);
   const markDone = (i) => {
      console.log('I')
      let items = todo;
      const item = items[i]
      items[i] = { ...item, done: true };
      updateToDo(items)
      setDummy(!dummy);
      console.log(todo);
   }
   const deleteItem = (i) => {
      let items = todo;
      items.splice(i, 1);
      updateToDo(items)
      setDummy(!dummy);
      console.log(todo);
   }
   const [inp, setInp] = useState('');
   const submitHandler = (e) => {
      if (e.code === "Enter") //ENTER
      {
         updateToDo((items) => [...items, { task: inp, done: false }]);
         setInp('');
      }
   }
   const inputHandler = (e) => {
      setInp(e.target.value);
   }
   // useEffect(() => { console.log("rerender"); }, [todo])
   return (
      <div style={{ fontSize: "1.5rem" }}>
         <input type="text" placeholder="Type in a task..." value={inp} onChange={inputHandler} onKeyPress={submitHandler} />
         <p>{!!inp && "Press Enter to add the item to the ToDo List"}</p>
         <ul>{
            todo.map((todoitem, index) => (
               // <><li>{'' + todoitem.done}</li>
               <ListToDo key={index + ',' + todoitem.done}
                  done={todoitem.done}
                  task={todoitem.task}
                  index={index}
                  markDone={markDone}
                  remove={deleteItem} />))
         }</ul>
      </div>
   )
}

export default ToDo;