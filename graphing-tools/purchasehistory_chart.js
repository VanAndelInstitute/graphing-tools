// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawGID_P);

// Callback that creates and populates a data table,
// instantiates the chart, passes in the data and draws it.
function drawGID_P() {
    var queryStringP = encodeURIComponent('select A, B');
    var queryP = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1o6MdpICO4zxgNUKa0BCRNn-a60f-kkj75ilCNX6_s78/gviz/tq?gid=1771198038&headers=-1' + queryStringP);
    queryP.send(handleQueryP);
}

function handleQueryP(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var dataP = response.getDataTable();
    // Set chart options
    var optionsP = {
        title: 'Purchase history',
        // legend: { position: 'bottom' }
    };
    var csvP = google.visualization.dataTableToCsv(dataP);
    console.log(csvP);

    var chartP = new google.visualization.LineChart(document.getElementById('ph_chart_div'));
    chartP.draw(dataP, optionsP);
}
