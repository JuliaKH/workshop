let isLoginFormOpen = false;
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

const signInButton = document.querySelector('.sign-in__button');

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

export {closeForm, signInButton};