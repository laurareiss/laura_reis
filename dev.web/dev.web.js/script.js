function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    var formFields = document.getElementsByClassName('form-field');
    for (var i = 0; i < formFields.length; i++) {
        formFields[i].classList.add('field-' + (i+1));
    }

    document.querySelector('.submit-button').classList.add('custom-button-class');

    document.getElementById('error-message').textContent = '';
    document.getElementById('success-message').textContent = '';
}

function validateForm () {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    document.getElementById('sucess-message').textContent = 'Registro bem-sucedido!';

    return false;
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById('close-icon').addEventListener('click', closeModal);