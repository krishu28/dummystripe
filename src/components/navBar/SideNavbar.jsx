import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logos from "../../assets/icons/logo.png";
import "./Sidebar.scss";
import { Link } from 'react-router-dom';

export default function SideNavbar({ onMenuItemClick }) {
    return (
        <Sidebar className='sidebar-bg'>
            <div className="logo">
                <img src={logos} alt="Logo" />
            </div>
            <Menu transitionDuration={300}>
                <MenuItem onClick={onMenuItemClick} component={<Link to="/" />}>
                    Home 
                </MenuItem>
                <SubMenu label="About">
                    <MenuItem onClick={onMenuItemClick}>
                        <Link to="/mission-vision"> Mission & Vision </Link>
                    </MenuItem>
                    <MenuItem onClick={onMenuItemClick}>
                        <Link to="/team-profile"> Team Profile </Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu label="Services">
                    <MenuItem onClick={onMenuItemClick}>
                        <Link to="/chargeback-fraud"> Chargeback & Fraud Management </Link>
                    </MenuItem>
                    <MenuItem onClick={onMenuItemClick}>
                        <Link to="/payment-processing"> Payment Processing Services </Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu label="Merchants">
                    <MenuItem onClick={onMenuItemClick}>
                        <Link to="/low-risk-merchants"> Low Risk Merchant Services </Link>
                    </MenuItem>
                    <MenuItem onClick={onMenuItemClick}>
                        <Link to="/high-risk-merchants"> High Risk Merchant Services </Link>
                    </MenuItem>
                    <MenuItem onClick={onMenuItemClick}>
                        <Link to="/offshore-merchants"> Off-shore Merchant Services </Link>
                    </MenuItem>
                </SubMenu>
                <MenuItem onClick={onMenuItemClick}>
                    <Link to="/blog"> Blog </Link>
                </MenuItem>
            </Menu>
            <div className="sidebar-footer">
                <Link to="/login" onClick={onMenuItemClick} className="sign-in-link">Sign In</Link>
            </div>
        </Sidebar>
    );
}
