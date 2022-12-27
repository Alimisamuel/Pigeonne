import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import Drawers from './Drawer'
// import '../styles/Navbar.css'
import '../styles/index.css'
import Logo from '../img/logo-black.png'

const NewNav = () => {
  const [value, setValue] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <AppBar className={color ? "appbar appbar-bg" : "appbar"} sx={{ background: '#f0f0f0' }}>
        <Toolbar sx={{ margin: '0 auto', width: '89%' }}>
          <Link to="/">
            <img src={Logo} alt="Logo" width={120} />
          </Link>
          {isMatch ? (
            <>
              <Typography></Typography>
              <Drawers />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 'auto' }}
                value={value}
                onChange={(e, value) => setValue(value)}
             
                className="color"
              >
                <Tab label="About" sx={{color:'#000', fontWeight:'bolder', fontFamily:'pangram'}}/>
                {/* <Link
                  to="/about"
                  style={{ textDecoration: 'none', color: 'black' }}
                  exact
                  activeclassname="active"
                >
              
                </Link> */}
               
              </Tabs>
              <Link
                to="/donate"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Button
                  variant="outlined"
                  sx={{
                  
                     px:4,
                     color:'#000',
                     borderRadius:'0px',
                     border:'1px solid #000'
                  }}
                >
                  Login
                </Button>
              </Link>
              {/* <Link to='/Donate' exact activeclassname='active'>    <button className="buttons">Donate</button></Link> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NewNav
