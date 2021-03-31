import React from "react"




const Meal = ({ title, calories, image, ingredients }) => {
    return (
        <div className="product">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ ingredient.text }</li>
                ))}
            </ol>
            <img className="imageMeals" src={image} alt="" />
            <p>{ `kcal: ${Math.floor(calories)}` }</p>
            
        </div>
        
    )
}
export default Meal