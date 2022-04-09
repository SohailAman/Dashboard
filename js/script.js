////////..............Navbar............////////
let main = document.getElementById('main');
let slidebar = document.getElementById('slidebar');
let trigger = document.getElementById('toggler');
let spn1 = document.getElementById('spn1');
let spn2 = document.getElementById('spn2');
let spn3 = document.getElementById('spn3');

// Labels
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name3 = document.getElementById('name3');
const name4 = document.getElementById('name4');
const name5 = document.getElementById('name5');

let x = true;

name1.classList.add('small-view');
name2.classList.add('small-view');
name3.classList.add('small-view');
name4.classList.add('small-view');
name5.classList.add('small-view');

trigger.addEventListener('click', () => {

    if (x == true) {
        name1.classList.remove('small-view');
        name2.classList.remove('small-view');
        name3.classList.remove('small-view');
        name4.classList.remove('small-view');
        name5.classList.remove('small-view');
        name1.classList.add('translate');
        name2.classList.add('translate');
        name3.classList.add('translate');
        name4.classList.add('translate');
        name5.classList.add('translate');


        slidebar.classList.remove('low')
        main.classList.remove('high');
        slidebar.classList.add('less')
        main.classList.add('more');


        spn1.classList.remove('rotateX');
        spn2.style.opacity = '1';
        spn3.classList.remove('rotateY');

        x = false;
    } else {
        name1.classList.remove('translate');
        name2.classList.remove('translate');
        name3.classList.remove('translate');
        name4.classList.remove('translate');
        name5.classList.remove('translate');
        name1.classList.add('small-view');
        name2.classList.add('small-view');
        name3.classList.add('small-view');
        name4.classList.add('small-view');
        name5.classList.add('small-view');

        slidebar.classList.remove('less');
        main.classList.remove('more');
        slidebar.classList.add('low')
        main.classList.add('high');

        spn1.classList.add('rotateX');
        spn2.style.opacity = '0';
        spn3.classList.add('rotateY');
        x = true;
    }

})



////////////////........Switch Content..............//////////

// contents
const Btn1 = document.getElementById('Btn1');
const Btn2 = document.getElementById('Btn2');
const Btn3 = document.getElementById('Btn3');
const Btn4 = document.getElementById('Btn4');
const Btn5 = document.getElementById('Btn5');

//sections
const cont1 = document.getElementById('cont1');
const cont2 = document.getElementById('cont2');
const cont3 = document.getElementById('cont3');
const cont4 = document.getElementById('cont4');
const cont5 = document.getElementById('cont5');

name1.style.color = "#fff";

Btn1.addEventListener('click', (e) => {
    e.preventDefault();

    Btn1.classList.add('active');
    Btn2.classList.remove('active');
    Btn3.classList.remove('active');
    Btn4.classList.remove('active');
    Btn5.classList.remove('active');

    name1.style.color = "#fff";
    name2.style.color = "#5c687f";
    name3.style.color = "#5c687f";
    name4.style.color = "#5c687f";
    name5.style.color = "#5c687f";

    cont1.style.display = "block";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
});
Btn2.addEventListener('click', (f) => {
    f.preventDefault();

    Btn1.classList.remove('active');
    Btn2.classList.add('active');
    Btn3.classList.remove('active');
    Btn4.classList.remove('active');
    Btn5.classList.remove('active');

    name1.style.color = "#5c687f";
    name2.style.color = "#fff";
    name3.style.color = "#5c687f";
    name4.style.color = "#5c687f";
    name5.style.color = "#5c687f";

    cont1.style.display = "none";
    cont2.style.display = "block";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "none";
});
Btn3.addEventListener('click', (g) => {
    g.preventDefault();

    Btn1.classList.remove('active');
    Btn2.classList.remove('active');
    Btn3.classList.add('active');
    Btn4.classList.remove('active');
    Btn5.classList.remove('active');

    name3.style.color = "#fff";
    name2.style.color = "#5c687f";
    name1.style.color = "#5c687f";
    name4.style.color = "#5c687f";
    name5.style.color = "#5c687f";

    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "block";
    cont4.style.display = "none";
    cont5.style.display = "none";
});
Btn4.addEventListener('click', (h) => {
    h.preventDefault();

    Btn1.classList.remove('active');
    Btn2.classList.remove('active');
    Btn3.classList.remove('active');
    Btn4.classList.add('active');
    Btn5.classList.remove('active');

    name4.style.color = "#fff";
    name2.style.color = "#5c687f";
    name3.style.color = "#5c687f";
    name1.style.color = "#5c687f";
    name5.style.color = "#5c687f";

    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "block";
    cont5.style.display = "none";
});
Btn5.addEventListener('click', (i) => {
    i.preventDefault();

    Btn1.classList.remove('active');
    Btn2.classList.remove('active');
    Btn3.classList.remove('active');
    Btn4.classList.remove('active');
    Btn5.classList.add('active');

    name1.style.color = "#5c687f";
    name2.style.color = "#5c687f";
    name3.style.color = "#5c687f";
    name4.style.color = "#5c687f";
    name5.style.color = "#fff";

    cont1.style.display = "none";
    cont2.style.display = "none";
    cont3.style.display = "none";
    cont4.style.display = "none";
    cont5.style.display = "block";
});





























////////////////........Switch content..............//////////



////////////////........ Charts.Js..............//////////

/// Line Chart ///

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Applications',
        backgroundColor: 'rgba(235, 19, 19, 0.9)',
        pointBackgroundColor: '#00c7d6',
        borderWidth: 1,
        borderColor: '#045398',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointHoverRadius: 5,
        pointBorderColor: '#fff',
        data: [60, 45, 80, 30, 35, 55, 25, 80, 40, 50, 80, 50]
    }]
};

const option = {
    plugins: {
        legend: {
            display: false
        }
    },
    responsve: true,
    maintainAspectRatio: true,
    animation: {
        easing: 'easeInOut',
        duration: 520
    },
    scale: {
        yAxes: [{
            ticks: {
                fontColor: '#fff'
            },
            gridLines: {
                color: '#fff',
                lineWidth: 2
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: '#fff',
            }
        }]
    },
    elements: {
        line: {
            tension: .4
        }
    },
    point: {
        backgroundColor: '#00c7d6'
    },
    tooltips: {
        titleFontFamily: 'Poppins',
        backgroundColor: '#fff',
        titleFontColor: 'white',
        caretSize: 5,
        cornerRadius: 2,
        xPadding: 10,
        yPadding: 10
    }
}
const config = {
    type: 'line',
    lineColor: 'red',
    lineWidth: 5,
    data: data,
    options: option
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

///

/// Doughnut Chart ///

const dataSet = {
    labels: [
        'Applications',
        'Shortlisted',
        'On-hold',
        'Rejected',
    ],
    datasets: [{
        label: 'Acquisitions',
        data: [64, 18, 10, 8],
        backgroundColor: [
            '#ff7dcb',
            '#00cfde',
            '#fdac42',
            '#ff5c5c'

        ],
        hoverOffset: 4,
        borderColor: '#01081f',
    }]
};
const opts = {
    plugins: {
        legend: {
            display: false,
        },
    },
    responsve: true,
    maintainAspectRatio: true,
    animation: {
        easing: 'easeInOut',
        duration: 520
    },
};

const configur = {
    type: 'doughnut',
    data: dataSet,
    options: opts,

};
const chart = new Chart(
    document.getElementById('chart'),
    configur
);

///