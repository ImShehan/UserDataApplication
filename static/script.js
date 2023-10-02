function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const empCode = document.getElementById('empCode').value;
    const opticalMessage = document.getElementById('opticalMessage').value;

    const formData = {
        name,
        email,
        empCode,
        opticalMessage
    };

    fetch('/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Data saved successfully!');
        document.getElementById('userForm').reset();
    })
    .catch(error => console.error(error));
}
