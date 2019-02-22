import './styles.css';
import { ready } from './utils';

//const button10 = document.getElementById('button10');
//const button15 = document.getElementById('button15');
//const button20 = document.getElementById('button20');
//const button25 = document.getElementById('button25');

ready(() => {
    initialize_page();
    console.log('Ready to Party');});

function initialize_page() {
    
    setButtonDefaults();
    cofigureEventListeners();
}

function setButtonDefaults()  { 

    let btn = document.getElementById("button15");
    btn.setAttribute( 'disabled', '');
    console.log("Button defaults set");
}

function buttonClickEvent(e: Event) : void  {
    enableAllButtons();
    e.srcElement.setAttribute('disabled', '');
}

function enableAllButtons() {
    var list : HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");
        
    for(var i=0; i< list.length; i++)
    {
        list[i].removeAttribute('disabled');
    }
}

function cofigureEventListeners() {

    var list : HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");      
    for(var i=0; i< list.length; i++)
    {
        list[i].addEventListener('click', buttonClickEvent, false);
    }
}

