import { NavLink, useRouteError } from "react-router-dom"

function Errorpage(){
   const error = useRouteError();
  console.log(error);
  

    return(
        <>
        <div className="error">
            <h1>OOps! an error Occured.</h1>

            <h2>{error && <p>{error.data}</p>}</h2>
            <h2>{error && <p>Error Status : ` {error.status} `</p>}</h2>
            <NavLink to='/'>
            <button>Go Home</button>
            </NavLink>
        </div>
        
        </>
    )
}
export default Errorpage