function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const result = document.getElementById('result');

    function onMove(event){
        const offset = event.offsetX;
        const percent = Math.floor(offset / event.target.clientWidth * 100);

        result.textContent = `${percent}%`;
    }
}