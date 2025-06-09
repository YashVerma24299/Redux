import { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from '../features/todo/todoSlice'

export default function AddForm(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    let handleTask =(e)=>{
        setTask(e.target.value);
    }

    let submitHandler = (e)=>{
        e.preventDefault();
        console.log(task)
        dispatch(addTodo(task));
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="enter task" onChange={handleTask}/>
                <button>Add Task</button>
            </form>
        </>
    )
}