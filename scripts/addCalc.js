
// dormers

document.getElementById("add").onclick = function addDormer() {
	var container = document.getElementById('container');
	var dimAdorm = document.createElement("input");
	var dimBdorm = document.createElement("input");
	var dorm_pitch = document.createElement("input");
	var dimCdorm = document.createElement("input");
	dimAdorm.className = "dimAdorm";
	dimAdorm.placeholder = "Dimension A";
	dimAdorm.value = 6;
	dimBdorm.className = "dimBdorm";
	dimBdorm.placeholder = "Dimension B";
	dimBdorm.value = 8;
	dorm_pitch.className = "dorm_pitch";
	dorm_pitch.placeholder = "Pitch";
	dorm_pitch.value = 10;
	dimCdorm.className = "dimCdorm";
	dimCdorm.placeholder = "Dimension C";
	dimCdorm.value = 4;
	container.appendChild(dimAdorm);
	container.appendChild(dimBdorm);
	container.appendChild(dorm_pitch);
	container.appendChild(dimCdorm);
}

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
	var mainPie_surA = main_run * mainPie_hyp;
	var mainPie_hip = (Math.sqrt(Math.pow((main_run / 2), 2) + Math.pow(mainPie_hyp, 2))) * 4;
	var mainPieCvr_surA = (mainPie_peak * main_hyp) * 2;

	var main_totalSurA = (main_surA + mainPie_surA - mainPieCvr_surA);
	var main_totalCap = (+document.getElementById("dimBmain").value - (mainPie_peak * 2) + mainPie_hip);

	// dormers

		var mainDorm_runArr = document.getElementsByClassName('dimAdorm');
		var mainDorm_slopeArr = document.getElementsByClassName('dorm_pitch');
		var mainDormOvr_runArr = document.getElementsByClassName("dimBdorm");
		var mainDormOvr_peakArr = document.getElementsByClassName("dimCdorm"); 
		var mainDorm_totalSurA = 0;
		var mainDorm_totalCap = 0;
	
	for (var i = 0; i < mainDorm_runArr.length; i++) {

		var mainDorm_run = (+mainDorm_runArr[i].value / 2);
		var mainDorm_slope = (+mainDorm_slopeArr[i].value / 12);
		var mainDorm_rise = mainDorm_run * mainDorm_slope;
		var mainDorm_hyp = Math.sqrt(Math.pow(mainDorm_rise, 2) + Math.pow(mainDorm_run, 2));
		var mainDorm_peak = mainDorm_rise / main_slope;
		var mainDorm_valley = (Math.sqrt(Math.pow(mainDorm_peak, 2) + Math.pow(mainDorm_hyp, 2))) * 2;
		var mainDorm_surA = mainDorm_peak * mainDorm_hyp;

		var mainDormCvr_hyp = Math.sqrt(Math.pow(mainDorm_rise, 2) + Math.pow(mainDorm_peak));
		var mainDormCvr_surA = mainDorm_run * mainDorm_hyp;

		var mainDormOvr_run = (+mainDormOvr_runArr[i].value / 2);
		var mainDormOvr_rise = mainDormOvr_run * mainDorm_slope;
		var mainDormOvr_hyp = Math.sqrt(Math.pow(mainDormOvr_rise, 2) + Math.pow(mainDormOvr_run, 2));
		var mainDormOvr_peak = (+mainDormOvr_peakArr[i].value || 0);
		var mainDormOvr_surA = (mainDormOvr_peak * mainDormOvr_hyp) * 2;

		var mainDormOvrH_rise = mainDormOvr_peak * main_slope;
		var mainDormOvrH_hyp = Math.sqrt(Math.pow(mainDormOvrH_rise, 2) + Math.pow(mainDormOvr_peak, 2))

		if (mainDormOvr_run > mainDorm_run || mainDormOvr_peak === 0) {
			var mainDormOvrH_surA = 0;
		}
		else {
			mainDormOvrH_surA = (mainDormOvrH_hyp * 2) + mainDorm_run;
		}

		mainDorm_totalCap += mainDorm_peak + mainDormOvr_peak;
		mainDorm_totalSurA += mainDorm_surA + mainDormOvr_surA + mainDormOvrH_surA - mainDormCvr_surA;
	}
	var totalSurA = (main_totalSurA + mainDorm_totalSurA) / 33.3;
	var totalCap = (main_totalCap + mainDorm_totalCap) / 29.5;
	var totalValley = mainDorm_valley / 8;

	document.getElementById("total").innerHTML = 
	"Total SurA: " 
	+ totalSurA.toFixed(2)
	+ " Bundles" 
	+ "<br>Total Cap: " 
	+ totalCap.toFixed(2)
	+ " Bundles"
	+ "<br>Total Valley: "
	+ totalValley.toFixed(2)
	+ " Pieces";
}
