const path = require('path');

exports.handleHtml1 = (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/pages/page1.html'));
};

exports.handleHtml2 = (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/pages/page2.html'));
};
