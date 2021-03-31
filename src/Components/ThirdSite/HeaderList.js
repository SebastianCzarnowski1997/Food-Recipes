import React from "react"
import {Link} from "react-router-dom"



const HeaderList = () => {
    return (
        <div className="header mainHeader">
            <div className="meals mainMeals">
                <i class="fas fa-utensils opacity"></i>
                <div className="wrapper">
                </div>
            </div>
            <div className="menu mainMenu">
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












export default HeaderList