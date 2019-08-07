import React from 'react';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
                <img src="../assets/images/THD_logo_menu.jpg" />
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            View Leads
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navDropdown1">
                            <a className="nav-link dropdown-toggle" id="subDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                For the Store
                            </a>
                            <div className="dropdown-menu" aria-labelledby="subDropdown1">
                                <a className="dropdown-item" href="">For a Specific Week</a>
                                <a className="dropdown-item" href="">For a Specific Month</a>
                                <a className="dropdown-item" href="">For a Specific Year</a>
                            </div>
                            <a className="nav-link dropdown-toggle" id="subDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Department
                            </a>
                            <div className="dropdown-menu" aria-labelledby="subDropdown2">
                                <a className="dropdown-item" href="">For a Specific Week</a>
                                <a className="dropdown-item" href="">For a Specific Month</a>
                                <a className="dropdown-item" href="">For a Specific Year</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="">Update Leads</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="">Set Goals</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;