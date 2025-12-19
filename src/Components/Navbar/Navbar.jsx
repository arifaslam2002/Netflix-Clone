import { useAuth } from '../../Context/AuthContext';
import { useTheme } from '../../Context/ThemeContext';
import './Navbar.css'
import { FaSun, FaMoon,FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  const {theme,toggleTheme} =useTheme();
  const {logout} =useAuth();
  return (
    <div className='nav-section'>
    <p className='logo'>DebugMedia</p>
    <div className="nav-actions">
      <button className="icon-btn" onClick={toggleTheme}>
          {theme === "light"?<FaMoon size={20} />:<FaSun size={20} />}
        </button>
        <button className="logout-btn" onClick={logout}>
          <FaUserCircle size={22} />
          <span>Logout</span>
        </button>
    </div>
    </div>

  )
}

export default Navbar
