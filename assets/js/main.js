console.log("Test");

function calcValue(event) {
  event.preventDefault();

  //   Inputfeld Usereingabe Geldbetrag
  const userInput = document.getElementById("userInput").value;

  //  Inputfeld Usereingabe Radio (Was soll berechnet werden?)
  const userAufschlag = document.getElementById("nettoZuBrutto").checked;
  const userAbschlag = document.getElementById("bruttoZuNetto").checked;

  //  Inputfeld Usereingabe Radio (Mehrwertsteuersatz)
  const userProzent19 = document.getElementById("steuersatz19").checked;
  const userProzent7 = document.getElementById("steuersatz7").checked;

  //  Ergebnis (Mehrwertsteuersatz Aufschlag)
  const aufschlagMwst19 = userInput * 1.19;
  const aufschlagMwst7 = userInput * 1.07;

  //  Inputfeld Usereingabe Radio (Mehrwertsteuersatz)
  const abschlagMwst19 = (userInput * 100) / 119;
  const abschlagMwst7 = (userInput * 100) / 107;

  //  Outputfeld Endbetrag
  const output = document.getElementById("endbetrag");

  if (userAufschlag == true && userProzent19 == true) {
    output.innerHTML = aufschlagMwst19;
  } else if (userAufschlag == true && userProzent7 == true) {
    output.innerHTML = aufschlagMwst7;
  } else if (userAbschlag == true && userProzent19 == true) {
    output.innerHTML = abschlagMwst19;
  } else if (userAbschlag == true && userProzent7 == true) {
    output.innerHTML = abschlagMwst7;
  }
}
