import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to='/'className="navbar-brand">
                            Home
                        </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to='/cadastro'className="nav-link">
                            Cadastro
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/edit/:id'className="nav-link">
                            Edição
                        </Link>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
