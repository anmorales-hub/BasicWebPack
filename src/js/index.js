import TestJS from "./TestJs.js";
import ConsoleLogIt from "./ConsoleLogIt.js";
import getJSON from "./getJSON";
const MakeTable = require('./makeTable');

TestJS();
getJSON("", function (data) {
    console.log(data);
});

getJSON('http://localhost:8080/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;

            MakeTable.makeHeader(table, data);
            MakeTable.makeTable(table, dataRecords);
        }

    });
ConsoleLogIt("Everthing is generated");