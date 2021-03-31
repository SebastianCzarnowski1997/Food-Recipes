 import React, {useState, useEffect} from "react"





const LossDiet = ({ title, meal }) => {

    const [imageUrl, setImageUrl] = useState("")
    
     const requestImage = () => {
    fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=e6eefed3732e4933a9ad691098d84c01&includeNutrition=false`)
      .then((response3) => response3.json())
      .then((data3) => {
        setImageUrl(data3.image)
        
      })
      .catch(() => {
        console.log('error')
      })
    }


       useEffect(() => {
           requestImage()
    }, [meal.id])


    return (
        <div className="nutrientsContainer">
            <h1>{title}</h1>
            <img src={imageUrl} alt="" />
            <p>{`Ready in ${meal.readyInMinutes} minutes`}</p>
            <a href={meal.sourceUrl}>Click to see recipe</a>
            </div>
       
    )

} 


 export default LossDiet


