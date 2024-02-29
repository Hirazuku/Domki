# Virtual CV
## mgr inż. Michał Kowalczyk

*Kto pracował w budowlance, ten w cyrku się nie śmieje ;)*

**I completed the YouCode - Frontend developer from scratch programming course**

- Java Script
- Html
- CSS
- Git Hub
- Markdown

![animation](gif/Animation.gif)

Here is some of the js code for my Virtual-CV website:

```
const calculatePrice = (event) => {
        event.preventDefault();

        const usArea = document.querySelector(".js-PU");
        const pricePerMeter = 250;
        const price = pricePerMeter * usArea.value;
        const finalPrice = document.querySelector(".js-finalPrice");
        finalPrice.innerText = price;
    };

    {
        const money = document.querySelector(".js-price")
        money.addEventListener("submit", calculatePrice)
    }
```
Link for my website: https://hirazuku.github.io/My-VR-CV/