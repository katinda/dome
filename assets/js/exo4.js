export default (() => {

    let cercle = document.querySelector('.cercle');
    let buu = document.querySelectorAll('.buu');
    let button = document.querySelector('.jaune');
    let vert= document.querySelector('.vert');
    let i=0
    console.log(button);
    button.addEventListener("click",()=>{
        buu[0].classList.toggle('d-none');
        buu[1].classList.toggle('d-none');
        i++;
        vert.innerText='nombre de click '+i ;

    })

    vert.addEventListener("click",()=>{    
        vert.innerText='nombre de click '+i ;
        vert.innerText=0;

    })

        

})();




// let mouse_down = false; 

// function on_mouse_down_(event) { 
//  mouse_down=true; 
// } 

// function on_mouse_up(event){ 
//  mouse_down=false; 
// } 

// document.onmousemove = on_mouse_move; 

// document.onmouseup = on_mouse_up; 

// function on_mouse_move(event) { 
//   if (mouse_down === true) { 
//     document.querySelector('.rond').style.left = event.clientX-50+'px'; 
//     document.querySelector('.rond').style.top = event.clientY-50+'px'; 

//   } 
// } 