// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawGID_C);

// Callback that creates and populates a data table,
// instantiates the chart, passes in the data and draws it.
function drawGID_C() {
    var queryStringC = encodeURIComponent('select A, B');
    var queryC = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1o6MdpICO4zxgNUKa0BCRNn-a60f-kkj75ilCNX6_s78/gviz/tq?gid=515591318&headers=-1' + queryStringC);
    queryC.send(handleQueryC);
}

function handleQueryC(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var dataC = response.getDataTable();
    // Set chart options
    var optionsC = {
        title: 'Cost curve-- only 2 data points',
        curveType: 'function',
        // legend: { position: 'bottom' }
    };
    var csvC = google.visualization.dataTableToCsv(dataC);
    console.log(csvC);

    var chartC = new google.visualization.LineChart(document.getElementById('cc_chart_div'));
    chartC.draw(dataC, optionsC);
}
