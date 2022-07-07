let myData = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
        backgroundColor: ["hsl(10, 79%, 65%)"],
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
    }]
};

let myOption = { 
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            xAlign: "center",
            yAlign: "bottom",
            callbacks: {
                title: function (context) {
                    context = "$" + context[0].formattedValue;
                    return context;
                },
                label: function (context) {
                    context = "";
                    return context;
                }, 
            },
            backgroundColor: "hsl(25, 47%, 15%)",
            titleColor: "hsl(27, 66%, 92%)", 
            titleMarginBottom: 0,
            marginBottom: 20,
            padding: 5,
            caretSize: 0,
        },
    },     
    scales: {
        x: {
            grid: {
                display: false,
                drawBorder: false,
                offset: true
            },
        },
        y: { 
            grid: {
                display: false,
                drawBorder: false,
            },
            ticks: {
                display: false
            },
        },
    },
    elements: {
        bar: {
            backgroundColor: function(context) {
                const today = new Date().getDay() - 1;
                const index = context.dataIndex;
                return index === today ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
            },
            hoverBackgroundColor: function(context) {
                const today = new Date().getDay() - 1;
                const index = context.dataIndex;
                return index === today ? 'hsl(186, 34%, 70%)' : 'hsl(10, 79%, 75%)';
            },
            borderRadius: 5,
            borderSkipped: false,
        },
    },
    layout: {
        padding: {
            left: -20,
            bottom: -5,
            top: 5,
        },
    },
};

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: myData,
    options: myOption
});

let getLastWeekSpending = () => {
    let total = 0;
    let amount = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
    
    for (let i = 0; i < amount.length; i++) {
        total += amount[i];
    }        
    return total;
}

function createEventListeners() {
    document.getElementById('lastweekspending').innerHTML = getLastWeekSpending();
}

window.addEventListener('load', createEventListeners, false);