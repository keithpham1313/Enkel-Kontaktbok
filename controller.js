// VISES NÅR MAN TRYKKER PÅ "LEGG TIL BRUKER"
function addUser() {

    model.data.addMode = true;
        
    updateView();
}

// OPPRETTE BRUKER
function createUser(){

    model.data.contactList.push(
        {
        name: model.data.nameInput,
        phone: model.data.phoneInput,
        }
    );

    model.data.addMode = false;
        
    updateView();
}


// SLETT BRUKER
function deleteUser(index){
    model.data.contactList.splice(index, 1);

    updateView();
}

// REDIGER BRUKER
function editUser(index){
    model.data.contactList[index].editMode = true;

    updateView();
}

// LAGRE BRUKER
function saveUser(index){
    model.data.contactList[index].editMode = false;

    updateView();
}

// ANGRE-KNAPP FOR ADDUSER()
function cancelAddUser(){

    model.data.addMode = false;

    updateView();
}

// ANGRE-KNAPP FOR REDIGER-MODUS
function cancelEditUser(index){

    model.data.contactList[index].editMode = false;

    updateView()
}





