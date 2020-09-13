{
  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-resultInfo");

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
  };

  const getResult = (amount, currency) => {
    const rateUSD = 3.7534;
    const rateGBP = 4.7983;
    const rateEUR = 4.4504;

    switch (currency) {
      case "USD":
        return amount / rateUSD;
      case "GBP":
        return amount / rateGBP;
      case "EUR":
        return amount / rateEUR;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = getResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
