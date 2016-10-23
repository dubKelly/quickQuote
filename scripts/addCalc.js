var dynId = 0;
var negId = 0;
function idGen() {
	dynId++;
	negId = dynId - 1;
}
var addArr = [];
function mainPush() {
	addArr.push("mainAdd");
}
function piePush() {
	addArr.push("pieAdd");
}
var x = 0;
var dubGToggleArr = ["break"];
var y = 0;
var dubGRtnToggleArr = [0];
var z = 0;
var rtnToggleArr = [0];

function addInter() {
	document.getElementById("mainList").style.display = "none";
	document.getElementById("subInput" + negId).style.display = "none";
	document.getElementById("interInput").style.display = "block";
}
function add() {
	document.getElementById("mainInput").style.display = "none";
	document.getElementById("mainList").style.display = "block";
	var interInput = document.getElementById("interInput");
	var hack = document.getElementById("hack");
	var subInput = document.createElement("div");
	subInput.className = "inner";
	subInput.id = "subInput" + dynId;
	interInput.appendChild(subInput);
	var interNav = document.createElement("ul");
	interNav.className = "interNav";
	subInput.appendChild(interNav);
	var gableNav = document.createElement("li");
	gableNav.className = "gableNav";
	gableNav.innerHTML = "Gable";
	interNav.appendChild(gableNav);
	var gableNavArr = document.getElementsByClassName("gableNav");
	for (var i = 0; i < gableNavArr.length; i++) {
		gableNavArr[i].onclick = function gable() {
			if (shedInput.parentNode === subInput) {
				hack.appendChild(shedInput);
				subInput.appendChild(gableInput);
				gableInput.appendChild(done);
				if (interPie_pitch.parentNode === gableInput) {
					gableInput.removeChild(interPie_pitch);
				}
			}
			else {
				gableInput.removeChild(interPie_pitch);
				subInput.appendChild(gableInput);
			}
		}
	}
	var hipNav = document.createElement("li");
	hipNav.className = "hipNav";
	hipNav.innerHTML = "Hipped";
	interNav.appendChild(hipNav);
	var hipNavArr = document.getElementsByClassName("hipNav");
	for (var i = 0; i < hipNavArr.length; i++) {
		hipNavArr[i].onclick = function hip() {
			if (shedInput.parentNode === subInput) {
				hack.appendChild(shedInput);
				subInput.appendChild(gableInput);
				gableInput.appendChild(interPie_pitch);
				gableInput.appendChild(done);
			}
			else {
				gableInput.appendChild(interPie_pitch);
			}
		}
	}
	var shedNav = document.createElement("li");
	shedNav.className = "shedNav";
	shedNav.innerHTML = "Shed";
	interNav.appendChild(shedNav);
	var shedNavArr = document.getElementsByClassName("shedNav");
	for (var i = 0; i < shedNavArr.length; i++) {
		shedNavArr[i].onclick = function shed() {
			hack.appendChild(gableInput);
			subInput.appendChild(shedInput);
			shedInput.appendChild(done);
		}
	}
	var gableInput = document.createElement("div");
	gableInput.className = "gableInput";
	subInput.appendChild(gableInput);
	var dimAinter = document.createElement("input");
	dimAinter.className = "dimAinter";
	dimAinter.placeholder = "Dimension A";
	dimAinter.value = 10;
	gableInput.appendChild(dimAinter);
	var dimBinter = document.createElement("input");
	dimBinter.className = "dimBinter";
	dimBinter.placeholder = "Dimension B";
	dimBinter.value = 10;
	gableInput.appendChild(dimBinter);
	var inter_pitch = document.createElement("input");
	inter_pitch.className = "inter_pitch";
	inter_pitch.placeholder = "Pitch";
	inter_pitch.value = 10;
	gableInput.appendChild(inter_pitch);
	var dimCinter = document.createElement("input");
	dimCinter.className = "dimCinter";
	dimCinter.placeholder = "Dimension C";
	dimCinter.value = 6;
	gableInput.appendChild(dimCinter);
	var dubG = document.createElement("p");
	dubG.className = "dubG";
	dubG.innerHTML = "dubG";
	gableInput.appendChild(dubG);
	var dubGArr = document.getElementsByClassName("dubG");
	for (var i = 0; i < dubGArr.length; i++) {
		dubGArr[i].onclick = function dubGToggle() {
			if (dubGToggleArr[dubGToggleArr.length - 1] === "break") {
				x = 1 - x;
				dubGToggleArr.push(x);
				dubG.style.color = "green";
				gableInput.appendChild(dubGRtn);
				gableInput.appendChild(dimEinter);
				gableInput.appendChild(dimFinter);
			}
			else if (x === 1) {
				x = 1 - x;
				dubGToggleArr.pop();
				dubGToggleArr.push(x);
				dubG.style.color = "white";
				gableInput.removeChild(dubGRtn);
				gableInput.removeChild(dimEinter);
				gableInput.removeChild(dimFinter);
			}
			else if (x === 0) {
				x = 1 - x;
				dubGToggleArr.pop();
				dubGToggleArr.push(x);
				dubG.style.color = "green";
				gableInput.appendChild(dubGRtn);
				gableInput.appendChild(dimEinter);
				gableInput.appendChild(dimFinter);
			}
		}
	}
	var dubGRtn = document.createElement("p");
	dubGRtn.className = "dubGRtn";
	dubGRtn.innerHTML = "dubGRtn";
	interInput.appendChild(dubGRtn);
	var dubGRtnArr = document.getElementsByClassName("dubGRtn");
	for (var i = 0; i < dubGRtnArr.length; i++) {
		dubGRtnArr[i].onclick = function dubGRtnToggle() {
			if (y === 0) {
				y = 1 - y;
				dubGRtnToggleArr.pop();
				dubGRtnToggleArr.push(y);
				dubGRtn.style.color = "green";
			}
			else if (y === 1) {
				y  = 1 - y;
				dubGRtnToggleArr.pop();
				dubGRtnToggleArr.push(y);
				dubGRtn.style.color = "white";
			}
		}
	}
	var rtn = document.createElement("p");
	rtn.className = "rtn";
	rtn.innerHTML = "rtn";
	gableInput.appendChild(rtn);
	var rtnArr = document.getElementsByClassName("rtn");
	for (var i = 0; i < rtnArr.length; i++) {
		rtnArr[i].onclick = function rtnToggle() {
			if (z === 0) {
				z = 1 - z;
				rtnToggleArr.pop();
				rtnToggleArr.push(z);
				rtn.style.color = "green";
			}
			else if (z === 1) {
				z  = 1 - z;
				rtnToggleArr.pop();
				rtnToggleArr.push(z);
				rtn.style.color = "white";
			}
		}
	}
	var dimEinter = document.createElement("input");
	dimEinter.className = "dimEinter";
	dimEinter.placeholder = "Dimension E";
	var dimFinter = document.createElement("input");
	dimFinter.className = "dimFinter";
	dimFinter.placeholder = "Dimension F";
	var interPie_pitch = document.createElement("input");
	interPie_pitch.className = "interPie_pitch";
	interPie_pitch.placeholder = "Pie Pitch";
	var shedInput = document.createElement("div");
	shedInput.className = "shedInput";
	hack.appendChild(shedInput);
	var dimAshed = document.createElement("input");
	dimAshed.className = "dimAshed";
	dimAshed.placeholder = "Dimension A";
	shedInput.appendChild(dimAshed);
	var dimBshed = document.createElement("input");
	dimBshed.className = "dimBshed";
	dimBshed.placeholder = "Dimension B";
	shedInput.appendChild(dimBshed);
	var done = document.createElement("button");
	done.className = "done";
	done.innerHTML = "Done";
	gableInput.appendChild(done);
	var doneArr = document.getElementsByClassName("done");
	for (var i = 0; i < doneArr.length; i++) {
		doneArr[i].onclick = function done() {
		document.getElementById("interInput").style.display = "none";
		document.getElementById("mainInput").style.display = "block";
		dubGToggleArr.push("break");
		x = y = z = 0;
		}
	}
}

document.getElementById("mainAdd").addEventListener("click", idGen);
document.getElementById("mainAdd").addEventListener("click", add);
document.getElementById("mainAdd").addEventListener("click", mainPush);
document.getElementById("mainPieAdd").addEventListener("click", idGen);
document.getElementById("mainPieAdd").addEventListener("click", add);
document.getElementById("mainPieAdd").addEventListener("click", piePush);
document.getElementById("gableInter").addEventListener("click", addInter);

document.getElementById("calc").onclick = function calc() {

	// main

	var main_run = +document.getElementById("dimBmain").value / 2;
	var main_slope = +document.getElementById("main_pitch").value / 12;
	var main_rise = main_run * main_slope;
	var main_hyp = Math.sqrt(Math.pow(main_rise, 2) + Math.pow(main_run, 2));
	var main_surA = (+document.getElementById("dimAmain").value * main_hyp) * 2;

	var mainPie_slope = (+document.getElementById("mainPie_pitch").value) / 12;
	var mainPie_peak = main_rise / mainPie_slope;
	var mainPie_hyp = Math.sqrt(Math.pow(main_rise, 2) + Math.pow(mainPie_peak, 2));
	var mainPie_hip = (Math.sqrt(Math.pow((main_run / 2), 2) + Math.pow(mainPie_hyp, 2))) * 4;
	var mainPie_surA = (main_run * mainPie_hyp) * 2;
	var mainPieCvr_surA = (mainPie_peak * main_hyp) * 2;

	var main_totalSurA = (main_surA + mainPie_surA - mainPieCvr_surA);
	var main_totalCap = (+document.getElementById("dimAmain").value - (mainPie_peak * 2) + mainPie_hip);

	if ((mainPie_peak * 2) > +document.getElementById("dimAmain").value) {
		console.log("Check Pie Pitch");
	}

	// mainInter

		var mainInter_runArr = document.getElementsByClassName("dimAinter");
		var mainInterOvr_peakArr = document.getElementsByClassName("dimBinter"); 
		var mainInter_pitchArr = document.getElementsByClassName("inter_pitch");
		var mainInterOvr_lvnArr = document.getElementsByClassName("dimCinter");
		var mainInterOvr_runArr = document.getElementsByClassName("dimDinter");
		var mainInterDubG_runArr = document.getElementsByClassName("dimEinter");
		var mainInterDubG_peakArr = document.getElementsByClassName("dimFinter");
		var mainInterPie_pitchArr = document.getElementsByClassName("interPie_pitch");
		var dimAshedArr = document.getElementsByClassName("dimAshed");
		var dimBshedArr = document.getElementsByClassName("dimBshed");
		var mainInter_totalSurA = 0;
		var mainInter_totalCap = 0;
		var mainInter_totalValley = 0;
	
	for (var i = 0; i < mainInter_runArr.length; i++) {

		var mainInter_run = +mainInter_runArr[i].value / 2;
		var mainInter_slope = +mainInter_pitchArr[i].value / 12;
		var mainInter_rise = mainInter_run * mainInter_slope;
		var mainInter_hyp = Math.sqrt(Math.pow(mainInter_rise, 2) + Math.pow(mainInter_run, 2));
		if (addArr[i] === "mainAdd") {
			var mainInter_peak = mainInter_rise / main_slope;
		}
		else if (addArr[i] === "pieAdd") {
			mainInter_peak = mainInter_rise / mainPie_slope;
		}
		var mainInter_valley = (Math.sqrt(Math.pow(mainInter_peak, 2) + Math.pow(mainInter_hyp, 2))) * 2;
		var mainInter_surA = mainInter_peak * mainInter_hyp;

		var mainInterCvr_hyp = Math.sqrt(Math.pow(mainInter_rise, 2) + Math.pow(mainInter_peak));
		var mainInterCvr_surA = mainInter_run * mainInter_hyp;

		var mainInterOvr_peak = +mainInterOvr_peakArr[i].value;
		var mainInterOvr_lvn = +mainInterOvr_lvnArr[i].value;
		if (mainInterOvr_lvn === 0) {
			var mainInterOvr_surA = (mainInterOvr_peak * mainInter_hyp) * 2;
			var mainInterOvrH_surA = 0;
		} 
		else if (mainInterOvr_lvn > 0) {
			mainInterOvr_surA = (mainInterOvr_peak * mainInter_hyp) * 2;
			if (addArr[i] === "mainAdd") {
				var mainInterOvrH_rise = mainInterOvr_peak * main_slope;
			}
			else if (addArr[i] === "pieAdd") {
				mainInterOvrH_rise = mainInterOvr_peak * mainPie_slope;
			}
			var mainInterOvrH_hyp = Math.sqrt(Math.pow(mainInterOvrH_rise, 2) + Math.pow(mainInterOvr_peak, 2));
			if (mainInterOvr_lvn >= mainInterOvrH_hyp) {
				var mainInterOvrH_surA = (mainInterOvrH_hyp * (mainInter_run * 2)) - ((mainInterOvrH_hyp * 2) + (mainInter_run * 2));
			}
			else if (mainInterOvr_lvn < mainInterOvrH_hyp) {
				mainInterOvrH_surA = (mainInterOvr_lvn * (mainInter_run * 2)) - (mainInterOvr_lvn * 2);
			}
		}
		else if (mainInterOvr_lvn < 0) {
			var mainInterOvr_run = +mainInterOvr_runArr[i].value / 2;
			var mainInterOvr_rise = mainInterOvr_run * mainInter_slope;
			var mainInterOvr_hyp = Math.sqrt(Math.pow(mainInterOvr_rise, 2) + Math.pow(mainInterOvr_run, 2));
			mainInterOvr_surA = ((mainInterOvr_peak * mainInterOvr_hyp) * 2) + (mainInterOvr_lvn * 2);
			mainInterOvrH_surA = 0;
		}

		if (mainInterPie_pitchArr[i] === undefined) {
			var mainInterPie_slope = 0;
		}
		else {
			mainInterPie_slope = +mainInterPie_pitchArr[i].value / 12;
		}
		if (mainInterPie_slope === 0) {
			var mainInterPie_peak = 0;
		}
		else {
		mainInterPie_peak = mainInter_rise / mainInterPie_slope;
		}
		var mainInterPie_hyp = Math.sqrt(Math.pow(mainInter_rise, 2) + Math.pow(mainInterPie_peak, 2));
		var mainInterPie_hip = Math.sqrt(Math.pow(mainInterPie_hyp, 2) + Math.pow(mainInter_run, 2));
		var mainInterPie_surA = mainInter_run * mainInterPie_hyp;
		var mainInterPieCvr_surA = mainInterPie_peak * mainInter_hyp;

		if (mainInterDubG_runArr[i] === undefined) {
			var mainInterDubG_run = 0;
		}
		else {
			mainInterDubG_run = +mainInterDubG_runArr[i].value / 2;
		}
		if (mainInterDubG_peakArr[i] === undefined) {
			mainInterDubG_peak = 0;
		}
		else {
			mainInterDubG_peak = +mainInterDubG_peakArr[i].value;
		}
		var mainInterDubG_rise = mainInterDubG_run * mainInter_slope;
		var mainInterDubG_hyp = Math.sqrt(Math.pow(mainInterDubG_rise, 2) + Math.pow(mainInterDubG_run, 2));
		var mainInterDubG_surA = ((mainInterDubG_peak * mainInterDubG_hyp) * 2) + mainInterDubG_hyp;

		if (mainInterOvr_lvn >= 0 && dubGToggleArr[i] === 1) {
			if (rtnToggleArr[i] === 1 && dubGRtnToggleArr[i] === 1) {
				var mainInter_totalRtn = mainInter_run * 2;
			}
			else if (rtnToggleArr[i] === 1 && dubGRtnToggleArr[i] === 0) {
				mainInter_totalRtn = (mainInter_run * 2) - (mainInterDubG_run * 2);
			}
			else if (rtnToggleArr[i] === 0 && dubGRtnToggleArr[i] === 1) {
				mainInter_totalRtn = mainInterDubG_run * 2;
			}
			else {
				mainInter_totalRtn = 0;
			}
		}
		else if (mainInterOvr_lvn >= 0 && dubGToggleArr[i] === 0 || mainInterOvr_lvn >= 0 && dubGToggleArr[i] === "break") {
			if (rtnToggleArr === 1) {
				mainInter_totalRtn = mainInter_run * 2;
			}
			else {
				mainInter_totalRtn = 0;
			}
		}
		else if (mainInterOvr_lvn < 0 && dubGToggleArr[i] === 1) {
			if (rtnToggleArr[i] === 1 && dubGRtnToggleArr[i] === 1) {
				mainInter_totalRtn = mainInterOvr_run * 2;
			}
			else if (rtnToggleArr[i] === 1 && dubGRtnToggleArr[i] === 0) {
				mainInter_totalRtn = (mainInterOvr_run * 2) - (mainInterDubG_run * 2);
			}
			else if (rtnToggleArr[i] === 0 && dubGRtnToggleArr[i] === 1) {
				mainInter_totalRtn = mainInterDubG_run * 2;
			}
			else {
				mainInter_totalRtn = 0;
			}
		}
		else if (mainInterOvr_lvn < 0 && dubGToggleArr[i] === 0 || mainInterOvr_lvn < 0 && dubGToggleArr[i] === "break") {
			if (rtnToggleArr[i] === 1) {
				mainInter_totalRtn = mainInterOvr_run * 2;
			}
			else {
				mainInter_totalRtn = 0;
			}
		}
		if (dimAshedArr[i] === undefined || dimBshedArr[i] === undefined) {
			var dimAshed = 0;
			var dimBshed = 0;
		}
		else {
			dimAshed = +dimAshedArr[i].value;
			dimBshed = +dimBshedArr[i].value;
		}
		var mainShed_surA = dimAshed * dimBshed;

		mainInter_totalCap += 
		mainInter_peak 
		+ mainInterOvr_peak 
		- mainInterPie_peak 
		+ mainInterPie_hip;
		mainInter_totalSurA += 
		mainInter_surA 
		+ mainInterOvr_surA 
		- mainInterOvrH_surA 
		- mainInterCvr_surA
		+ mainInterPie_surA 
		- mainInterPieCvr_surA
		+ mainInterDubG_surA
		+ mainInter_totalRtn
		+ mainShed_surA;
		mainInter_totalValley += 
		mainInter_valley;
	}
	var totalSurA = (main_totalSurA + mainInter_totalSurA) / 33.3;
	var totalCap = (main_totalCap + mainInter_totalCap) / 29.5;
	var totalValley = mainInter_totalValley / 8;

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
