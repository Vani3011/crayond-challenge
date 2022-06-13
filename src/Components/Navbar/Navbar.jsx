import React from "react";
import './Navbar.scss'
// import SearchBar from "material-ui-search-bar";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from "@mui/material/InputBase";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Search = styled('div')(({ theme }) => ({
  padding:'3px 0px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    marginTop: "-2px",
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      fontSize:'1.5em',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '28ch',
        color:'white',
        fontWeight:'500',
        letterSpacing:'0.5px'
      },
    },
  }));
const NavBar = () =>{
return (

    <div className="main-hdr">
     <div className="nav-section">
         <div className="first-section">
             <div className="logo-div">
                 <img  className="logo" src="https://preview.keenthemes.com/metronic8/demo22/assets/media/logos/logo-demo22.png"/>
             </div>
             <div className="search-bar-div">
             <Search>
            <SearchIconWrapper>
              <SearchIcon  className="search-icon-mu"/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
             </div>
             <div className="search-icon"><SearchIcon/></div>
         </div>
         <div className="second-section">
             <div className="graph-icon">
                 <div className="graph-icon-subdiv">
             <span class="svg-icon svg-icon-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
												<rect x="8" y="9" width="3" height="10" rx="1.5" fill="white"></rect>
												<rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="white"></rect>
												<rect x="18" y="11" width="3" height="8" rx="1.5" fill="white"></rect>
												<rect x="3" y="13" width="3" height="6" rx="1.5" fill="white"></rect>
											</svg>
										</span>
                                        </div>
             </div>
             <div className="fileView-icon">
                 <div className="fileView-icon-subdiv">
             <span class="svg-icon svg-icon-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
												<path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="white"></path>
												<rect x="6" y="12" width="7" height="2" rx="1" fill="white"></rect>
												<rect x="6" y="7" width="12" height="2" rx="1" fill="white"></rect>
											</svg>
										</span>
             </div>
             </div>
             <div className="sun-icon">
                 <div className="sun-icon-subdiv">
             <WbSunnyIcon className="sun-icon-mu"/>
             </div>
             </div>
             <button className="profile-icon">
                 <div className="profile-subdiv">
                 <div className="profile-text">
                 <div className="profile-name">Max</div>
                 <div className="profile-designation">Ux Designer</div>
                 </div>
                 <div>
                     <img  className="profile-pic" src="https://preview.keenthemes.com/metronic8/demo22/assets/media/avatars/300-1.jpg" />
                 </div>
                 </div>
             </button>
             
         </div>
     </div>
     
    </div>
)
}

export default NavBar
