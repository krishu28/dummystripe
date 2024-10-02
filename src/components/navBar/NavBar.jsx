import React, { useState } from 'react';
import useBrand from 'store/footer/brand/useBrand';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import logos from "../../assets/icons/logo.png";
import './NavBar.scss';
import './Navbar-media.scss';
import {Link} from "react-router-dom";
import SideNavbar from './SideNavbar';

function NavBar() {
    const [open, setOpen] = useState(false);
    const brand = useBrand((state) => state.brand);
    const logo = brand.find(br => br.type === 'logo')?.src;
    const [activeMenu, setActiveMenu] = useState(null);
    const handleMenuItemClick = () => {
        // Close the drawer when a menu item is clicked
        setOpen(false);
    };


    const toggleSubmenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // const DrawerList = (
    //     <div className="sidenav">
    //         <div className="sidenav-header">
    //             <h2>My App</h2>
    //             <Button onClick={toggleDrawer(false)}><AiOutlineClose /></Button>
    //         </div>
    //         <ul className="sidenav-list">
    //             <li className="sidenav-item">
    //                 <a href="#dashboard" onClick={toggleDrawer(false)}>Dashboard</a>
    //             </li>
    //             <li className="sidenav-item">
    //                 <a href="#user-group" onClick={toggleDrawer(false)}>User Group</a>
    //             </li>
    //             <li className="sidenav-item has-submenu">
    //                 <a href="#advanced" onClick={(e) => { e.preventDefault(); toggleSubmenu('advanced'); }} className="submenu-toggle">
    //                     Advanced <span className={`arrow ${activeMenu === 'advanced' ? 'active' : ''}`}>▼</span>
    //                 </a>
    //                 {activeMenu === 'advanced' && (
    //                     <ul className="submenu">
    //                         <li><a href="#geo" onClick={toggleDrawer(false)}>Geo</a></li>
    //                         <li><a href="#devices" onClick={toggleDrawer(false)}>Devices</a></li>
    //                         <li><a href="#loyalty" onClick={toggleDrawer(false)}>Loyalty</a></li>
    //                         <li><a href="#visit-depth" onClick={toggleDrawer(false)}>Visit Depth</a></li>
    //                     </ul>
    //                 )}
    //             </li>
    //             <li className="sidenav-item has-submenu">
    //                 <div onClick={(e) => { e.preventDefault(); toggleSubmenu('settings'); }} className="submenu-toggle">
    //                     Settings <span className={`arrow ${activeMenu === 'settings' ? 'active' : ''}`}>▼</span>
    //                 </div>
    //                 {activeMenu === 'settings' && (
    //                     <ul className="submenu" style={{zIndex:"999importrant"}}>
    //                         <li><a href="#applications" onClick={toggleDrawer(false)}>Applications</a></li>
    //                         <li><a href="#channels" onClick={toggleDrawer(false)}>Channels</a></li>
    //                         <li><a href="#versions" onClick={toggleDrawer(false)}>Versions</a></li>
    //                         <li className="has-submenu">
    //                             <a href="#custom-action" onClick={(e) => { e.preventDefault(); toggleSubmenu('custom-action'); }} className="submenu-toggle">
    //                                 Custom Action <span className={`arrow ${activeMenu === 'custom-action' ? 'active' : ''}`}>▼</span>
    //                             </a>
    //                             {activeMenu === 'custom-action' && (
    //                                 <ul className="submenu">
    //                                     <li><a href="#action-name" onClick={toggleDrawer(false)}>Action Name</a></li>
    //                                     <li><a href="#action-params" onClick={toggleDrawer(false)}>Action Params</a></li>
    //                                 </ul>
    //                             )}
    //                         </li>
    //                     </ul>
    //                 )}
    //             </li>
    //         </ul>
    //     </div>
    // );

    return (
        <nav className="navbars" style={{marginTop:"1%"}} >
            <div className="logo">
                <Link to="/">
                <img src={logos} alt="Logo" />
                </Link>
            </div>
            <Button className="hamburger-icon" style={{ color: "white", fontSize: "xx-large" }} onClick={toggleDrawer(true)}>
                <RxHamburgerMenu />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)} style={{backgorunColor:"#D6518C"}}>
                <SideNavbar onMenuItemClick={handleMenuItemClick} />
            </Drawer>
            <div className="links-media">
                <ul className="nav-list-media">
                    <li className="dropdown">
                        <Link to="/" className='prod'>Home</Link>
                    </li>
                    <li className="dropdown">
                        <Link to="/about" className='prod'>About</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/mission">Mission & Vision</Link></li>
                            <li><Link to="/team">Team Profile</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="/solutions" className='prod'>Services</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/product1">Chargeback & Fraud Management</Link></li>
                            <li><Link to="/product2">Payment Processing Services</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <Link to="/merchants" className='prod'>Merchants</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/product1">Low Risk Merchant Services</Link></li>
                            <li><Link to="/product2">High Risk Merchant Services</Link></li>
                            <li><Link to="/product3">Off-Shore Merchant Services</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                    <Link to="/blog" className='prod'>Blog</Link>
                    </li>
                   
                </ul>
            </div>
            <div className="sign-in">
             <Link to="/login">   <button>LogIn</button></Link>
            </div>
        </nav>
    );
}

export default NavBar;
