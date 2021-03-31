import './App.css';
import React, { useState, useEffect } from "react"
import Header from "./Components/FirstSite/Header"
import Main from "./Components/FirstSite/Main"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Todolist from "./Components/ThirdSite/Todolist"
import Creatediet from "./Components/SecondSite/Creatediet"
import HeaderDiet from "./Components/SecondSite/HeaderDiet"
import HeaderList from "./Components/ThirdSite/HeaderList"


function App() {

  // Recipe keys
  const APP_ID_RECIPE = "506bdf1e";
  const APP_ID_RECIPE_KEY = "d4dc1d171ee00f08fe99310733157e5a"
  // Meals to prepare
  const [meals, setMeals] = useState([])
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState("chicken");
  // Creating three meals per day
  const [losMeal, setlosMeal] = useState([])
  const [nutrients, setNutrients] = useState(null)
  const [calories, setCalories] = useState("1200")
  const [reload, setReload] = useState("1200")
  // Setting images for loss meals
  const [image, setImage] = useState("")
  // Shopping list 
  const [todoInput, setTodoInput] = useState("")
  const [quantity, setQuantity] = useState("")
  const [groceries, setGroceries] = useState([])
  const [completed, setCompleted] = useState("all");
  const [filteredGroceries, setFilteredGroceries] = useState([])
  

// Function that get starting recipes
  
  useEffect(() => {
    requestRecipe()
    requestFood()
  }, [])

  // Get the data from localstorage

  useEffect(() => {
    const data = localStorage.getItem('grocerys')
    if (data) {
      setGroceries(JSON.parse(data))
    }
  }, [])

  // Saving data in localstorage
  
  useEffect(() => {
    localStorage.setItem("grocerys", JSON.stringify(groceries))
  }, [groceries])

  // Select between to buy and bought products

  useEffect(() => {
    filter()
  }, [completed, groceries])



    const filter = () => {
    if (completed === "bought") {
      setFilteredGroceries(groceries.filter(groce => groce.completed === true))

    } else if (completed === "to buy") {
      setFilteredGroceries(groceries.filter(groce => groce.completed === false))

    } else {
      setFilteredGroceries(groceries) 

    }
    }
  
  // Request API  for recipes

  const requestRecipe = async () => {
    const response1 = await fetch(`https://api.edamam.com/search?q=${clicked}&app_id=${APP_ID_RECIPE}&app_key=${APP_ID_RECIPE_KEY}`);
    const dataRecipe = await response1.json();
    setMeals(dataRecipe.hits);
  }

  // Request API for three meals a day
   const requestFood = () => {
    fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=e6eefed3732e4933a9ad691098d84c01&timeFrame=day&targetCalories=${reload}`)
      .then((response) => response.json())
      .then((data1) => {
        setlosMeal(data1.meals)
        setNutrients(data1.nutrients)
      })
      .catch(() => {
        console.log('error')
      })
   }
  
  // Request API for image 
  const requestImage = () => {
    fetch(`https://api.spoonacular.com/recipes/${losMeal.id}/information?apiKey=e6eefed3732e4933a9ad691098d84c01&includeNutrition=false`)
      .then((response) => response.json())
      .then((data3) => {
        setImage(data3.image)
        
      })
      .catch(() => {
        console.log('error')
      })
  }




  return (
    <Router>
    <div className="App">
        
        <Switch>
          <Route path="/" exact component={Main}>
            <Header search={search} setSearch={setSearch} setClicked={setClicked} requestRecipe={requestRecipe} />
            <Main meals={meals} setMeals={setMeals} />
          </Route>
          <Route path="/createbucket" component={Todolist}>
            <HeaderList />
            <Todolist
              todoInput={todoInput}
              setTodoInput={setTodoInput}
               groceries={groceries}
              setGroceries={setGroceries}
              quantity={quantity}
              setQuantity={setQuantity}
              setCompleted={setCompleted}
              filteredGroceries={filteredGroceries}

            />
          </Route>
          <Route path="/creatediet" component={Creatediet}>
            <HeaderDiet 
            losMeal={losMeal} 
            setlosMeal={setlosMeal} 
            calories={calories} 
            setCalories={setCalories} 
            reload={reload} 
            setReload={setReload} 
              requestFood={requestFood}
             
            />

            <Creatediet 
            requestFood={requestFood} 
            reload={reload} 
            losMeal={losMeal} 
            setlosMeal={setlosMeal} 
            calories={calories}
            nutrients={nutrients} 
            setNutrients={setNutrients}
            image={image}
              setImage={setImage}
              requestImage={requestImage}
              
            />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
