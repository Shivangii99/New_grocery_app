import React, {useRef} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import '../Styles/nav.css'

function Navbar () {
    const navRef = useRef();

    const showBtn=()=>{
        navRef.current.classList.toggle(
          'show-responsive'
        );
        console.log("Clicked");
    };
  return (
    <div className='nav-contain'>
      <h2>LOGO</h2>
      <nav ref={navRef}>
        <a href='#'>Home</a>
        <a href='#'>Deals</a>
        <a href='#'>Categories</a>
        <a href='#'>About us</a>
        <CloseIcon className='close-btn nav-btn' onClick={showBtn}></CloseIcon>
      </nav>
      <div className='btn'>
        <MenuIcon className=' nav-btn menu-btn' onClick={showBtn}></MenuIcon>
        <PersonIcon className='nav-btn'></PersonIcon>
        <WbSunnyIcon className='nav-btn'></WbSunnyIcon>
      </div>
        
    </div>
  )
}

export default Navbar
