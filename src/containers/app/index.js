import React from 'react'
import { Link } from 'react-router-dom'
import ReactRouter from './../../router/router'
import { FaList, FaMap } from 'react-icons/fa'

const resetApp = () => {
  localStorage.clear()
  window.location.reload()
}
const App = () => (
  <div>
    <nav className='navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'> myLocations </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarsExampleDefault'
        aria-controls='navbarsExampleDefault'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/categories'>
              <FaList />
              &nbsp; Categories
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/locations'>
              <FaMap />
              &nbsp; Locations
            </Link>
          </li>
          <button type="button" class="btn btn-danger btn-xs" style={{ right:50, position: 'absolute' }} onClick={ resetApp }>Reset app</button>
        </ul>
      </div>
    </nav>
    <main role='main' className='container'>
      <div className='starter-template'>
        <ReactRouter />
      </div>
    </main>
  </div>
)

export default App
