var balanceBtn = document.getElementById('balance-btn');
var addBtn = document.getElementById('add-btn');
var clearBtn = document.getElementById('clear-btn');
var cals = document.getElementById('cals');
var prots = document.getElementById('prots');
var fats = document.getElementById('fats');
var carbs = document.getElementById('carbs');
var protsUsed = document.getElementById('prots-used');
var fatsUsed = document.getElementById('fats-used');
var carbsUsed = document.getElementById('carbs-used');
var protsLeft = document.getElementById('prots-left');
var fatsLeft = document.getElementById('fats-left');
var carbsLeft = document.getElementById('carbs-left');
var log = document.getElementById('log');
var PTot = 0;
var FTot = 0;
var CTot = 0;
var PSum = 0;
var FSum = 0;
var CSum = 0;

balanceBtn.onclick = calcBalance;
addBtn.onclick = addFood;
clearBtn.onclick = clearFood;

function calcBalance() {
	var weight = document.getElementById('weight').value;
	var program = document.getElementById('program').value;
	var total = weight * program;
	cals.innerHTML = total;
	PTot = Math.floor(total * 0.3 / 4);
	FTot = Math.floor(total * 0.1 / 9);
	CTot = Math.floor(total * 0.6 / 4);
	prots.innerHTML = PTot;
	fats.innerHTML = FTot;
	carbs.innerHTML = CTot;
	protsUsed.innerHTML = 0;
	fatsUsed.innerHTML = 0;
	carbsUsed.innerHTML = 0;
	protsLeft.innerHTML = Math.floor(total * 0.3 / 4);
	fatsLeft.innerHTML = Math.floor(total * 0.1 / 9);
	carbsLeft.innerHTML = Math.floor(total * 0.6 / 4);
}

function addFood() {
	var p = document.getElementById('prot').value;
	var f = document.getElementById('fat').value;
	var c = document.getElementById('carb').value;
	var g = document.getElementById('grams').value;
	if (g != 0) {
		PSum += Number(p) * g / 100;
		FSum += Number(f) * g / 100;
		CSum += Number(c) * g / 100;
		protsUsed.innerHTML = PSum.toFixed(1);
		fatsUsed.innerHTML = FSum.toFixed(1);
		carbsUsed.innerHTML = CSum.toFixed(1);
		protsLeft.innerHTML = (PTot - PSum).toFixed(1);
		fatsLeft.innerHTML = (FTot - FSum).toFixed(1);
		carbsLeft.innerHTML = (CTot - CSum).toFixed(1);
		document.getElementById('prot').value = "";
		document.getElementById('fat').value = "";
		document.getElementById('carb').value = "";
		document.getElementById('grams').value = "";
		var product = document.getElementById('product').value;
		document.getElementById('product').value = "";
		log.innerHTML += "<p>" + product + " " + g + "г.</p>";
	} else alert("Укажите вес продукта");
}

function clearFood() {
	if (confirm("Очистить?")){
		PTot = 0;
		FTot = 0;
		CTot = 0;
		PSum = 0;
		FSum = 0;
		CSum = 0;
		log.innerHTML = "";
		calcBalance();
	}
}
