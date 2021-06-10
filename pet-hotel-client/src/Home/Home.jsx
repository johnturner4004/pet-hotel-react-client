import {Link} from 'react-router-dom';


export default function Home() {
  return(
    <>
    <h1>Welcome to Pet Hotel</h1>
    <div className="nav">
      <Link to="/pet-list">
        <h2>View Pets</h2>
      </Link>
      <Link to="/addOwner">
        <h2>Manage Owner</h2>
      </Link>
    </div>
    </>
  )
}