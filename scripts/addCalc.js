var dynId = 0;
var negId = 0;
function idGen() {
	dynId++;
	negId = dynId - 1;
	//console.log(dynId);
}
var addArr = [];
function mainPush() {
	addArr.push("mainAdd");
	console.log(addArr);
}
function piePush() {
	addArr.push("pieAdd");
	console.log(addArr);
}
var lvnArr = [];
function zeroPush() {
	lvnArr.push("zero");
}
function plusPush() {
	lvnArr.push("plus");
}
function negPush() {
	lvnArr.push("neg");
}

function addDorm() {
	document.getElementById("mainList").style.display = "none";
	document.getElementById("subInput" + negId).style.display = "none";
	document.getElementById("dormInput").style.display = "block";
}
function add() {
	document.getElementById("mainInput").style.display = "none";
	document.getElementById("mainList").style.display = "block";
	var dormInput = document.getElementById("dormInput");
	var subInput = document.createElement("div");
	subInput.className = "inner";
	subInput.id = "subInput" + dynId;
	dormInput.appendChild(subInput);
	var interNavBar = document.getElementById("interNavBar");
	subInput.appendChild(interNavBar);
	var interNav = document.createElement("ul");
	interNav.className = "interNav";
	interNavBar.appendChild(interNav);
	var gableNav = document.createElement("li");
	gableNav.className = "gableNav";
	gableNav.innerHTML = "Gable";
	interNav.appendChild(gableNav);
	var gableNavArr = document.getElementsByClassName("gableNav");
	for (var i = 0; i < gableNavArr.length; i++) {
		gableNavArr[i].onclick = function gable() {
			document.getElementById("hipInput").style.display = "none";
		}
	}
	var hipNav = document.createElement("li");
	hipNav.className = "hipNav";
	hipNav.innerHTML = "Hipped";
	interNav.appendChild(hipNav);
	var hipNavArr = document.getElementsByClassName("hipNav");
	for (var i = 0; i < hipNavArr.length; i++) {
		hipNavArr[i].onclick = function hip() {
			document.getElementById("hipInput").style.display = "block";
		}
	}
	var shedNav = document.createElement("li");
	shedNav.className = "shedNav";
	shedNav.innerHTML = "Shed";
	interNav.appendChild(shedNav);
	var gableInput = document.getElementById("gableInput");
	subInput.appendChild(gableInput);
	var dimAdorm = document.createElement("input");
	dimAdorm.className = "dimAdorm";
	dimAdorm.placeholder = "Dimension A";
	dimAdorm.value = 10;
	gableInput.appendChild(dimAdorm);
	var dimBdorm = document.createElement("input");
	dimBdorm.className = "dimBdorm";
	dimBdorm.placeholder = "Dimension B";
	dimBdorm.value = 10;
	gableInput.appendChild(dimBdorm);
	var dorm_pitch = document.createElement("input");
	dorm_pitch.className = "dorm_pitch";
	dorm_pitch.placeholder = "Pitch";
	dorm_pitch.value = 10;
	gableInput.appendChild(dorm_pitch);
	var dimCdorm = document.createElement("input");
	dimCdorm.className = "dimCdorm";
	dimCdorm.placeholder = "Dimension C";
	dimCdorm.value = 6;
	gableInput.appendChild(dimCdorm);
	var hipInput = document.getElementById("hipInput");
	subInput.appendChild(hipInput);
	var dormPie_pitch = document.createElement("input");
	dormPie_pitch.className = "dormPie_pitch";
	dormPie_pitch.id = "dormPie_pitch" + dynId;
	dormPie_pitch.placeholder = "Pie Pitch";
	hipInput.appendChild(dormPie_pitch);
/*	var rtn = document.createElement("input");
	rtn.type = "checkbox";
	rtn.className = "rtn";
	subInput.appendChild(rtn);
	var rtnLabel = document.createElement("label");
	rtnLabel.className = "rtnLabel";
	rtnLabel.innerHTML = "Add Return";
	subInput.appendChild(rtnLabel);
*/	
	var doneBtn = document.getElementById("doneBtn");
	subInput.appendChild(doneBtn);
	var done = document.createElement("button");
	done.className = "done";
	done.innerHTML = "Done";
	doneBtn.appendChild(done);
	var doneArr = document.getElementsByClassName("done");
	for (var i = 0; i < doneArr.length; i++) {
		doneArr[i].onclick = function done() {
		document.getElementById("dormInput").style.display = "none";
		document.getElementById("mainInput").style.display = "block";
		}
	}
}
/*
function dormDisplay() {
	if (addArr[addArr.length - 1] === "mainAdd") {
		document.getElementById("dormPie_pitch" + dynId).style.display = "none";
	}
	else if (addArr[addArr.length - 1] === "pieAdd") {
	//	console.log(addArr[addArr.length-1]);
		document.getElementById("dormPie_pitch" + dynId).style.display = "block";
	}
}*/
document.getElementById("mainAdd").addEventListener("click", idGen);
document.getElementById("mainAdd").addEventListener("click", add);
document.getElementById("mainAdd").addEventListener("click", mainPush);
document.getElementById("mainPieAdd").addEventListener("click", idGen);
document.getElementById("mainPieAdd").addEventListener("click", add);
document.getElementById("mainPieAdd").addEventListener("click", piePush);
document.getElementById("gableDorm").addEventListener("click", addDorm);
//document.getElementById("gableDorm").addEventListener("click", dormDisplay);


document.getElementById("calc").onclick = function calc() {

	// main

	var main_run = +document.getElementById("dimAmain").value / 2;
	var main_slope = +document.getElementById("main_pitch").value / 12;
	var main_rise = main_run * main_slope;
	var main_hyp = Math.sqrt(Math.pow(main_rise, 2) + Math.pow(main_run, 2));
	var main_surA = (+document.getElementById("dimBmain").value * main_hyp) * 2;

	var mainPie_slope = (+document.getElementById("mainPie_pitch").value) / 12;
	var mainPie_peak = main_rise / mainPie_slope;
	var mainPie_hyp = Math.sqrt(Math.pow(main_rise, 2) + Math.pow(mainPie_peak, 2));
	var mainPie_hip = (Math.sqrt(Math.pow((main_run / 2), 2) + Math.pow(mainPie_hyp, 2))) * 4;
	var mainPie_surA = (main_run * mainPie_hyp) * 2;
	var mainPieCvr_surA = (mainPie_peak * main_hyp) * 2;

	var main_totalSurA = (main_surA + mainPie_surA - mainPieCvr_surA);
	var main_totalCap = (+document.getElementById("dimBmain").value - (mainPie_peak * 2) + mainPie_hip);

	// mainDormers

		var mainDorm_runArr = document.getElementsByClassName("dimAdorm");
		var mainDormOvr_peakArr = document.getElementsByClassName("dimBdorm"); 
		var mainDorm_pitchArr = document.getElementsByClassName("dorm_pitch");
		var mainDormOvr_lvnArr = document.getElementsByClassName("dimCdorm");
		var mainDormOvr_runArr = document.getElementsByClassName("dimDdorm");
		var mainDormPie_pitchArr = document.getElementsByClassName("dormPie_pitch");
		var mainDorm_totalSurA = 0;
		var mainDorm_totalCap = 0;
		var mainDorm_totalValley = 0;
	
	for (var i = 0; i < mainDorm_runArr.length; i++) {
		console.log(addArr[i]);

		var mainDorm_run = +mainDorm_runArr[i].value / 2;
		var mainDorm_slope = +mainDorm_pitchArr[i].value / 12;
		var mainDorm_rise = mainDorm_run * mainDorm_slope;
		var mainDorm_hyp = Math.sqrt(Math.pow(mainDorm_rise, 2) + Math.pow(mainDorm_run, 2));
		if (addArr[i] === "mainAdd") {
			var mainDorm_peak = mainDorm_rise / main_slope;
		}
		else if (addArr[i] === "pieAdd") {
			mainDorm_peak = mainDorm_rise / mainPie_slope;
		}
		var mainDorm_valley = (Math.sqrt(Math.pow(mainDorm_peak, 2) + Math.pow(mainDorm_hyp, 2))) * 2;
		var mainDorm_surA = mainDorm_peak * mainDorm_hyp;

		var mainDormCvr_hyp = Math.sqrt(Math.pow(mainDorm_rise, 2) + Math.pow(mainDorm_peak));
		var mainDormCvr_surA = mainDorm_run * mainDorm_hyp;

		var mainDormOvr_peak = +mainDormOvr_peakArr[i].value;
		var mainDormOvr_lvn = +mainDormOvr_lvnArr[i].value;
		if (lvnArr[i] === "zero") {
			var mainDormOvr_surA = (mainDormOvr_peak * mainDorm_hyp) * 2;
			var mainDormOvrH_surA = 0;
		} 
		else if (lvnArr[i] === "plus") {
			mainDormOvr_surA = (mainDormOvr_peak * mainDorm_hyp) * 2;
			if (addArr[i] === "mainAdd") {
				var mainDormOvrH_rise = mainDormOvr_peak * main_slope;
			}
			else if (addArr[i] === "pieAdd") {
				mainDormOvrH_rise = mainDormOvr_peak * mainPie_slope;
			}
			var mainDormOvrH_hyp = Math.sqrt(Math.pow(mainDormOvrH_rise, 2) + Math.pow(mainDormOvr_peak, 2));
			if (mainDormOvr_lvn >= mainDormOvrH_hyp) {
				var mainDormOvrH_surA = (mainDormOvrH_hyp * (mainDorm_run * 2)) - ((mainDormOvrH_hyp * 2) + (mainDorm_run * 2));
			}
			else if (mainDormOvr_lvn < mainDormOvrH_hyp) {
				mainDormOvrH_surA = (mainDormOvr_lvn * (mainDorm_run * 2)) - (mainDormOvr_lvn * 2);
			}
		}
		else if (lvnArr[i] === "neg") {
			var mainDormOvr_run = +mainDormOvr_runArr[i].value / 2;
			var mainDormOvr_rise = mainDormOvr_run * mainDorm_slope;
			var mainDormOvr_hyp = Math.sqrt(Math.pow(mainDormOvr_rise, 2) + Math.pow(mainDormOvr_run, 2));
			mainDormOvr_surA = ((mainDormOvr_peak * mainDormOvr_hyp) * 2) + (mainDormOvr_lvn * 2);
			mainDormOvrH_surA = 0;
		}
/*		var mainDormOvr_rise = mainDormOvr_run * mainDorm_slope;
		var mainDormOvr_hyp = Math.sqrt(Math.pow(mainDormOvr_rise, 2) + Math.pow(mainDormOvr_run, 2));
		var mainDormOvr_peak = +mainDormOvr_peakArr[i].value || 0;
		var mainDormOvr_surA = (mainDormOvr_peak * mainDormOvr_hyp) * 2;

		var mainDormOvrH_rise = mainDormOvr_peak * main_slope;
		var mainDormOvrH_hyp = Math.sqrt(Math.pow(mainDormOvrH_rise, 2) + Math.pow(mainDormOvr_peak, 2))
		if (mainDormOvr_run > mainDorm_run || mainDormOvr_peak === 0) {
			var mainDormOvrH_surA = 0;
		}
		else {
			mainDormOvrH_surA = (mainDormOvrH_hyp + mainDorm_run) * 2;
		}
*/
		var mainDormPie_slope = (+mainDormPie_pitchArr[i].value / 12) || 0;
		if (mainDormPie_slope === 0) {
			var mainDormPie_peak = 0;
		}
		else {
		mainDormPie_peak = mainDorm_rise / mainDormPie_slope;
		}
		var mainDormPie_hyp = Math.sqrt(Math.pow(mainDorm_rise, 2) + Math.pow(mainDormPie_peak, 2));
		var mainDormPie_hip = Math.sqrt(Math.pow(mainDormPie_hyp, 2) + Math.pow(mainDorm_run, 2));
		var mainDormPie_surA = mainDorm_run * mainDormPie_hyp;
		var mainDormPieCvr_surA = mainDormPie_peak * mainDorm_hyp;

		var rtnArr = document.getElementsByClassName("rtn");
		var dubGRtnArr = document.getElementsByClassName("dubGRtn");
/*		if (rtnArr[rtnArr.length - 1].checked === true && dubGRtnArr[dubGRtnArr.length - 1] === undefined) {
			var dormRtn = mainDorm_run * 2;
		}
		else {
			dormRtn = 0;
		}
*/


		mainDorm_totalCap += 
		mainDorm_peak 
		+ mainDormOvr_peak 
		- mainDormPie_peak 
		+ mainDormPie_hip;
		mainDorm_totalSurA += 
		mainDorm_surA 
//		+ mainDormOvr_surA 
//		- mainDormOvrH_surA 
		- mainDormCvr_surA
		+ mainDormPie_surA 
		- mainDormPieCvr_surA;
		mainDorm_totalValley += 
		mainDorm_valley;
	}
	var totalSurA = (main_totalSurA + mainDorm_totalSurA) / 33.3;
	var totalCap = (main_totalCap + mainDorm_totalCap) / 29.5;
	var totalValley = mainDorm_totalValley / 8;

	// *test* console.log(dormRtn);console.log(dubGRtnArr[dubGRtnArr.length - 1]);

	document.getElementById("total").innerHTML = 
	"Total SurA: " 
	+ totalSurA.toFixed(1)
	+ " Bundles" 
	+ "<br>Total Cap: " 
	+ totalCap.toFixed(1)
	+ " Bundles"
	+ "<br>Total Valley: "
	+ totalValley.toFixed(1)
	+ " Pieces";

}
