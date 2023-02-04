const btnOpenModal = document.querySelector('.professions-btn');
const body = document.querySelector('body');
const contactsModal = document.querySelector('.contacts__modal');

const name = document.getElementById('name');
const phoneOrMail = document.getElementById('phone/email');
const profession = document.getElementById('profession');
const sendRequestBtn = document.getElementById('send-request-btn');

const dataRequest = {
  name: '',
  phoneOrMail: '',
  profession: ''
};

btnOpenModal.addEventListener('click', () => {
    contactsModal.style.display = 'flex';
})

body.addEventListener('click', (e) => {
    if(e.target.className === 'contacts__modal') {
        contactsModal.style.display = 'none';
    }
})

sendRequestBtn.addEventListener('click', (e) => {
    dataRequest.name = name.value;
    dataRequest.phoneOrMail = phoneOrMail.value;
    dataRequest.profession = profession.value
    console.log(dataRequest)
})