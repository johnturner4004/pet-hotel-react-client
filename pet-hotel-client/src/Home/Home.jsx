import {Link} from 'react-router-dom';


export default function Home() {
  return(
    <>
    <h1>Welcome to Pet Hotel</h1>
    <div className="nav">
      <Link to="/addPet">
        <h2>Add a Pet</h2>
      </Link>
      <Link to="/addOwner">
        <h2>Add Owner</h2>
      </Link>
    </div>
    </>
  )
}