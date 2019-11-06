
// google.load('visualization', '1', {packages: ['corechart', 'line']});
// export const drawSales = () => {
//     google.setOnLoadCallback(drawSales);
//     var data = new google.visualization.DataTable();
//     data.addColumn('date', 'X');
//     data.addColumn('number', 'Euros');

//     data.addRows([
//         [new Date(2015, 0), 78],
//         [new Date(2015, 1), 98],
//         [new Date(2015, 2), 125],
//         [new Date(2015, 3), 45],
//         [new Date(2015, 4), 50],
//         [new Date(2015, 5), 148],
//         [new Date(2015, 6), 278]
//     ]);

//     var options = {
//         chart: {
//             title: 'Box Office Earnings in First Two Weeks of Opening',
//             subtitle: 'in millions of dollars (USD)'
//         },
//         hAxis: {
//             title: 'Meses'
//         },
//         vAxis: {
//             title: 'Ventas'
//         },
//         width: 980,
//         height: 450,
//         timeline: {
//             groupByRowLabel: true
//         }
//     };

//     var chart = new google.visualization.LineChart(document.querySelector('#chart_div'));
//     chart.draw(data, options);
// }
