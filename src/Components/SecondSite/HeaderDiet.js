import React, { useEffect } from "react"
import {Link} from "react-router-dom"




const HeaderDiet = ({ calories, setCalories, reload, setReload, requestFood}) => {


    const serachformeals = (e) => {
        setCalories(e.target.value)

    }
    const btnSearchDiet = (e) => {
        e.preventDefault()
        setReload(calories)
    }

    useEffect(() => {
        requestFood()
    }, [reload])

    return (
        <div className="header">
            <div className="meals">
                <i class="fas fa-utensils"></i>
                <div className="wrapper">
                    <div className="input">
                        <input type="number" value={calories} onChange={serachformeals} placeholder="Enter calories, ex.2000"/>
                    </div>
                </div>
                <button className="btn" type="submit" onClick={btnSearchDiet}> <i className="fas fa-search"></i></button>
            </div>
            <div className="menu">
                <ul className="manuul">
                    <Link className="link" to="/">
                        <li><a href="">Start</a></li>
                        </Link>
                    <Link className="link" to="/createbucket">
                        <li><a href="">Create bucket</a></li>
                    </Link>
                    <Link className="link" to="/creatediet">
                        <li><a href="">Create diet</a></li>
                    </Link>
                </ul>
            </div>
        </div>
    )

}

export default HeaderDiet