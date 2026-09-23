// VISER INNHOLDET
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
        html += generateContacts(i);
        html += editContacts(i);
    }
    
    
    html += /*HTML*/`
        <tr>
            <button onclick="addUser()">Legg til bruker</button>
        </tr>
        
        </table>
    `;
    
    model.app.innerHTML = html;
}

// HENTER FREM DE EKSISTERENDE KONTAKTENE
function generateContacts(i){
    if(!contactList[i].editMode)
        return /*HTML*/ `
            <tr>
                <td>${contactList[i].name}</td>
                <td>${contactList[i].phone}</td>

                <td>
                    <button onclick="deleteUser(${i})">Slett</button>
                    <button onclick="editUser(${i})">Rediger</button>
                </td>
            </tr>
        `;
}

// VISER FREM EDIT MODE NÅR REDIGER-KNAPPEN TRYKKES
function editContacts(i){
    if(contactList[i].editMode)
        return /*HTML*/ `
            <tr>
                <td>
                    <input 
                        onchange="contactList[${i}].name = this.value"
                        value="${contactList[i].name}" 
                        type="text"
                    >
                </td>
                
                <td>
                    <input 
                        onchange="contactList[${i}].phone = Number(this.value)"
                        value="${contactList[i].phone}" 
                        type="number"
                    >
                </td>

                <td>
                    <button onclick="saveUser(${i})">Lagre</button>
                </td>
            </tr>
        `;
}

// VISES NÅR MAN TRYKKER PÅ "LEGG TIL BRUKER"
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