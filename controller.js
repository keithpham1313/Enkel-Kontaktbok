// OPPRETTE BRUKER
function createUser(){

    contactList.push(
        {
        name: nameInput,
        phone: phoneInput,
        }
    );
    
    updateView();
}

// SLETT BRUKER
function deleteUser(index){
    contactList.splice(index, 1);

    updateView();
}

// REDIGER BRUKER
function editUser(index){
    contactList[index].editMode = true;

    updateView();
}

// LAGRE BRUKER
function saveUser(index){
    contactList[index].editMode = false;

    updateView();
}