const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

const missing_students = [
	{
		"name": "Andjela Saponjic",
		"image": null,
	},
	{
		"name": "Cazpian Levén",
		"image": null,
	},
	{
		"name": "Frida Lam",
		"image": null,
	},
	{
		"name": "Maxim Khnykin",
		"image": null,
	},
	{
		"name": "Philip Le",
		"image": null,
	},
];

// Hämta ut nödvändiga element
const startBtnEl = document.querySelector('#start-btn');
const nextBtnEl = document.querySelector('#next-btn');
const quizContainerEl = document.querySelector('#quiz-container');
const mainContainerEl = document.querySelector('#main-container');
const imgEl = document.querySelector('#img');
const nameBtnsEl = document.querySelector('#name-buttons');

// En array för studenter man redan gissat på
const guessedStudents = [];

let shuffledImgs, currentImgIndex
let shuffledNames, currentNameIndex

startBtnEl.addEventListener('click', e => {
	startBtnEl.classList.add('d-none');
	quizContainerEl.classList.remove('d-none');
	mainContainerEl.classList.remove('vh-75');
	shuffledImgs = students.sort(() => Math.random() - .5);
	currentImgIndex = 0;
	shuffledNames = students.sort(() => Math.random() - .5);
	currentNameIndex = 0;
	setNextImg();
	setNextName();
});

function setNextImg() {
	showImg(shuffledImgs[currentImgIndex]);
}

function showImg(student) {
	imgEl.innerHTML = `<img src="${student.image}" alt="" class="w-100">`;
	
}

function setNextName() {
	showName(shuffledNames[currentNameIndex]);
}

function showName(student) {
	nameBtnsEl.innerHTML = `
		<div id="name-buttons" class="btn-grid m-auto col-lg-9 col-md-9 col-sm-11">
			<div class="row justify-content-between">
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${student.name}</button>
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${student.name}</button>
			</div>
			<div class="row justify-content-between">
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${student.name}</button>
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${student.name}</button>
			</div>
		</div>`;
}

nameBtnsEl.addEventListener('click', e => {
	if (e.target.tagName === "BUTTON" && students.indexOf(students.name === students.indexOf(students.image))) {
		e.target.classList.remove('bg-primary');
		e.target.classList.add('bg-success');
	} else {
		e.target.classList.remove('bg-primary');
		e.target.classList.add('bg-danger');
	}

	nextBtnEl.classList.remove('d-none');
});

nextBtnEl.addEventListener('click', e => {
	nextBtnEl.classList.add('d-none');
	shuffledImgs = students.sort(() => Math.random() - .5);
	currentImgIndex = 0;
	shuffledNames = students.sort(() => Math.random() - .5);
	currentNameIndex = 0;
	setNextImg();
	setNextName();

	students.shift(students.image && students.name);
	guessedStudents.push(students.image && students.name);

	console.log(students);
	console.log(guessedStudents);
});