function ChangeImage1() {
    console.log("event triggered")
    var image = document.getElementById('cute');
    if (image.src.match("/virtual-section/jodo.jpg")) {
        image.src = "./images/jodo-lipstick.png";
        
    }
    else if(image.src.match("/jodo-lipstick.png")){
        image.src = "./virtual-section/jodo.jpg";
    }
    else {
        image.src = "./virtual-section/jodo-lipstick.png";
    }
}

function ChangeImage2() {
    console.log("event triggered")
    var image = document.getElementById('cute');
    if (image.src.match("/virtual-section/jodo.jpg")) {
        image.src = "./virtual-section/jodo-foundation.png";
    }
    else if(image.src.match("/virtual-section/jodo-foundation.png")){
        image.src = "./virtual-section/jodo.jpg";
    }
    else {
        console.log("else")
        image.src = "./virtual-section/jodo-foundation.png";
    }
}
function ChangeImage3() {
    console.log("event triggered 3")
    var image = document.getElementById('cute');
    if (image.src.match("/virtual-section/jodo.jpg")) {
        image.src = "./virtual-section/jodo-concealer.png";
    }
    else if(image.src.match("/virtual-section/jodo-concealer.png")){
        image.src = "./virtual-section/jodo.jpg";
    }
    else {
        image.src = "./virtual-section/jodo-concealer.png";
    }
}
function ChangeImage4() {
    console.log("event triggered 4")
    var image = document.getElementById('cute');
    if (image.src.match("/virtual-section/jodo.jpg")) {
        console.log("yessu")
        image.src = "./virtual-section/jodo-mascara.png";
    }
    else if(image.src.match("/virtual-section/jodo-mascara.png")){
        console.log("nopes")
        image.src = "./virtual-section/jodo.jpg";
    }
    else {
        image.src = "./virtual-section/jodo-mascara.png";
    }
}

function ChangeUni(){
    console.log("mouse leave event triggered")
    var image = document.getElementById('cute');
    image.src = "makeup.webp";
}

const hamburger=document.getElementById('hamburger');
const navUl=document.getElementById('nav-ul');

// hamburger.addEventListener('click',()=>{
//     console.log("ajja")
//     navUl.classList.toggle('show');
// })
function valle(){
    console.log("ajja")
    navUl.classList.toggle('show');

}

// for carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// end carousel

// start of webcam
// const video = document.getElementById('webcam');
//         const startButton = document.getElementById('startButton');
//         const captureButton = document.getElementById('captureButton');
//         const closeButton = document.getElementById('closeButton');
//         const canvas = document.getElementById('canvas');
//         const capturedPhoto = document.getElementById('capturedPhoto');
//         let stream = null;

//         // Function to start the camera
//         function startCamera() {
//             navigator.mediaDevices.getUserMedia({ video: true })
//                 .then(function (mediaStream) {
//                     video.srcObject = mediaStream;
//                     stream = mediaStream; // Store the stream for later use
//                     startButton.style.display = 'none'; // Hide the start button
//                     captureButton.style.display = 'block'; // Display the capture button
//                     closeButton.style.display = 'block'; // Display the close button
//                 })
//                 .catch(function (error) {
//                     console.error('Error accessing the webcam: ', error);
//                 });
//         }

//         // Start the camera when the "Start Camera" button is clicked
//         startButton.addEventListener('click', startCamera);

//         // Capture a frame from the webcam feed
//         captureButton.addEventListener('click', function () {
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

//             // Display the captured photo
//             capturedPhoto.src = canvas.toDataURL('image/jpeg');
//             capturedPhoto.style.display = 'block';
//         });

//         // Close the video
//         closeButton.addEventListener('click', function () {
//             if (stream) {
//                 const tracks = stream.getTracks();
//                 tracks.forEach(function (track) {
//                     track.stop();
//                 });
//                 video.srcObject = null;
//                 startButton.style.display = 'block'; // Display the start button
//                 captureButton.style.display = 'none'; // Hide the capture button
//                 closeButton.style.display = 'none'; // Hide the close button
//             }
//         });

// 