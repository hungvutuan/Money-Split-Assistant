import './styles.css'
import {useEffect, useState} from "react";
import FormRow from "./components/FormRow";

const Body = () => {
  const [count, setCount] = useState(1)

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {

  }, [])

  useEffect(() => {
    console.log(value)
  }, [value])

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

        <form className={'body-form'}>
          <FormRow
            handleChange={handleChange}
            value={value}
            type={'text'}
            name={'name1'}
          />

          <label>
            Name:
            <input
              name={'name2'}
              type={'text'}
              onChange={handleChange}
              value={value}
            />
          </label>
        </form>

      </div>
    </div>
  )
}

export default Body