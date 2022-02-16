function colorize() {
    let elements = document.querySelectorAll('tr:nth-child(even)');
    
    Array.from(elements).forEach(e => {
        e.style.background = 'Teal'
    })
}