function extractText() {
    // TODO
    const items = Array.from(document.getElementById('items').children);
    const text = items.map(e => e.textContent);
    document.getElementById('result').value = text.join('\n');
}