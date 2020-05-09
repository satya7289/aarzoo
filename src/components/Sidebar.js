import React from 'react';

const Sidebar = () => {


  return (
    <div className="side-bar">
        <nav className="ml-3 mt-3">
            <a className="navbar-brand"><b>The New York Time</b></a>
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link bg-transparent text-primary active">Dashboard</a>
                </li>
                <li>
                <a className="nav-link bg-transparent">Article</a>
                </li>
                <li>
                <a className="nav-link bg-transparent">Analytics</a>
                </li>
                <li>
                <a className="nav-link bg-transparent">Message</a>
                </li>
                <li>
                <a className="nav-link bg-transparent">Calander</a>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Sidebar;