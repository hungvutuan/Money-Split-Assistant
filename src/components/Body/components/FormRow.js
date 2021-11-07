import './styles.css'

const FormRow = ({
                   handleChange,
                   value,
                   type,
                   name,
                 }) => {

  return (
    <div className={'body-form-row'}>
      <label className={'form-row-label'}>
        Name:
        <input
          className={'form-row-input'}
          name={name}
          type={type}
          onChange={handleChange}
          value={value}
        />
      </label>
    </div>
  )
}

export default FormRow
