import React, {FC} from 'react'
import './styles.css'

interface CustomButtonProps {
    onClick?: () => void
}

const CustomButton: FC<CustomButtonProps> = (props): JSX.Element => {
    const {
        onClick,
        children
    } = props

    return (
        <div onClick={onClick}
             className="custom-button"
        >
            {children}
        </div>
    )
}

export default CustomButton
