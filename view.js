// VISER INNHOLDET
function updateView() {
    let contactList = model.data.contactList;

    let html = /*HTML*/`
    
        <h2>Enkel Kontaktbok</h2>

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
                <td><input onchange="model.data.nameInput = this.value" placeholder="Navn"></td>
                <td><input onchange="model.data.phoneInput = Number(this.value)" placeholder="Telefon"></td>
                
                <td>
                    <button onclick="createUser()">Opprette bruker</button>
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
            
            </table>
        `;
    }
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
                </td>
            </tr>
        `;
    return '';
}

// VISES NÅR MAN TRYKKER PÅ "LEGG TIL BRUKER"
function addUser() {

    model.data.addMode = true;
        //Her aktiverer vi addMode for at feltene skal synes
    updateView();
}

updateView();