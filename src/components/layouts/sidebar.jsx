import {NavLink} from 'react-router-dom';

function Sidebar(params) {
    return (
        <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a>Stisla</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a>St</a>
          </div>
          <ul className="sidebar-menu">
            <li className="menu-header">Navigation</li>
            <li>
              <NavLink className="nav-link" to="/dashboard"><i className="fas fa-fire"></i> <span>Dashboard</span></NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/customers"><i className="fas fa-users"></i> <span>Customers</span></NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/leads"><i className="fas fa-check"></i> <span>Leads</span></NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Multiple Menu</span></a>
              <ul className="dropdown-menu">
                <li>
                  <a className="nav-link">Menu 1</a>
                </li>
                <li>
                  <a className="nav-link">Menu 2</a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
            <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
              <i className="fas fa-rocket"></i> Documentation
            </a>
          </div>
        </aside>
      </div>
    );
}

export default Sidebar;