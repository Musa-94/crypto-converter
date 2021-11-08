import React, {ChangeEvent} from 'react'
import './styles.css'

interface CurrencyProps {
    value: string
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Currency = (props: CurrencyProps): JSX.Element => {
    const { onChange, value } = props

    return (
        <div className="currency-wrapper">
            <select value={value}
                    onChange={onChange}
                    className="currency-select"
            >
                <option className="currency-option">BTC</option>
                <option className="currency-option">ETH</option>
                <option className="currency-option">LTC</option>
            </select>
        </div>
    )
}

export default React.memo(Currency)
