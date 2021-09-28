import { React, PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends PureComponent {
  render() {
    const links = [
      {
        id: 1,
        path: '/',
        text: 'Books',
      },
      {
        id: 2,
        path: '/categories',
        text: 'Categories',
      },
    ];
    return (
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link">
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
