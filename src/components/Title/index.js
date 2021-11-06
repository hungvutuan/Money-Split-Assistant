import React from 'react'
import './styles.css'

const Title = () => {
  const styles = {
    titleContainer: {
      backgroundColor: '#FFA500FF',
      fontFamily: 'arial',
    },
  }

  return (
    // <div className='title-container'>
    <div className={styles.titleContainer}>
      <h1>Money Split Assistant v0.1</h1>
    </div>
  )
}

export default Title