const main = document.querySelector("main");
const search = document.querySelector("input");

const renderCryptoData = (Crypto) => {
    main.innerHTML = ``;
    for (let i = 0; i < Crypto.length; i++) {
        main.innerHTML += `
            Balance: ${Crypto.balance}
            Date: ${Crypto.date}
        `
    }
}

const fetchCryptoData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${search}`);
      const data = await response.json();
      renderCryptoData(data);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    fetchCryptoData();
})

search.addEventListener("change", (e) => {
    e.preventDefault();

    fetchCryptoData(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${e.target.Crypto.balance}`)
})