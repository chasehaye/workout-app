import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({setUser, user}){
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
    return(
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
        <Link class='nav-link' to='/routines'>testing ground routine</Link>
      </nav>
    );
    
}