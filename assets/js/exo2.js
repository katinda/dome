export default (() => {
    let nono = document.querySelectorAll('.lion.bg-secondary');
    console.log(nono);
    let nana = document.querySelectorAll('a');
    console.log(nana);

    nana.forEach((element, i) => {
        element.addEventListener('click', () => {
            event.preventDefault();
            nono.forEach(e => {
                e.classList.add('d-none')
            });
            nono[i].classList.remove('d-none');
        })
        // console.log(element.parentNode);
        // element.parentNode.classList.add('myactive');
        
        console.log(element.target);

    })
    
    nana[0].click();
})();


