// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    mybutton.style.color = "black";
    //if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (window.scrollY > screen.height / 4) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    console.log(window.scrollY);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log(screen.height / 4);
    console.log(window.scrollY);
}



const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

