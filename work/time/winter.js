document.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clock');
    console.log(clock); 

    if (clock) {
        setInterval(() => {
            const date = new Date();
            clock.innerHTML = date.toLocaleTimeString();
        }, 1000);
    } else {
        console.error('Clock element not found.');
    }
});
