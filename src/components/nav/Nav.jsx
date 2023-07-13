import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  /* Creating a simple navigation bar has 3 options each one linked using routing */
  return (
          <nav>
                <Link to='/task1'>Task 1</Link>
                <Link to='/task2'>Task 2</Link>
                <Link to='/task3'>Task 3</Link>

          </nav>
  )
}

export default Nav
