const RANDOM_USD = (Math.random() + 3).toFixed(2);
const RANDOM_GBR = (Math.random() + 3).toFixed(2);
const RANDOM_EUR = (Math.random() + 3).toFixed(2);
const RANDOM_JPY = (Math.random() + 3).toFixed(2);

export const initializeData=[
    { id: 1, name: "USD", price: RANDOM_USD },
    { id: 2, name: "GBR", price: RANDOM_GBR },
    { id: 3, name: "EUR", price: RANDOM_EUR },
    { id: 4, name: "JPY", price: RANDOM_JPY },
]