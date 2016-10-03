
// dormers

document.getElementById("add").onclick = function addDormer() {
	var container = document.getElementById("container");
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
	container.appendChild(dimAdorm);
	container.appendChild(dimBdorm);
	container.appendChild(dorm_pitch);
	container.appendChild(dimCdorm);
}

document.getElementById("calc").onclick = function calc() {

	// main

/*	var main_run = +document.getElementById("dimAmain").value / 2;
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

	var main_totalSurA = (main_surA + mainPie_surA - mainPieCvr_surA) / 33.3;
	var main_totalCap = (+document.getElementById("dimBmain").value - (mainPie_peak * 2) + mainPie_hip) / 29.5;
*/
	// dormers

		var mainDorm_run = document.getElementsByClassName("dimAdorm"); // / 2
		var mainDorm_slope = document.getElementsByClassName("dorm_pitch"); // / 12
/*		var mainDorm_rise = main_run * mainDorm_slope;
		var mainDorm_hyp = Math.sqrt(Math.pow(mainDorm_rise, 2) + Math.pow(mainDorm_run, 2));
		var mainDorm_peak = mainDorm_rise / main_slope;
		var mainDorm_valley = (Math.sqrt(Math.pow(mainDorm_peak, 2) + Math.pow(mainDorm_hyp, 2))) * 2;
		var mainDorm_surA = mainDorm_peak * mainDorm_hyp;

		var mainDormCvr_hyp = Math.sqrt(Math.pow(mainDorm_rise, 2) + Math.pow(mainDorm_peak));
		var mainDormCvr_surA = mainDorm_run * mainDorm_hyp;

*/		var mainDormOvr_run = document.getElementsByClassName("dimBdorm"); // / 2
//		var mainDormOvr_rise = mainDormOvr_run * mainDorm_slope;
//		var mainDormOvr_hyp = Math.sqrt(Math.pow(mainDormOvr_rise, 2) + Math.pow(mainDormOvr_run, 2));
		var mainDormOvr_peak = document.getElementsByClassName("dimCdorm"); // || 0
//		var mainDormOvr_surA = (mainDormOvr_peak * mainDormOvr_hyp) * 2;
		
		var mainDorm_totalSurA = 0;
//		var mainDorm_totalCap = 0;
	
/*	for (var i = 0; i < mainDorm_run.length; i++) {
		mainDorm_totalSurA += +mainDorm_surA[i].value + +mainDormOvr_surA[i].value - +mainDormCvr_surA[i].value;
		mainDorm_totalCap += +mainDorm_peak[i].value + +mainDormOvr_peak[i].value;
	}
	var totalSurA = (main_totalSurA + +mainDorm_totalSurA) / 33.3;
	var totalCap = (main_totalCap + +mainDorm_totalCap) / 29.5;
	var totalValley = mainDorm_valley / 8;

	// *test* document.getElementById("total").innerHTML = +mainDorm_run[0].value;
	document.getElementById("total").innerHTML = 
	"Total SurA: " 
	+ main_totalSurA.toFixed(2)
	+ " Bundles" 
	+ "<br>Total Cap: " 
	+ main_totalCap.toFixed(2)
	+ " Bundles"
	+ "<br>Total Valley: "
	+ totalValley.toFixed(2)
	+ " Pieces";
*/

// *test* document.getElementById("total").innerHTML = ;

	for (var i = 0; i < mainDorm_run.length; i++) {
			mainDorm_totalSurA += +mainDorm_run[i].value + +mainDormOvr_run[i].value + +mainDormOvr_peak[i].value + +mainDorm_slope[i].value;
		}	
	document.getElementById("total").innerHTML = mainDorm_totalSurA;
}