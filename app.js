const imgSlider = document.querySelector('.img-slider');
const imgFruits = document.querySelectorAll('.img-item.fruit');

const infoSlider = document.querySelector('.info-slider');
const bgs = document.querySelectorAll('.bg');

let indexSlider = 0;
let index = 0;

function nextBtn() {
    goNext();
    indexSlider++;
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;

    index++;
    if (index > imgFruits.length - 1) {
        index = 0;
    }

    document.querySelector('.fruit.active').classList.remove('active');
    console.log(imgFruits[index]);
    imgFruits[index].classList.add('active');
    
    

    document.querySelector('.bg.active').classList.remove('active');
    bgs[index].classList.add('active');
}


function prevBtn() {
    goPrev();
    indexSlider--;
    imgSlider.style.transform = `rotate(${indexSlider * -90}deg)`;

    index--;
    if (index < 0) {
        index = imgFruits.length - 1;
    }
    document.querySelector('.fruit.active').classList.remove('active');
    imgFruits[index].classList.add('active');

    document.querySelector('.bg.active').classList.remove('active');
    bgs[index].classList.add('active');
}


// Slide Infomation 
let currentIndex = 0;

const elements = [
    ['Lemon', 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    ['BlueBerry', 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    ['Watermelon', 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
    ['Apple', 'lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
];

// Function to update the content
function updateContent() {    
    document.getElementById('contenHead').innerText = elements[currentIndex][0];
    document.getElementById('contentDes').innerText = elements[currentIndex][1];
}

// Initial display of the first element
updateContent();

// Next button functionality (looping forward)
function goNext() {
    currentIndex = (currentIndex + 1) % elements.length;
    updateContent();
}

// Previous button functionality (looping backward)
function goPrev() {
    currentIndex = (currentIndex - 1 + elements.length) % elements.length;
    updateContent();
}


