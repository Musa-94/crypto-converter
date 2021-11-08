interface Params {
    to: string
    from: string
    amount: string
    promocode?: string
}

interface ReturnResult {
    amount: string
}

export const getConverterCurrency = async (params: Params): Promise<ReturnResult> => {
    let result = {
        amount: '111'
    }

    try {
        return await fetch('https://api.letsexchange.io/api/v1/info?float=true', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: params.amount,
                from: params.from,
                promocode: "",
                to: params.to
            }),
        })
            .then(res => res.json())
            .then(res => res)
        // result = await fetch(config.API_CONVERT, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(params),
        // })
        //     .then(res => res.json())
        //     .then(res => res)
        //     .catch(err => console.log('err', err))
    } catch (e) {
        console.log('e', e)
    }

    return result
}
