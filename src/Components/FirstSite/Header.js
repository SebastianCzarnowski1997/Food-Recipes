import React, { useEffect } from "react"
import {Link} from "react-router-dom"




const Header = ({ search, setSearch, clicked, setClicked, requestRecipe }) => {
    
    const serachinput = (e) => {
        setSearch(e.target.value)
    }

    
    const btnclicked = (e) => {
        e.preventDefault()
        setClicked(search)
    }

    useEffect(() => {
        requestRecipe()
    }, [clicked])



    return (
        <div className="header">
            <div className="meals">
                <i className="fas fa-utensils"></i>
                <div className="wrapper">
                    <div className="input">
                        <input type="text" value={search} onChange={serachinput} placeholder="Choose your food, ex. chicken"/>
                    </div>
                </div>
                <button className="btn" type="submit" onClick={btnclicked}><i className="fas fa-search"></i></button>
            </div>
            <div className="menu">
                <ul className="manuul">
                    <Link className="link" to="/">
                        <li><a href="">Start</a></li>
                        </Link>
                    <Link className="link" to="/createbucket">
                        <li><a href="">Shop list</a></li>
                    </Link>
                    <Link className="link" to="/creatediet">
                        <li><a href="">Create diet</a></li>
                    </Link>
                </ul>
            </div>
        </div>
    )

}

















export default Header
