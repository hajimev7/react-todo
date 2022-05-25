import TodoList from "./TodoList";
import {useState,useRef} from "react"
import {v4 as uuidv4} from "uuid"

function App() {
// eslint-disable-next-line
const [todos,setTodos] = useState([])

const todonameRef=useRef()

const handleAddTodo=()=>{
  //タスクを追加する
  console.log(todonameRef.current.value)
  const name=todonameRef.current.value
  if (name==="") return
  setTodos((prevTodos)=>{
    return[...prevTodos,{id:uuidv4(),name:name,completed:false}]
  })
  todonameRef.current.value=null
}

const toggleTodo=(id)=>{
  const newTodos=[...todos]
  const todo=newTodos.find((todo)=>todo.id===id)
  todo.completed=!todo.completed
  setTodos(newTodos)
}

const handleClear=()=>{
  const newTodos=todos.filter((todo)=>!todo.completed);
  setTodos(newTodos)
}

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todonameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo)=>!todo.completed).length}</div>
    </div>
  );
}

export default App;
