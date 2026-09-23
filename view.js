// VISER INNHOLDET
function updateView() {
    let contactList = model.data.contactList;

    let html = /*HTML*/`
    
        <h2>Enkel Kontaktbok</h2>

        <input oninput="searchInput = this.value">
        <button onclick="searchUser()">Søk</button>
        <br>
        <br>

        <table>
            <tr>
                <th>Navn</th>
                <th>Telefonnummer</th>        
            </tr>
        
    `;

    for (let i = 0; i < contactList.length; i++) {
        html += generateContacts(i);
        html += editContacts(i);
    }
        //addMode viser ikke denne før du trykker på "Legg til bruker", da kjører addUser() og gjør addMode til true.
    if(model.data.addMode){
        html += /*HTML*/`
            <tr>
                <td><input oninput="model.data.nameInput = this.value" placeholder="Navn"></td>
                <td><input oninput="model.data.phoneInput = Number(this.value)" placeholder="Telefon"></td>
                
                <td>
                    <button onclick="createUser()">Opprette bruker</button>
                    <button onclick="cancelAddUser()">Angre</button>
                </td>
            </tr>
        `;
    }
        //addMode vil vise dette siden den er satt til false i modellen
    else{
        html += /*HTML*/`
            <tr>
                <td></td>
                <td></td>
                <th>
                    <button onclick="addUser()">Legg til bruker</button>
                </th>
            </tr>
        `;
    }
        html += /*HTML*/ `</table>`;
        //Lukker tabellen!

    model.app.innerHTML = html;
}

// HENTER FREM DE EKSISTERENDE KONTAKTENE
function generateContacts(i) {

    if (!model.data.contactList[i].editMode)
        return /*HTML*/ `
            <tr>
                <td>${model.data.contactList[i].name}</td>
                <td>${model.data.contactList[i].phone}</td>

                <td>
                    <button onclick="deleteUser(${i})">Slett</button>
                    <button onclick="editUser(${i})">Rediger</button>
                </td>
            </tr>
        `;
    return '';      //Måtte ha denne mot slutten for at det ikke skal vises 3x "undefined"
}

// VISER EDIT MODE NÅR REDIGER-KNAPPEN TRYKKES
function editContacts(i) {

    if (model.data.contactList[i].editMode)
        return /*HTML*/ `
            <tr>
                <td>
                    <input 
                        onchange="model.data.contactList[${i}].name = this.value"
                        value="${model.data.contactList[i].name}" 
                        type="text"
                    >
                </td>
                
                <td>
                    <input 
                        onchange="model.data.contactList[${i}].phone = Number(this.value)"
                        value="${model.data.contactList[i].phone}" 
                        type="number"
                    >
                </td>

                <td>
                    <button onclick="saveUser(${i})">Lagre</button>
                    <button onclick="cancelEditUser(${i})">Angre</button>
                </td>
            </tr>
        `;
    return '';
}


// SØKEFELT
function searchUser(){

    let nameInLowerCase = contactList[i].name.toLowerCase();    //navnene i contactList.name blir omgjort til småbokstaver
    let searchInLowerCase = searchInput.toLowerCase();          //det du skriver i søkefeltet blir omgjort til småbokstaver

    for(let i = 0; i < contactList.length; i++){
        if(nameInLowerCase.includes(searchInLowerCase)){
            html += generateContacts(i);

        }
    }
    model.app.innerHTML += html;        //+= fordi jeg ønsker at tabellen erstattes
    
}


updateView();