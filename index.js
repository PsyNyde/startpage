//* Time function
function updateClock() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let today = date.toLocaleString("en", { weekday: "long" });
	let ampm = hours >= 12 ? "pm" : "am";
	hours = hours % 12;
	hours = hours ? hours : 12;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	document.getElementById(
		"date"
	).innerHTML = `${today}, ${hours}:${minutes}${ampm} |  ${date.toLocaleString(
		"default",
		{ month: "short", day: "numeric", year: "numeric" }
	)}`;
	setTimeout(updateClock, 10000);
}
updateClock();

//* Random Image and On click Image change
var myPix = new Array(
	"assets/1.jpg",
	"assets/2.jpg",
	"assets/3.jpg",
	"assets/4.jpg",
	"assets/5.jpg"
);

function choosePic() {
	var randomNum = Math.floor(Math.random() * myPix.length);
	document.getElementById("pic").src = myPix[randomNum];
}

choosePic();

//* Search box
const f = document.getElementById("form");
const q = document.getElementById("query");
const se = "https://yetanothergoogle.herokuapp.com/search?q=";

function submitted(event) {
	event.preventDefault();
	if (q.value.startsWith(":")) {
		const query = q.value.substring(q.value.indexOf(":") + 1);

		const url = "https://" + query;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	} else if (q.value.startsWith("youtube:") || q.value.startsWith("yt:")) {
		const query = q.value.substring(q.value.indexOf(":") + 1);

		const url = "https://www.youtube.com/results?search_query=" + query;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	} else if (q.value.startsWith("github:") || q.value.startsWith("git:")) {
		const query = q.value.substring(q.value.indexOf(":") + 1);

		const url = "https://github.com/search?q=" + query;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	} else if (
		q.value.startsWith("duckduckgo:") ||
		q.value.startsWith("ddg:")
	) {
		const query = q.value.substring(q.value.indexOf(":") + 1);
		const url = "https://duckduckgo.com/?q=" + query;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	} else if (q.value.startsWith("reddit:")) {
		const query = q.value.substring(q.value.indexOf(":") + 1);
		const url = "https://www.reddit.com/search/?q=" + query;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	} else if (q.value.startsWith("facebook:") || q.value.startsWith("fb:")) {
		const query = q.value.substring(q.value.indexOf(":") + 1);
		const url = "https://www.facebook.com/search/top/?q=" + query;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	} else if (q.value.startsWith("devient:") || q.value.startsWith("dev:")) {
		const query = q.value.substring(q.value.indexOf(":") + 1);
		const url = "https://www.deviantart.com/search?q=" + query;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	} else {
		const url = se + q.value;
		const win = window.open(url, "_blank");
		q.value = "";
		win.focus();
	}
}

f.addEventListener("submit", submitted);

document.body.addEventListener("keypress", function () {
	document.getElementById("query").focus();
});


//* Theme management functions
//spawn the dark mode storage ;p
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
	// document.querySelector("body").classList.remove("light");
	// document.querySelector("body").classList.add("dark");
	document.documentElement.setAttribute("color-mode", "light");
	document.getElementById("icon").innerHTML = `nights_stay`;
	// Set localstorage to darkMode enabled
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	// document.querySelector("body").classList.remove("dark");
	// document.querySelector("body").classList.add("light");
	document.documentElement.setAttribute("color-mode", "dark");
	document.getElementById("icon").innerHTML = `filter_drama`;
	// Set localstorage to darkMode disabled
	localStorage.setItem("darkMode", "disabled");
};

if((darkMode == "enabled") || (window.matchMedia('(prefers-color-scheme: dark)').matches && darkMode !== "disabled")){
	enableDarkMode();
  } else {
	disableDarkMode();
}

document.addEventListener("DOMContentLoaded", function () {
	var image = document.getElementById("image");
	// onClick's logic below:
	image.addEventListener("click", function () {
		choosePic();
		//document.getElementById("image").contentWindow.location.reload(true); why the hell it didn't work without this before but works fine now -,-😪 & also gives errors -,- btw byeeee
	});

	var icon = document.getElementById("icon");
	// onClick's logic below:
	icon.addEventListener("click", function () {
		darkMode = localStorage.getItem("darkMode");

		darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
	});
});
