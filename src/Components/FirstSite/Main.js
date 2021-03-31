import React from "react"
import Meal from "./Meal"

// Mapping Meal component to React component 

const Main = ({ meals }) => {
    return (
        <div className="home">
            <img className="homeimg" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
            <div className="products">
                {meals.map(meal => (
                    <Meal key={meal.recipe.label} title={meal.recipe.label} calories={meal.recipe.calories} image={meal.recipe.image} ingredients={meal.recipe.ingredients}/>
                ))} 
            </div>
        </div>
        
    )
}



export default Main