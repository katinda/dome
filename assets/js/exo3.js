export default((e)=>{
    let inpunt =document.querySelector('input')
let prenom= document.querySelector('beerus')


inpunt.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        prenom.innerText= inpunt.value;
        inpunt.value=''
    }
}

  
)
}
)();


