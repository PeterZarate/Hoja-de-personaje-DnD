function generateCharacter() {
    const name = document.getElementById("name").value;
    const race = document.getElementById("race").value;
    const charClass = document.getElementById("class").value;
    const strength = document.getElementById("strength").value;
    const dexterity = document.getElementById("dexterity").value;
    const constitution = document.getElementById("constitution").value;
    const intelligence = document.getElementById("intelligence").value;
    const wisdom = document.getElementById("wisdom").value;
    const charisma = document.getElementById("charisma").value;

    const characterSheet= `
    <h3>${name}</h3>
    <p><strong>Raza:</strong> ${race}</p>
    <p><strong>Clase:</strong> ${charclass}</p>
    <h4>Atributos</h4>
    <p>Fuerza: ${strength}</p>
    <p>Destreza: ${dexterity}</p>
    <p>Constitución: ${constitution}</p>
    <p>Inteligencia: ${intelligence}</p>
    <p>Sabiduría: ${wisdom}</p>
    <p>Carisma: ${charisma}</p> 
    `;

    const sheetDiv = document.getElementById("characterSheet");
    sheetDiv.innerHTML= characterSheet;
    sheetDiv.style.display= "block";
    
}