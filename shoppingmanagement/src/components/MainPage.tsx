import { Link } from "react-router-dom";


const MainPage=()=>{


    return(
        <div className="text-center">
<h1 className="text-center"> Hello</h1>
<Link to="/emp"> Employess</Link>
<Link to="/cust"> Customers</Link>
<Link to="/prod"> Products</Link>

                    
        </div>
    )
}

export default MainPage;