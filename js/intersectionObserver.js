let options = {
    root: null,  //Root the viewport
    rootMargin: '50px', //Margin the root
    threshold: 1 //Visibility
};
   
function onChangeList(changes) {
    changes.forEach(change => {
        if (change.isIntersecting) { //Si es intersectado le añade la clase
            change.target.classList.add('animation-slide-center')
            console.log("LIST")
        }
    });
}

function onChangeCard(changes) {
    changes.forEach(change => {
        if (change.isIntersecting) { //Si es intersectado le añade la clase
            change.target.classList.add('animation-slide-elliptic')
            console.log("CARD")
        }
    });
}

let observer = new IntersectionObserver(onChangeList, options)

let observers = new IntersectionObserver(onChangeCard, options)

let list  = document.querySelectorAll(".list-skills")

list.forEach(entries => observer.observe(entries)) //Observe the list 

let card  = document.querySelectorAll(".grid-work")

card.forEach(entries => observer.observe(entries)) //Observe the card 