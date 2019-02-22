import './styles.css';
import { ready } from './utils';

ready(() => {
	initialize_page();
});

var tipPercentage: number = 0;

function initialize_page() {

	setButtonDefaults();
	configureEventListeners();
}

function setButtonDefaults() {

	let btn = document.getElementById("button15");
	btn.setAttribute('disabled', '');
	setTippingMessage(btn);

	console.log("Button defaults set");
}

function setTippingMessage(btn: HTMLElement) {
	document.getElementById("hdrPercentage").innerText = "Tip Percentage: " + btn.innerText;
	tipPercentage = Number(btn.innerText.replace('%',''));
}

function enableAllButtons() {
	var list: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

	for (var i = 0; i < list.length; i++) {
		list[i].removeAttribute('disabled');
	}
}

function buttonClickEvent(e: Event) {
	enableAllButtons();

	this.setAttribute('disabled', '');
	setTippingMessage(this);
	UpdateOutput();
}


function keyDownEvent(e: KeyboardEvent): boolean {

	// Only allow numeric key entry while preserving standard textbox navigation keys.
	// Also allow comma, period, and negative sign.

	const key: string = e.key;

	switch (key) {
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '.':
		case '-':
		case 'ArrowLeft':
		case 'ArrowRight':
		case 'Backspace':
		case 'Delete':
		case 'End':
		case 'Enter':
		case 'Insert':
		case 'Home':
		case 'Tab':
			return true;
			break;
		default:
			e.preventDefault();
			return false;
	}
}

function onChangeEvent(this: HTMLInputElement, e: Event)
{

	var numVal: number = Number(this.value);
	if(isNaN(numVal)) {
		numVal = 0;
	}

	if( numVal < 0) {
		this.style.borderColor = 'Red';
	}
	else
	{
		this.style.borderColor = '';
	}
	
	UpdateOutput();
}

function UpdateOutput()
{
	const sub: HTMLInputElement = <HTMLInputElement>document.getElementById("billSubtotal");
	const tot: HTMLInputElement = <HTMLInputElement>document.getElementById("billTotal");

	const billSubtotal: number = Number(sub.value);
	const billTotal: number = Number(tot.value);

	const tip: number = billSubtotal * tipPercentage/100;
	const grandTotal: number = billTotal + tip;

	document.getElementById("tipAmount").innerText = "Tip Amount: $" + tip;
	document.getElementById("grandTotal").innerText = "Bill Total + Tip: $" + grandTotal;
}



function configureEventListeners() {

	const btnList: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
	for (var i = 0; i < btnList.length; i++) {
		btnList[i].addEventListener('click', buttonClickEvent, false);
	}

	const inputList: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("input");
	for (var i = 0; i < inputList.length; i++) {
		inputList[i].addEventListener('keydown', keyDownEvent);
	}

	for (var i = 0; i < inputList.length; i++) {
		inputList[i].addEventListener('change', onChangeEvent);
	}
}

