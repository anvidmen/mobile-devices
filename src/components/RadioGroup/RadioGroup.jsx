const RadioGroup = ({ options, title, defaultValue, setValue  }) => {
    const onChangeSelected = ({ target: { value } }) => setValue(value)   
    return (
        <>
            <h4><strong>{title}:</strong></h4>
            {
                options && options?.map(option => (
                    <div key={option.code}>
                        <input
                            type="radio"
                            value={option.code}
                            id={option.code}
                            name={option.name}
                            checked={defaultValue == option.code}
                            onChange={onChangeSelected}
                        />
                        <label htmlFor={option.code}>{option.name}</label>
                    </div>

                ))
            }
        </>
    )
}

export default RadioGroup

