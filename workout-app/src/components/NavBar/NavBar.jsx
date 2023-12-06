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
        <Link class='nav-link' to='/'>Home</Link>
        &nbsp; | &nbsp;
        <span>{user.name}</span>
        &nbsp;| &nbsp;
        <Link class='nav-link' to='' onClick={handleLogOut}>Log Out</Link>
        &nbsp;|  &nbsp;

        {/* secondary data type */}
        <Link class='nav-link' to='/routines'>routines</Link>
        &nbsp; | &nbsp;
        <Link class='nav-link' to='/routines/new'>add routine</Link>
        &nbsp; | &nbsp;
        {/* food data below */}
        <Link class='nav-link' to='/foods'>foods</Link>
        &nbsp; | &nbsp;
        <Link class='nav-link' to='/foods/new'>Add food</Link>

      </nav>
    );
    
}