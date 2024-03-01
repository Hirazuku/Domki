{
    const onToggleBackgroundClick = () => {
        const body = document.querySelector(".container")
        const themeName = document.querySelector(".themeName")
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const dark = () => {
        const toggleBackground = document.querySelector(".button");
        toggleBackground.addEventListener("click", onToggleBackgroundClick)
    };

    dark();

    const sendForm = () => {
        const formElement = document.querySelector(".form")
        formElement.addEventListener("submit", () => {
            console.log('The form have been submitted');
        });

        formElement.addEventListener("reset", () => {
            console.log('The form have been reseted');
        });
    }

    sendForm();

    const calculatePrice = (event) => {
        event.preventDefault();

        const usArea = document.querySelector(".js-PU");
        const pricePerMeter = 250;
        const price = pricePerMeter * usArea.value;
        const finalPrice = document.querySelector(".js-finalPrice");
        finalPrice.innerText = price;
    };

    const init = () => {
            const money = document.querySelector(".js-price")
            money.addEventListener("submit", calculatePrice)
    };

    init();
}