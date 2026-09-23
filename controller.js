// OPPRETTE BRUKER
function createUser(){

    model.data.contactList.push(
        {
        name: model.data.nameInput,
        phone: model.data.phoneInput,
        }
    );

    model.data.addMode = false;
        //Setter addMode tilbake til false-state for å skjule input-feltene   
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

// SØKEFELT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!