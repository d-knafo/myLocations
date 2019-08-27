import React from 'react'
import { Link } from 'react-router-dom'
import ReactRouter from './../../router/router'
import { FaList, FaMap } from 'react-icons/fa'

const App = () => (
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Features</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
          <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </div>
      </div>
    </nav>

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
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
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
