import React from "react"
import Todo from "./Todo"




const Todolist = ({todoInput, setTodoInput, groceries, setGroceries, quantity, setQuantity, setCompleted, filteredGroceries}) => {

    const onType = (e) => {
        setTodoInput(e.target.value)
    }


    const onQuan = (e) => {
        setQuantity(e.target.value)
    }
   

    const onClick = (e) => {
        e.preventDefault()
        setGroceries([
            ...groceries,
            {
                completed: false,
                text: todoInput,
                quantitys: quantity,
                id: Math.floor(Math.random() * 1000)
            }
        ])
        setTodoInput("")
        setQuantity("")
    }

    const changeStatus = (e) => {
        setCompleted(e.target.value)

    }



    return (
         <div>
        <header className="headerTodo">
             <h1>Your groceries list</h1>
        </header>
            <form className="formTodo">
                <div className="chooseTodo">
                <input type="text" className="todo-input" value={todoInput} onChange={onType} placeholder="ex. Chicken brest" />
                <input type="text" className="todo-input-second" value={quantity} onChange={onQuan} placeholder="15g"/>
            <button className="todo-button" type="submit" onClick={onClick}>
             <i className="fas fa-plus-square"></i>
                    </button>
                 </div>
        <div className="selectTodo">
        <select name="todos" className="filter-todo" onChange={changeStatus}>
          <option value="all">All</option>
          <option value="bought">bought</option>
          <option value="to buy">to buy</option>
        </select>
      </div>
     </form>
     <div className="todo-container">
                <ul className="todo-list">
                    {filteredGroceries.map(grocerie => (
                        <Todo 
                        key={grocerie.id} 
                        grocerie={grocerie} 
                        groceries={groceries}
                        setGroceries={setGroceries}
                         />
                    ))}
                 </ul>
         </div>
    </div>
    );
}



export default Todolist