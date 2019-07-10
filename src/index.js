import './style.css';
import cyclistPng from './images/cycling.png';
import logoPng from './images/logo.png';
import roadPng from './images/bikes/first.png';
import trickPng from './images/bikes/second.png';
import francePng from './images/competition/logo.png';


const cycleDiv = document.getElementsByClassName('cyclist')[0];
const cyclist = new Image();
cyclist.src = cyclistPng;
cyclist.setAttribute('alt', 'Cyclist');
cyclist.classList.add('bicycle');
cycleDiv.appendChild(cyclist);

const logoDiv = document.getElementsByClassName('navbar-logo')[0];
const logo = new Image();
logo.src = logoPng;
logo.setAttribute('alt', 'Bikezilla logo');
logoDiv.appendChild(logo);

const roadDiv = document.getElementsByClassName('road-bike')[0];
const roadBike = new Image();
roadBike.src = roadPng;
roadBike.setAttribute('alt', 'Road bike');
roadBike.classList.add('image');
roadDiv.appendChild(roadBike);

const trickDiv = document.getElementsByClassName('trick-bike')[0];
const trickBike = new Image();
trickBike.src = trickPng;
trickBike.setAttribute('alt', 'Trick bike');
trickBike.classList.add('image');
trickDiv.appendChild(trickBike);

const franceDiv = document.getElementsByClassName('tour-de-france')[0];
const france = new Image();
france.src = francePng;
france.setAttribute('alt', 'Tour de France');
france.classList.add('cycle-col__image');
franceDiv.appendChild(france);