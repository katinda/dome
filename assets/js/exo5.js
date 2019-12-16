export default (()=>{ 
    let oeuf = document.querySelector ('.oeuf');
    let popey= document.querySelector('.popey');

    oeuf.addEventListener('click',()=>{
        let chichi= document.createElement('img');
        chichi.src='../../assets/images/206129-711-1-Large.jpg';
        popey.appendChild(chichi);

        
})
});
