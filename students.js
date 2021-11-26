let students = [
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
const nameBtnsEl = document.querySelector('#name-btns');
const resultsEl = document.querySelector('#results');
const resetBtnEl = document.querySelector('#reset-btn');

// Två arrayer för studenter man redan gissat på
const guessedStudents = [];
const guessedStudentsWrong = [];

// Variabler som kommer användas senare
let index
let correctStudent
let emptyGuessedStudents
let emptyGuessedStudentsWrong
let refillStudents

// Shufflearray funktion för att blanda en array slumpmässigt
const shuffleArray = (array) => {
	for (var i = array.length - 1; i > 0; i--) {	
		var j = Math.floor(Math.random() * (i + 1));	
		var temp = array[i];	
		array[i] = array[j];	
		array[j] = temp;	
		}	
	return array;	
}

// Vad som händer när man klickar på start
startBtnEl.addEventListener('click', e => {

	// Lägger till och/eller tar bort "display: none;" på samtliga element
	startBtnEl.classList.add('d-none');
	quizContainerEl.classList.remove('d-none');

	// Tar bort CSS stilklass (height: 75vh;) från #main-container
	mainContainerEl.classList.remove('vh-75');

	// Blandar objekten i "students"
	shuffleArray(students);
	// Kallar på showName() funktionen
	showName();
});

// Här börjar spelet
function showName() {

	// Tar en slumpmässig index mellan 0-3
	const studentSlice = students.slice(0, 4);
	index = Math.floor(Math.random() * 4)

	// Rätt student kan vara mellan index 0-3 på knapparna
	correctStudent = studentSlice[index];

	// Blandar studentSlice
	shuffleArray(studentSlice);

	// Lägger in elevernas namn
	nameBtnsEl.innerHTML = `
		<div id="name-btns" class="btn-grid m-auto col-lg-9 col-md-9 col-sm-11">
			<div class="row justify-content-between">
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${studentSlice[0].name}</button>
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${studentSlice[1].name}</button>
			</div>
			<div class="row justify-content-between">
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${studentSlice[2].name}</button>
				<button class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark">${studentSlice[3].name}</button>
			</div>
		</div>`;

	// Lägger in den korrekta elevens bild
	imgEl.innerHTML = `<img src="${correctStudent.image}" alt="" class="w-100">`

	// Click event listener för namnknapparna, kallar på funktionen "deleteEventListener"
	nameBtnsEl.addEventListener('click', deleteEventListener)
}

// Funktionen deleteEventListener
const deleteEventListener = function (e) {
	if (e.target.tagName === "BUTTON" && e.target.innerText === correctStudent.name) {
		e.target.classList.remove('bg-primary');
		e.target.classList.add('bg-success');
		guessedStudents.push(students[index]);
	} else if (e.target.tagName === "BUTTON" && e.target.innerText !== correctStudent.name) {
		e.target.classList.remove('bg-primary');
		e.target.classList.add('bg-danger');
		guessedStudentsWrong.push(students[index]);
	} else if (e.target.tagName === "DIV") {
		return;
	}

	// Tar bort CSS klassen "display: none;"
	nextBtnEl.classList.remove('d-none');

	// Tar bort event listenern (behövde göra detta för att undvika bugg)
	nameBtnsEl.removeEventListener('click', deleteEventListener);
}

// Event listener för "Nästa" knappen
nextBtnEl.addEventListener('click', e => {
	// Tar bort "Nästa" knappen
	nextBtnEl.classList.add('d-none');

	// Stoppar spelet efter 20 elever
	if (students.length <= 20) {

		// Lägger till och/eller tar bort "display: none;" på samtliga element
		imgEl.classList.add('d-none');
		nameBtnsEl.classList.add('d-none');
		nextBtnEl.classList.add('d-none');
		resultsEl.classList.remove('d-none');

		// Lägger in resultatet på skärmen
		resultsEl.innerHTML = `
		<h2 class="d-flex justify-content-center text-align-start">Du fick ${guessedStudents.length} rätt av 20</h3>

        <div class="row justify-content-center">
            <button id="reset-btn" class="btn text-white col-lg-5 col-md-5 col-sm-12 my-2 bg-primary btn-outline-dark d-flex justify-content-center">Kör igen</button>
        </div>
		`
	} 

	// Tar bort eleven
	students.splice(index, 1);

	// Blandar "students" arrayen
	shuffleArray(students);

	// Startar nästa runda
	showName();
});

// Resultaten
resultsEl.addEventListener('click', e => {
	if (e.target.tagName === "BUTTON") {

		// Tömmer arrayerna på studenterna man gissat på
		emptyGuessedStudents = guessedStudents.splice(0, guessedStudents.length);
		emptyGuessedStudentsWrong = guessedStudentsWrong.splice(0,guessedStudentsWrong.length);

		// Sätter in studenterna i original arrayen igen
		refillStudents = students.concat(emptyGuessedStudents, emptyGuessedStudentsWrong);
		students = refillStudents

		// Lägger till och/eller tar bort "display: none;" på samtliga element
		resultsEl.classList.add('d-none');
		imgEl.classList.remove('d-none');
		nameBtnsEl.classList.remove('d-none');
		nextBtnEl.classList.remove('d-none');

		// Blandar objekten i "students"
		shuffleArray(students);
		// Startar om spelet
		showName();
	}
});