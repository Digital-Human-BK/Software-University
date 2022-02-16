function editElement(ref, match, replacer) {
    ref.textContent = ref.textContent.replace(new RegExp (match, 'g'), replacer);
}