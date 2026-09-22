function updateView(){
    let html = /*HTML*/`
    
        <h2>Enkel Kontaktbok</h2>

        <table>
            <tr>
                <th>Navn</th>
                <th>Telefonnummer</th>        
            </tr>
        
    `;

    for(let i = 0; i < contactList.length; i++){
        html += createRow(i);
    }
    
    
    html += /*HTML*/`
        </table>
        <button onclick="addUser()">Legg til bruker</button>

    `;
    
    model.app.innerHTML = html;
}

function createRow(i){
    
        return /*HTML*/ `
            <tr>
                <td>${contactList[i].name}</td>
                <td>${contactList[i].phone}</td>

                <td>
                    <button onclick="deleteUser(${i})">Slett</button>
                    <button onclick="editUser()">Rediger</button>
                </td>
            </tr>
        `;

}

function addUser() {


    let html = ``;
    
    html += /*HTML*/`

        <div>
            <p><input onchange="nameInput = this.value" placeholder="Navn"></p>
            <p><input onchange="phoneInput = Number(this.value)" placeholder="Telefon"></p>
            
            <button onclick="createUser()">Opprette bruker</button>
        </div>
    `;

    model.app.innerHTML += html;
}

updateView();