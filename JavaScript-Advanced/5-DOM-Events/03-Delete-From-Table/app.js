function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    const resultElement = document.getElementById('result')
    let arr = [...document.querySelectorAll('tbody tr')];
    
    let isNotFound = true;
    for (const row of arr) {
        
        if (row.children[1].textContent ==input.value) {
            row.remove();
            resultElement.textContent = 'Deleted';
            isNotFound = false;
        }
    }
    console.log(arr);
    if (isNotFound == true) {
        resultElement.textContent = 'Not found.';
    }
}