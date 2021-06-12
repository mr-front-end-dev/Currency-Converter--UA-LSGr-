{
    const calculateResult = (amount, currency) => {
        const rateTHB = 0.1237;
        const rateUSD = 3.7031;
        const rateAUD = 2.8569;
        const rateHKD = 0.4777;
        const rateCAD = 2.9073;
        const rateNZD = 2.6710;
        const rateSGD = 2.8076;
        const rateEUR = 4.5446;
        const rateHUF_100 = 1.2577;
        const rateCHF = 4.2078
        const rateGBP = 5.0261;
        const rateUAH = 0.1304;
        const rateJPY_100 = 3.6013;
        const rateCZK = 0.1735;
        const rateDKK = 0.6109;
        const rateISK_100 = 2.9113;
        const rateNOK = 0.4340;
        const rateSEK = 0.4510;
        const rateHRK = 0.6012;
        const rateRON = 0.9329;
        const rateBGN = 2.3236;
        const rateTRY = 0.5010;
        const rateILS = 1.1545;
        const rateCLP_100 = 0.5258;
        const ratePHP = 0.0770;
        const rateMXN = 0.1857;
        const rateZAR = 0.2491;
        const rateBRL = 0.6991;
        const rateMYR = 0.9219;
        const rateRUB = 0.0495;
        const rateIDR_10000 = 2.6612;
        const rateINR_100 = 5.0608;
        const rateKRW_100 = 0.3401;
        const rateCNY = 0.5731;
        const rateXDR = 5.3547;

        switch (currency) {

            case "USD":
                return amount / rateUSD;

            case "THB":
                return amount / rateTHB;

            case "AUD":
                return amount / rateAUD;

            case "HKD":
                return amount / rateHKD;

            case "CAD":
                return amount / rateCAD;

            case "NZD":
                return amount / rateNZD;

            case "SGD":
                 return amount / rateSGD;
            
            case "EUR":
                return amount / rateEUR;

            case "(* 100) HUF":
                return (amount / rateHUF_100) * 100;

            case "CHF":
                return amount / rateCHF;

            case "GBP":
                return amount / rateGBP;
            
            case "UAH":
                return amount / rateUAH;

            case "(* 100) JPY":
                return (amount / rateJPY_100) * 100;

            case "CZK":
                return amount / rateCZK;

            case "DKK":
                return amount / rateDKK;

            case "(* 100) ISK":
                return (amount / rateISK_100) * 100;

            case "NOK":
                return amount / rateNOK;

            case "SEK":
                return amount / rateSEK;

            case "HRK":
                return amount / rateHRK;

            case "RON":
                return amount / rateRON;

            case "BGN":
                return amount / rateBGN;

            case "TRY":
                return amount / rateTRY;

            case "ILS":
                return amount / rateILS;

            case "(* 100) CLP":
                return (amount / rateCLP_100) * 100;

            case "PHP":
                return amount / ratePHP;

            case "MXN":
                return amount / rateMXN;

            case "ZAR":
                return amount / rateZAR;

            case "BRL":
                return amount / rateBRL;

            case "MYR":
                return amount / rateMYR;

            case "RUB":
                return amount / rateRUB;

            case "(* 10000) IDR":
                return (amount / rateIDR_10000) * 10000;

            case "(* 100) INR":
                return (amount / rateINR_100) * 100;

            case "(* 100) KRW":
                return (amount / rateKRW_100) * 100;

            case "CNY":
                return amount / rateCNY;

            case "SDR (MFW)":
                return amount / rateXDR;

        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        
        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

