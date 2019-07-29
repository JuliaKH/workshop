let isLoginFormOpen = false;
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

let signInButton = document.querySelector('.sign-in__button');

signInButton.addEventListener('click', function () {
  if(isLoginFormOpen){
    closeForm();
    isLoginFormOpen = false;
  }
  else{
    openForm();
    isLoginFormOpen = true;
  }
});
