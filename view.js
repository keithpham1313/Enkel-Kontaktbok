function updateView(){
    let html = /*HTML*/`
    
    <h2>Enkel Kontaktbok</h2>
    
    `;

    for (let i = 0; i < contactList.length; i++)
        html += /*HTML*/ `
            <ul>
                <p>Navn: ${contactList[i].name}</p>
                <p>Tlf.: ${contactList[i].phone}</p>
            </ul>
        `;

        html += /*HTML*/`
            <button onclick="createUser()">Opprette bruker</button>
        `;
    model.app.innerHTML = html;
}


function createUser() {


    let html = /*HTML*/`

        <div>
            <p><input onchange="nameInput = this.value"></p>
            <p><input onchange="phoneInput = Number(this.value)"></p>
        </div>
    `;

    return html;
}

updateView();