// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['timeline']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawGID);

// Callback that creates and populates a data table,
// instantiates the chart, passes in the data and draws it.
function drawGID() {
    var queryStringT = encodeURIComponent('select A, B');
    var queryT = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1o6MdpICO4zxgNUKa0BCRNn-a60f-kkj75ilCNX6_s78/gviz/tq?gid=221199860&headers=-1' + queryStringT);
    queryT.send(handleQueryResponseT);
}

function handleQueryResponseT(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var dataT = response.getDataTable();
    // Set chart options
    var optionsT = {
        title: 'Timeline',
    };

    // for bug testing
    var csvT = google.visualization.dataTableToCsv(dataT);
    console.log(csvT);

    var chartT = new google.visualization.Timeline(document.getElementById('tl_chart_div'));
    chartT.draw(dataT, optionsT);
}
