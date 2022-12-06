const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='form__group'>
            <input className='form__input' {...otherProps} />
            <label className='form__label'>{label}</label>
        </div>
    )
}

export default FormInput;