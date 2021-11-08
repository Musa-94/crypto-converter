import React, {ChangeEvent, useCallback, useState} from 'react'
import './styles.css'
import {Currency, CustomButton, CustomInput} from '../../components';
import {getConverterCurrency} from '../../utils';


const Main = (): JSX.Element => {
    const [currencyValue, setCurrencyValue] = useState<string>('0')
    const [converterCurrencyValue, setConverterCurrencyValue] = useState<string>('0')

    const [currency, setCurrency] = useState<string>('BTC')
    const [converterCurrency, setConverterCurrency] = useState<string>('USDT')

    const handleCurrentCurrency = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        setCurrency(event.target.value)
    }, [setCurrency])
    const handleConverterCurrency = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        setConverterCurrency(event.target.value)
    }, [setConverterCurrency])

    const handleCurrencyValue = useCallback((event: ChangeEvent<HTMLInputElement>, value: string) => {
        setCurrencyValue(value)
    }, [setCurrencyValue])

    const handleClick = async () => {
        const params = {
            to: converterCurrency,
            from: currency,
            amount: converterCurrencyValue,
        }

        const res = await getConverterCurrency(params)

        setConverterCurrencyValue(res.amount)
    }

    return (
        <div className="main__wrapper">
            <div className="main__wrapper-input-block">
                <CustomInput
                    type="number"
                    onChange={handleCurrencyValue}
                    inputValue={currencyValue}
                />
                <Currency
                    value={currency}
                    onChange={handleCurrentCurrency}
                />
            </div>
            <div className="main__wrapper-input-block">
                <CustomInput
                    type="number"
                    readOnly
                    inputValue={converterCurrencyValue}
                />
                <Currency
                    value={converterCurrency}
                    onChange={handleConverterCurrency}
                />
            </div>
            <div className="main__wrapper-button-block">
                <CustomButton
                    children="Converter"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Main
