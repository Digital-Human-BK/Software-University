function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', convertUnits);

    function convertUnits(ev) {
        const count = document.getElementById('inputDistance').value;
        const inUnit = document.getElementById('inputUnits').value;
        const outUnit = document.getElementById('outputUnits').value;

        //convert input unit to meters
        const fromUnitToMeter = {
            km(n) { return n * 1000 },
            m(n) { return n * 1 },
            cm(n) { return n * 0.01 },
            mm(n) { return n * 0.001 },
            mi(n) { return n * 1609.34 },
            yrd(n) { return n * 0.9144 },
            ft(n) { return n * 0.3048 },
            in(n) { return n * 0.0254 },
        }

        let meter = fromUnitToMeter[inUnit](count);

        //conver from meter to desired unit;
        const fromMeterToUnit = {
            km(m) { return m / 1000 },
            m(m) { return m / 1 },
            cm(m) { return m / 0.01 },
            mm(m) { return m / 0.001 },
            mi(m) { return m / 1609.34 },
            yrd(m) { return m / 0.9144 },
            ft(m) { return m / 0.3048 },
            in(m) { return m / 0.0254 },
        }
        document.getElementById('outputDistance').value = fromMeterToUnit[outUnit](meter);
    }
}