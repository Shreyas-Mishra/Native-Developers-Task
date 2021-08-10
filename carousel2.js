const patte = document.getElementsByClassName("Carousel-object");

// window.onload = () => {
//   console.log(cards);
// };

const remove2Class = (curr, card) => {
    switch (curr) {
        case "object1": {
            card.classList.remove("object1");
            break;
        }
        case "object2": {
            card.classList.remove("object2");
            break;
        }
        case "object3": {
            card.classList.remove("object3");
            break;
        }
        case "object4": {
            card.classList.remove("object4");
            break;
        }
        case "object5": {
            card.classList.remove("object5");
            break;
        }
        case "object6": {
            card.classList.remove("object6");
            break;
        }
    }
};

const slideL = () => {
    for (j = 0; j < patte.length; j++) {
        patte[j].classList.add("slideL");
    }
    setTimeout(() => {
        let prev = patte[5].classList[1];
        console.log(prev);
        for (j = 0; j < patte.length; j++) {
            const curr = patte[j].classList[1];
            remove2Class(curr, patte[j]);
            patte[j].classList.remove("slideL");
            patte[j].classList.add(prev);
            prev = curr;
        }
    }, 750);
};

const slideR = () => {
    for (j = 0; j < patte.length; j++) {
        patte[j].classList.add("slideR");
    }
    setTimeout(() => {
        let prev = patte[0].classList[1];
        console.log(prev);
        for (j = patte.length - 1; j >= 0; j--) {
            const curr = patte[j].classList[1];
            remove2Class(curr, patte[j]);
            patte[j].classList.remove("slideR");
            patte[j].classList.add(prev);
            prev = curr;
        }
    }, 750);
};
