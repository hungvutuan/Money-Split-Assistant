import './styles.css'
import {useState} from "react";

const Body = () => {
  const [count, setCount] = useState(1)

  return (
    <div className={'body-container'}>

      <div className={'inside-frame-container'}>
        <button
          className={'generic-btn'}
          onClick={() => {
            console.log('Pressed', count, 'times')
            setCount(count + 1)
          }}
        >
          Count
        </button>

      </div>
    </div>
  )
}

export default Body