{
    const onToggleBackgroundClick = () => {
        const body = document.querySelector(".container")
        const article = document.querySelector(".article")
        const button = document.querySelector(".button")
        const button2 = document.querySelector(".button2")
        const button3 = document.querySelector(".button3")
        const themeName = document.querySelector(".themeName")
        body.classList.toggle("dark");
        article.classList.toggle("dark");
        button.classList.toggle("dark");
        button2.classList.toggle("dark");
        button3.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    function dark() {
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
}