import React from 'react'

export const Header = ({ showForm }) => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  }
  return (
    <header style={styles}>
      <h2>
        Expense Tracker
      </h2>
      <nav style ={{display: 'flex'}}>
        <li><a href="#!" onClick={() => showForm ()}>Add New Transaction</a></li>
      </nav>
    </header>
   
  )
}
