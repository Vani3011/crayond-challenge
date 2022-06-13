import React from "react";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./SubMenu.scss"
const Sample = () => {
  return (
    <>

      <div className="sub-menu-navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* <a class="navbar-brand" href="#">Brand</a> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="row collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav">
                <li className="col nav-item dropdown">
                  <div className="first-menu">
                    <div>
                      <div className="" href="#" data-bs-toggle="dropdown"><span className="sub-menu-text">Dashboard</span></div>
                      <span className="sub-menu-desc">Summary & Reports</span>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">e-commerce</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div> <span className="sub-menu-dropdown-innertext">Marketing</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Projects</span></a></li>
                      </ul>
                    </div>
                    {/* <div className="alignment-right-border"></div> */}
                  </div>
                </li>
                <li className="col nav-item dropdown">
                  <div className="first-menu">
                    <div>
                      <div className="" href="#" data-bs-toggle="dropdown"><span className="sub-menu-text text-active">Crafted</span></div>
                      <span className="sub-menu-desc">Pages & utilities</span>

                      <ul className="dropdown-menu multilevel">
                        <li> <a className="dropdown-item" href="#">
                          <div className="sub-menu-li-title">
                            <div className="sub-icon"><CardGiftcardIcon className="li-title-icon" /><span className="li-title-name">Pages</span></div>
                            {/* <div><ArrowForwardIosIcon className="caret-arrow-icon"/></div> */}
                          </div>
                        </a></li>
                        <li> <a className="dropdown-item" href="#">
                          <div className="sub-menu-li-title">
                            <div className="sub-icon"><PersonIcon className="li-title-icon" /><span className="li-title-name">Account</span></div>
                            <div><ArrowForwardIosIcon className="caret-arrow-icon" /></div>
                          </div>
                        </a>
                          <ul className="submenu submenu-dropdown-menu">

                            <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Overview</span></a></li>
                            <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div> <span className="sub-menu-dropdown-innertext">Blog</span></a></li>
                            <li>
                              <a className="dropdown-item multileveldrp" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Settings</span><ArrowForwardIosIcon className="caret2-arrow-icon multilevel-caret" />
                              </a>
                              <ul className="submenu-dropdown-menu third-dropdown-menu">
                                <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">e-commerce</span></a></li>
                                <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div> <span className="sub-menu-dropdown-innertext">Marketing</span></a></li>
                                <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Projects</span></a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Billing</span></a></li>
                            <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Logs</span></a></li>

                          </ul>
                        </li>
                        <li> <a className="dropdown-item" href="#">
                          <div className="sub-menu-li-title">
                            <div className="sub-icon"><FingerprintIcon className="li-title-icon" /><span className="li-title-name">Authentication</span></div>
                            {/* <div><ArrowForwardIosIcon className="caret-arrow-icon"/></div> */}
                          </div>
                        </a></li>
                        <li> <a className="dropdown-item" href="#">
                          <div className="sub-menu-li-title">
                            <div className="sub-icon"><WidgetsIcon className="li-title-icon" /><span className="li-title-name">Widgets</span></div>
                            {/* <div><ArrowForwardIosIcon className="caret-arrow-icon"/></div> */}
                          </div>
                        </a></li>
                      </ul>
                    </div>
                    {/* <div className="alignment-right-border"></div> */}
                  </div>
                </li>
                <li className="col nav-item dropdown">
                  <div className="first-menu">
                    <div>
                      <div className="" href="#" data-bs-toggle="dropdown"><span className="sub-menu-text">Apps</span></div>
                      <span className="sub-menu-desc">Starter Applications</span>
                      <ul className="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a class="dropdown-item" href="#"><div className="dot-forMenu"></div> <span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a class="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                      </ul>
                    </div>
                    {/* <div className="alignment-right-border"></div> */}
                  </div>
                </li>
                <li className="col nav-item dropdown">
                  <div className="first-menu">
                    <div>
                      <div className="" href="#" data-bs-toggle="dropdown"><span className="sub-menu-text">Resources</span></div>
                      <span className="sub-menu-desc">Docs & Layout Builder</span>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div> <span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                      </ul>
                    </div>
                    {/* <div className="alignment-right-border"></div> */}
                  </div>
                </li>
                <li className="col nav-item dropdown has-megamenu last-menu">
                  <div className="first-menu ">
                    <div>
                      <div className="" href="#" data-bs-toggle="dropdown"><span className="sub-menu-text">Mega Menu</span></div>
                      <span className="sub-menu-desc">Extended Navigation</span>
                      <ul className="dropdown-menu megamenu">
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div> <span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div> <span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>
                        <li><a className="dropdown-item" href="#"><div className="dot-forMenu"></div><span className="sub-menu-dropdown-innertext">Submenu item 1</span></a></li>

                      </ul>
                    </div>
               
                  </div>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>

    </>
  )
}
export default Sample