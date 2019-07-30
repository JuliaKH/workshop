let isLoginFormOpen = false;

const signInButton = document.querySelector('.sign-in__button');

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

signInButton.addEventListener('click',  () => {
    if(isLoginFormOpen){
        closeForm();
        isLoginFormOpen = false;
    }
    else{
        openForm();
        isLoginFormOpen = true;
    }
});

document.addEventListener('click', (event) => {

    if(event.target !== signInButton && !event.target.closest('.form-container')){
        closeForm();
    }
});

export {closeForm, signInButton};