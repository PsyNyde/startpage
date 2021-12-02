//* Time function
function showTime() {
	const date = new Date();
	let today = date.toLocaleString("en", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "numeric" }); // uses 24h time format
	let minute = date.toLocaleString("en", { minute: "2-digit" });
	let second = date.toLocaleString("en", { second: "2-digit" });
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "2-digit" });
	let year = date.toLocaleString("en", { year: "numeric" });

	minute = addZero(minute);
	second = addZero(second);

	document.getElementById(
		"date"
	).innerHTML = `${today}, ${hour}:${minute}:${second} | ${day}/${month}/${year}`;
	setTimeout(showTime, 0);
}
function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();

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
document.addEventListener("DOMContentLoaded", function () {
	var image = document.getElementById("image");
	// onClick's logic below:
	image.addEventListener("click", function () {
		choosePic();
		document.getElementById("image").contentWindow.location.reload(true);
	});

	var icon = document.getElementById("icon");
	// onClick's logic below:
	icon.addEventListener("click", function () {
		dark();
		window.localStorage.setItem("dark-theme", true);
	});
	var dragTheme = window.localStorage.getItem("dark-theme");
	if (dragTheme == "false") {
		document.body.classList.add("light");
	} else if (dragTheme == "false") {
		document.body.classList.remove("light");
	}
});
choosePic();

//* Search box
const f = document.getElementById("form");
const q = document.getElementById("query");
const se = "https://google.com/search?q=";

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
//Todo: Save theme data on local storage
function dark() {
	document.body.classList.toggle("light");
	if (document.getElementById("icon").innerHTML == "filter_drama") {
		document.getElementById("icon").innerHTML = `nights_stay`;
		window.localStorage.setItem("dark-theme", true);
	} else {
		document.getElementById("icon").innerHTML = `filter_drama`;
		window.localStorage.setItem("dark-theme", false);
	}
}
