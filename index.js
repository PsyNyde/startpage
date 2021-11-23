function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	let hour = date.toLocaleString("pl", { hour: "numeric"}); // use 24h time format
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


function lol(){
	const foo = new Date();
	let hour = foo.toLocaleString("pl", { hour: "numeric"});
	var nun = parseInt(hour);
	if (nun >= 6 && nun <= 18){
		document.getElementById("icon").innerHTML = `filter_drama`;
	}
	else if (nun >= 19 && nun<=24){
		document.getElementById("icon").innerHTML = `nights_stay`;
	}
	else if (nun >= 1 && nun <= 5 ){
		document.getElementById("icon").innerHTML = `nights_stay`;
	}
}


showTime();
lol()

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://google.com/?q=';

function submitted(event) {
  event.preventDefault();
  const url = google + q.value;
  const win = window.open(url, '_blank');
  q.value = "";
  win.focus();
}

f.addEventListener('submit', submitted);

var myPix = new Array("assets/1.jpg","assets/2.jpg","assets/3.jpg","assets/4.jpg","assets/5.jpg");

function choosePic() {
	var randomNum = Math.floor(Math.random() * myPix.length);
	document.getElementById("pic").src = myPix[randomNum];
}

choosePic()