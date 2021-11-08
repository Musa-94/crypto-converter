import React, { ChangeEvent, useState } from 'react'
import './styles.css'

interface CustomInputProps {
    type?: string
    readOnly?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>, value: string) => void
    inputValue?: string
}

const CustomInput = (props: CustomInputProps): JSX.Element => {
    const {
        type = 'text',
        readOnly,
        onChange,
        inputValue
    } = props

    const [value, setValue] = useState<string>('')

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>  {
        if (onChange) {
            onChange(event, event.target.value)
        } else {
            setValue(event.target.value)
        }
    }

    return (
        <input type={type}
               value={inputValue || value}
               onChange={handleOnChange}
               readOnly={readOnly}
               className="custom-input"
        />
    )
}

export default React.memo(CustomInput)
