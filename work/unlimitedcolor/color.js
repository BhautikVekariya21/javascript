const randomcolor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalid = null;
const originalColor = '#E6E6FA';

const changebackgroundcolor = () => {
    if (!intervalid) {
        intervalid = setInterval(() => {
            document.body.style.backgroundColor = randomcolor();
        }, 1717);
    }
};

const stopbackgroundcolor = () => {
    clearInterval(intervalid);
    intervalid = null;
    document.body.style.backgroundColor = originalColor;
    console.log('stop button pressed');
};


document.querySelector('.start').addEventListener('click', changebackgroundcolor);
document.querySelector('.stop').addEventListener('click', stopbackgroundcolor);
