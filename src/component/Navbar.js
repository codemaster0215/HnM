import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = [
        'Women',
        'Men',
        'Divided',
        'Baby',
        'Kids',
        'Sport',
        'Sale'
    ];
    
    const navigate = useNavigate()
    const onCheckEnter = (event) => {
        if (event.key === "Enter") {
          navigate(`?q=${event.target.value}`);
        }
      };
    const goToLogin=()=>{
        navigate("/login")

    }

  return ( <div>
    <div class="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser}/>
       <div className="login-button">Login</div>
    </div>
    <div className="nav-section">
      <img width={70}
       src="https://1000logos.net/wp-content/uploads/2017/02/Hennes-Logo-19682.jpg"/>
    </div>

    <div className="menu-area">
        
            <ul className="menu-list">
                {menuList.map(menu=><li>{menu}</li>)}
            </ul>
        
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder="Search" onKeyPress={onCheckEnter} />
        </div>

    </div>
    <div>

    </div>
        </div>
  )
}

export default Navbar