console.log('welcome');
let hbutton = document.getElementById('hamburger');
hbutton.addEventListener('click', function () {
    alert('Button clicked!');
    
});



 let button = document.getElementById('hamburger');
    let element = document.getElementById('toggling');
    let menu = document.getElementById('menu');
    button.addEventListener('click', function () {
        // element.classList.toggle('block');
        if(element.style.display == 'none'){
            element.style.display = 'block';
        }
        else{
            element.style.display= 'none';
        }
            
    });

    window.addEventListener('click',function(event)
{
    if(!menu.classList.contains('hidden') && !meny.contains(event.target)){
        // meny.classList.add('hidden');
        element.style.display= 'none';
    }
})
