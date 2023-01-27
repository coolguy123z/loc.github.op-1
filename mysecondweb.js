//template_dexmh5k
//service_bw39fmg
//TuSS9DPZtQdMn4e8-


let contrastToggle = false
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme" 
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal_overlay--loading')

   const success = document.querySelector('.modal_overlay--success');
   loading.classList += ' modal_overlay--visible'
    emailjs
    .sendForm(
        'service_bw39fmg', 'template_dexmh5k' , event.target, 'TuSS9DPZtQdMn4e8-'
   ).then( () =>  { 
    loading.remove(' modal_overlay--visible')
   success.classList += ' modal_overlay--visible'}).catch( () => {
    loading.classList.remove("modal_overlay--visible")
    alert("The email service is temporarily unavailable. Please contact me directly on kurokot1230@gmail.com ")
    ;
   })


}
let isModalOpen = false;

function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += ' modal--open'



}
let scaleFactor = 1/20

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")


    //mouse x and y values
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    

    for ( let i = 0; i < shapes.length; ++i){

        const isOdd = i % 2 !==0

        const booleanInt = isOdd ? -1 : 1;

        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y*booleanInt}px)`
        
    }
}



