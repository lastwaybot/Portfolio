import './Navigation.css'

function Navigation({ activeNav, setActiveNav }) {
  const navItems = ['Home', 'About', 'Projects', 'Experience', 'Contact']

  return (
    <nav className="navigation">
      <div className="nav-logo">Portfolio</div>
      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className={`nav-link ${activeNav === item.toLowerCase() ? 'active' : ''}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
