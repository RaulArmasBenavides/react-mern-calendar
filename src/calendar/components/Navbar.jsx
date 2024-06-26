import { useAuthStore } from "../../hooks/useAuthStore"
// import {SettingsModal} from "../modals/SettingsModal";
import { useState ,useRef ,useEffect} from 'react';
export const Navbar = () => {

  const { startLogout, user } = useAuthStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
    <span className="navbar-brand">
      <i className="fas fa-calendar-alt"></i>
      &nbsp;
      {user.name}
    </span>

    <div className="dropdown" ref={dropdownRef}>
      <button onClick={handleDropdownToggle} className="btn btn-secondary">
        <i className="fas fa-cog"></i>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <button className="dropdown-item">Perfil</button>
          <button className="dropdown-item">Configuración</button>
          <button className="dropdown-item">Ayuda</button>
        </div>
      )}
    </div>

    <button 
      className="btn btn-outline-danger"
      onClick={startLogout}
    >
      <i className="fas fa-sign-out-alt"></i>
      &nbsp;
      <span>Salir</span>
    </button>
  </div>
  )
}