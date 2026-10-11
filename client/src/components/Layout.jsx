import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>{' | '}
        <NavLink to="/stats">Stats</NavLink>{' | '}
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
