const report = require('multiple-cucumber-html-reporter');


var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date + ' às ' + time;
//reportPath: "cypress/reports/report-"+dateTime+".html",
report.generate({
    jsonDir: 'cypress/reports/json/',
    reportPath: "cypress/reports/report-html",
    displayReportTime: true,
    pageTitle: "Relatório Agenda Social",
    reportName: "Relatório de testes -  Agenda Social",
    pageFooter: "<div><center></br></br><p>Relatório de testes automatizados - Agenda Social</p></br></br></center></div>",
    launchReport: true,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    metadata: {
        browser: {
            name: 'chrome',
            version: '117'
        },
        device: 'Localhost',
        platform: {
            name: 'Windows',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Projeto', value: 'Agenda Social' },
            { label: 'Teste', value: 'End to End' },
            { label: 'Release', value: '1.0.0' },
            { label: 'Executado dia ', value: dateTime },
        ]
    }
});

