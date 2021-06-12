let optionsList = {
    root: null,  //Root the viewport
    rootMargin: '50px', //Margin the root
    threshold: 1 //Visibility
};

let optionsCard = {
    root: null,  //Root the viewport
    rootMargin: '300px', //Margin the root
    threshold: 1 //Visibility
};
   
function onChangeList(changes) {
    changes.forEach(change => {
        if (change.isIntersecting) { //Si es intersectado le añade la clase
            change.target.classList.add('animation-slide-center')
        }
    });
}

function onChangeCard(changes) {
    changes.forEach(change => {
        if (change.isIntersecting) { //Si es intersectado le añade la clase
            change.target.classList.add('animation-scale-center')
        }
    });
}

let observerList = new IntersectionObserver(onChangeList, optionsList)

let observerCard = new IntersectionObserver(onChangeCard, optionsCard)

let lists = document.querySelectorAll(".list-skills")

lists.forEach(entries => observerList.observe(entries)) //Observe the list 

let cards = document.querySelectorAll(".grid-work")

cards.forEach(entries => observerCard.observe(entries)) //Observe the card 