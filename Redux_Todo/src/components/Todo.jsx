import { useSelector, useDispatch } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    let handleDelete =(id)=>{
        console.log("delete", id);
        dispatch(deleteTodo(id));
    }
    return(
        <>
            <AddForm/>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task} &nbsp; &nbsp; <button onClick={()=> handleDelete(todo.id)}>delete</button></li>   
                ))}
            </ul>
        </>
    )
}