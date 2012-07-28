var ReportGroupTestDataCreator = {};

ReportGroupTestDataCreator.createReportGroupTypes = function() {
    var reportGroupTypes = [];

    reportGroupTypes[0] = {code: "EQ", name: "Equity" };
    reportGroupTypes[1] = {code: "FI", name: "Fixed Income" };
    reportGroupTypes[2] = {code: "BA", name: "Balanced" };

    return reportGroupTypes;
};

ReportGroupTestDataCreator.createReportGroups = function() {
    var reportGroups = [];

    reportGroups[0] = {id: 2, name: "Equity SMA US" };
    reportGroups[1] = {id: 3, name: "Equity SMA Non-US" };
    reportGroups[2] = {id: 4, name: "Fixed Income SMA - Muni" };
    reportGroups[3] = {id: 5, name: "Fixed Income SMA - Non Muni" };
    reportGroups[4] = {id: 8, name: "FAS Equity" };

    return reportGroups;
};

ReportGroupTestDataCreator.createReports = function() {
    var reports = [];

    reports[0] = {id: 12, code: "SMAEQCHARACTERISTICS", name: "Equity SMA Characteristics"};
    reports[1] = {id: 13, code: "SMAEQCOUNTRYALLOCATION", name: "Equity SMA Country Allocation"};
    reports[2] = {id: 14, code: "SMAEQEXCHALLOCATION", name: "Equity SMA Exchange Allocation"};
    reports[3] = {id: 15, code: "SMAEQREGIONALLOCATION_V01", name: "Equity SMA Region Allocation"};
    reports[4] = {id: 16, code: "SMAEQSECTALLOC", name: "Equity SMA Sector Allocation"};
    reports[5] = {id: 17, code: "SMAEQSIZEALLOCATION", name: "Equity SMA Size Allocation"};
    reports[6] = {id: 18, code: "SMAEQTOP10CONTRIBUTORS", name: "Equity SMA Top 10 Contributors"};
    reports[7] = {id: 19, code: "SMAEQTOP10DETRACTORS", name: "Equity SMA Top 10 Detractors"};
    reports[8] = {id: 21, code: "SMAEQTOP10PERFORMERS", name: "Equity SMA Top 10 Performers"};
    reports[9] = {id: 23, code: "SMAEQWORST10PERFORMERS", name: "Equity SMA Worst 10 Performers"};
    reports[10] = {id: 24, code: "SMAFICOUNTRYALLOCATION", name: "FI SMA Country Allocation"};
    reports[11] = {id: 25, code: "SMAFICURRENCYALLOCATION", name: "FI SMA Currency Allocation"};
    reports[12] = {id: 26, code: "SMAFIDURATIONALLOCATION", name: "FI SMA Duration Allocation"};
    reports[13] = {id: 27, code: "SMAFIMATURITYALLOCATION", name: "FI SMA Maturity Allocation"};
    reports[14] = {id: 28, code: "SMAFISECTORALLOCATION", name: "FI SMA Sector Allocation"};
    reports[15] = {id: 29, code: "SMAFIRATINGALLOCATION", name: "FI SMA Credit Rating Allocation"};
    reports[16] = {id: 30, code: "SMAFISECTYPEALLOCATION", name: "FI SMA Security Type Allocation"};
    reports[17] = {id: 31, code: "SMAFISTATEALLOCATION", name: "FI SMA State Allocation"};
    reports[18] = {id: 53, code: "SMAFICHAR", name: "FI SMA Characteristics"};
    reports[19] = {id: 100, code: "SMAEQNUMSECURITIES", name: "SMA 6x6 Grid - Number of Secuirties"};
    reports[20] = {id: 101, code: "SMAPERCDISTRIBUTION", name: "SMA 6x6 Grid - Percent Distribution"};
    reports[21] = {id: 102, code: "BENPERCDISTRIBUTION", name: "Russell 3000 Index 6x6 Grid - Percent Distribution"};
    reports[22] = {id: 103, code: "SECURITYDETAIL", name: "Secuirty Detail - Country of Exposure"};

    return reports;
};
