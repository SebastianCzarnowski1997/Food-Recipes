import React from "react"




const Todo = ({ grocerie, groceries, setGroceries}) => {
    


    const removeButtonFunction = (e) => {
        e.preventDefault()
        setGroceries(groceries.filter(onegrocerie => onegrocerie.id !== grocerie.id))
    }

    const selectButton = (e) => {
        e.preventDefault()
        setGroceries(groceries.map((onegrocerie) => {
            if (onegrocerie.id === grocerie.id) {
                return {
                    ...onegrocerie, completed: !onegrocerie.completed
                }
               
            }
             return onegrocerie
        }))
       
    }

    return (
        <div>
             <div className="todo">
                <li className={`todo-item ${grocerie.completed ? "completed" : ""}`}>{grocerie.text}</li>
                <li className="quantity">{grocerie.quantitys}</li>
                <button className="complete-btn" onClick={selectButton}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={removeButtonFunction}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
        </div>
   
    )
}


export default Todo