import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
          <nav>
                <Link to='/task1'>Task 1</Link>
                <Link to='/task2'>Task 2</Link>
                <Link to='/task3'>Task 3</Link>

          </nav>
  )
}

export default Nav