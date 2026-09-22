function createUser(){

    contactList.push(
        {
        name: nameInput,
        phone: phoneInput,
        }
    );
    
    updateView();
}

function deleteUser(index){
    contactList.splice(index, 1);

    updateView();
}

function editUser(){

}