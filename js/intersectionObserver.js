let options = {
    root: null, // relative to document viewport 
    rootMargin: '100px', // margin around root. Values are similar to css property. Unitless values not allowed
    threshold: 1 // visible amount of item shown in relation to root
};
   
function onChange(changes) {
    changes.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('animation-slide-center')
        }
    });
}

let observer = new IntersectionObserver(onChange, options)

let list  = document.querySelectorAll(".list-skills")

list.forEach(entries => observer.observe(entries))

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('animation-scale-in-center')
//         }
//     })
// })

// observer.observe(document.querySelectorAll('.list-skills'))