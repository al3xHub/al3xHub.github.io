const chart_data = {
    labels:['Python', 'HTML & CSS', 'JavaScript','PHP', 'Java'],
    data:[35,25,25,10,5]
}
const chart_data2 = {
    labels:['Django', 'React', 'Node'],
    data:[60,30,10]
}
const my_chart = document.querySelector('.my-chart');

const my_chart2 = document.querySelector('.my-chart2');

new Chart(my_chart,{
    type: 'doughnut',
    data:{
        labels: chart_data.labels,
        datasets:[
            {
                label:'Language Popularity',
                data: chart_data.data
            }
        ]
    },
    options:{
        plugins:{
            legend:{
                display: true,
            }
        }
    }
});
new Chart(my_chart2,{
    type: 'doughnut',
    data:{
        labels: chart_data2.labels,
        datasets:[
            {
                label:'Language Popularity',
                data: chart_data2.data
            }
        ]
    },
    options:{
        plugins:{
            legend:{
                display: true,
            }
        }
    }
});