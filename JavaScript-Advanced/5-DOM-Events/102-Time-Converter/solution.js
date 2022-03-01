function attachEventsListeners() {
    document.querySelector('main').addEventListener('click', onClick);

    function onClick(ev) {
        const days = document.getElementById('days');
        const hours = document.getElementById('hours');
        const minutes = document.getElementById('minutes');
        const seconds = document.getElementById('seconds');

        if (ev.target.id == 'daysBtn') {
            const daysCount = Number(days.value);
            hours.value = daysCount * 24;
            minutes.value = daysCount * 24 * 60;
            seconds.value = daysCount * 24 * 60 * 60
        } else if (ev.target.id == 'hoursBtn') {
            const hoursCount = Number(hours.value);
            days.value = hoursCount / 24;
            minutes.value = hoursCount * 60;
            seconds.value = hoursCount * 60 * 60;
        } else if (ev.target.id == 'minutesBtn') {
            const minutesCount = Number(minutes.value);
            days.value = minutesCount / 60 / 24;
            hours.value = minutesCount / 60;
            seconds.value = minutesCount * 60;
        } else if (ev.target.id == 'secondsBtn') {
            const secondsCount = Number(seconds.value);
            days.value = secondsCount / 60 / 60 / 24;
            hours.value = secondsCount / 60 / 60;
            minutes.value = secondsCount / 60;
        }
    }
}