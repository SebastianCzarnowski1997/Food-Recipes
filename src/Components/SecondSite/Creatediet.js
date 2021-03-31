import React from "react"
import LossDiet from "./LossDiet"




const CreateDiet = ({ losMeal, nutrients }) => {
    

    
    return (
        <div className="productDiet">
            <section className="threeMeals">
                <h1>{`Today's number of calories is ${nutrients.calories} for this day`}</h1>
                <ul>
                    <li>{`fat: ${nutrients.fat}`}</li>
                    <li>{`carbohydrates:  ${nutrients.carbohydrates}`}</li>
                    <li>{`protein: ${nutrients.protein}`}</li> 
                 </ul> 
            </section>
            <section className="dailyNutrients">
                {losMeal.map(meal => (
                    <LossDiet key={meal.id} title={meal.title} meal={meal} losMeal={losMeal} />
                ))}
            </section>
            </div>
       

        
    )
}


export default CreateDiet 

