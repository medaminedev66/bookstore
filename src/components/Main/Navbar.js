import { React, PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends PureComponent {
  render() {
    const links = [
      {
        id: 1,
        path: '/',
        text: 'BOOKS',
      },
      {
        id: 2,
        path: '/categories',
        text: 'CATEGORIES',
      },
    ];
    return (
      <nav className="header shadow-sm mb-4 bg-white">
        <div className="logo">
          <h1 className="text-primary font-weight-bold">Bookstore CMS</h1>
        </div>
        <ul className="list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="active-link">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
