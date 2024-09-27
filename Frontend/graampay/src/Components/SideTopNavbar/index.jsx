import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiLogin } from "react-icons/ci";

import './index.css';

const SideTopNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeMenuItem, setActiveMenuItem] = useState(''); // New state for active menu item

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item); // Set the active menu item
  };

  return (
    <div className="navbar-container">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <div className="flex-nav-items">
          <div className="main-input-text">
            <input className="search-input" placeholder="Search here..." type="text" />
            <IoSearch />
          </div>
          <div className="icons-flex-card">
            <div><FaCalendarAlt size={18} /></div>
            <div><img src="../../../public/images/messageicon.svg" className="icon-image" alt="message icon" /></div>
            <div><MdEmail size={20} /></div>
            <div><IoIosNotifications size={20} /></div>
            <div><CiLogin size={20} /></div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`side-navbar ${isSidebarOpen ? "open" : "collapsed"}`}>
        <div className="profile-card-menu">
          <div>
            <img src="../../../public/images/user.svg" alt="User avatar" onClick={handleDropdownToggle} />
          </div>
          <div style={{ lineHeight: "40%", marginLeft: "15px" }}>
            <p className="welcome-class">Welcome,</p>
            <div onClick={handleDropdownToggle} className="profile-info">
              <p style={{ fontSize: '14px', fontWeight: "700" }}>Viyona Admin</p>
            </div>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="dropdown animated-dropdown">
              <ul>
                <Link onClick={handleDropdownToggle} to="/admin/profile"><li>My Profile</li></Link>
                <Link onClick={handleDropdownToggle} to="/admin/settings"><li>Messages</li></Link>
                <Link onClick={handleDropdownToggle} to="/admin/settings"><li>Settings</li></Link>
                <Link onClick={handleDropdownToggle} to="/logout"><li>Logout</li></Link>
              </ul>
            </div>
          )}
        </div>

        <div className='experience-flex'>
          <div className='experience-card'><h1 className='head'>5+</h1><p className='para'>Experience</p></div>
          <div className='experience-card'><h1 className='head'>400+</h1><p className='para'>Employees</p></div>
          <div className='experience-card'><h1 className='head'>80+</h1><p className='para'>Clients</p></div>
        </div>

        <div className='tabs-container'>
          <div className='tabs'>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        <div className='tab-content'>
          {activeTab === 0 && (
            <ul className="navbar-menu">
              <Link className={`hover-items ${activeMenuItem === 'dashboard' ? 'active2' : ''}`}  to="/admin/dashboard" onClick={() => handleMenuItemClick('dashboard')}>
                <img src='../../../public/images/dashboardtexticon.svg' className='color-image' alt="Dashboard Icon" />
                <img src='../../../public/images/colordashboardtexticon.svg' className='white-image' alt="Dashboard Icon" />
                <li className="menu-item">Dashboard</li>
              </Link>

              <Link className={`hover-items ${activeMenuItem === 'holidays' ? 'active2' : ''}`}  to="/admin/dashboard" onClick={() => handleMenuItemClick('holidays')}>
                <img src='../../../public/images/holidayswhite.svg' className='color-image' alt="Dashboard Icon" />
                <img src='../../../public/images/blackholidays.svg' className='white-image' alt="Dashboard Icon" />
                <li className="menu-item">Holidays</li>
              </Link>
              <Link className={`hover-items ${activeMenuItem === 'events' ? 'active2' : ''}`}  to="/admin/dashboard" onClick={() => handleMenuItemClick('events')}>
                <img src='../../../public/images/holidayswhite.svg' className='color-image' alt="Dashboard Icon" />
                <img src='../../../public/images/blackholidays.svg' className='white-image' alt="Dashboard Icon" />
                <li className="menu-item">Events</li>
              </Link>
              <Link className={`hover-items ${activeMenuItem === 'activites' ? 'active2' : ''}`}  to="/admin/dashboard" onClick={() => handleMenuItemClick('activites')}>
                <img src='../../../public/images/holidayswhite.svg' className='color-image' alt="Dashboard Icon" />
                <img src='../../../public/images/blackholidays.svg' className='white-image' alt="Dashboard Icon" />
                <li className="menu-item">Activites</li>
              </Link>
           

              <li className={`menu-item ${activeMenuItem === 'menu1' ? 'active2' : ''}`} onClick={() => { handleAccordionClick(1); handleMenuItemClick('menu1'); }}>
                Menu 1
                {openAccordion === 1 && (
                  <ul className="submenu">
                    <li>
                      <Link className={`submenu-item ${activeMenuItem === 'submenu1.1' ? 'active2' : ''}`}  to="/admin/page1" onClick={() => handleMenuItemClick('submenu1.1')}>Submenu 1.1</Link>
                    </li>
                    <li>
                      <Link className={`submenu-item ${activeMenuItem === 'submenu1.2' ? 'active2' : ''}`}  to="/admin/page2" onClick={() => handleMenuItemClick('submenu1.2')}>Submenu 1.2</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={`menu-item ${activeMenuItem === 'settings' ? 'active2' : ''}`}>
                <Link style={{ color: "black", textDecoration: "none" }} to="/admin/settings" onClick={() => handleMenuItemClick('settings')}>Settings</Link>
              </li>
            </ul>
          )}
          {activeTab === 1 && <div>Content for Tab 2</div>}
          {activeTab === 2 && <div>Content for Tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default SideTopNavbar;
