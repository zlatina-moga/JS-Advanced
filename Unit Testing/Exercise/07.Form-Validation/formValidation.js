function validate() {
    const userNameElement = document.getElementById('username');
    const emailElement = document.getElementById('email');
    const passwordElement = document.getElementById('password');
    const confirmElement = document.getElementById('confirm-password');
    const companyInfoField = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber')
    let isChecked = false;

    const checkbox = document.getElementById('company').addEventListener('change', (e) => {
        if (e.target.checked){
            isChecked = true;
            companyInfoField.style.display = 'block';           
        } else {
            companyInfoField.style.display = 'none';
        }
    })

    const submitBtn = document.getElementById('submit').addEventListener('click', (e) => {
        e.preventDefault();

        let isValid = true;
        let userNamePattern = /[a-zA-Z0-9]{3,20}/gm;
        if (!userNamePattern.test(userNameElement.value)){
            isValid = false;
            userNameElement.style.borderColor = 'red';
        } else {
            userNameElement.style.border = 'none';
        }

        let emailPattern = /^.*@.*\..*$/;
        if (!emailPattern.test(emailElement.value)){
            isValid = false;
            emailElement.style.borderColor = 'red';
        } else {
            emailElement.style.border = 'none';
        }

        let passwordPattern = /\w{5,15}/gm;
        if (!passwordPattern.test(passwordElement.value) && !passwordPattern.test(confirmElement.value)){
            isValid = false;
            passwordElement.style.borderColor = 'red';
            confirmElement.style.borderColor = 'red';
        } else {
            passwordElement.style.border = 'none';
            confirmElement.style.border = 'none';
        }

        if (passwordElement.value !== confirmElement.value){
            isValid = false;
            passwordElement.style.borderColor = 'red';
            confirmElement.style.borderColor = 'red';
        } else {
            passwordElement.style.border = 'none';
            confirmElement.style.border = 'none';
        }

        if (isChecked){
            const companyPattern = /[0-9]{4}/gm;
            if (!companyPattern.test(companyNumber.value)){
                isValid = false
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.border = 'none';
            }
        }

        if (isValid){
            document.getElementById('valid').style.display = 'block';
        } else {
            document.getElementById('valid').style.display = 'none';
        }
    })
}

