import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({setUser, user}){
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
    return(
      // core data type
        <nav>
        <Link class='nav-link' to='/routineCycles'>routine cycle List</Link>
        &nbsp; | &nbsp;
        <Link class='nav-link' to='/'>Home</Link>
        &nbsp; | &nbsp;
        <Link class='nav-link' to='/routineCycles/new'>Add a Custom routine cycle</Link>
        &nbsp;| &nbsp;
        <span>{user.name}</span>
        &nbsp;| &nbsp;
        <Link class='nav-link' to='' onClick={handleLogOut}>Log Out</Link>
        &nbsp;|  &nbsp;

        {/* secondary data type */}
        <Link class='nav-link' to='/routines'>routine per day</Link>
        &nbsp; | &nbsp;
        <Link class='nav-link' to='/routines/new'>Add a Custom routine day</Link>

      </nav>
    );
    
}