const path = require('path');
const fs = require('fs');

exports.fileHandler = (req, res) => {
    const filename = req.params.filename;
    const directories = {
        '.html': 'pages',
        '.png': 'images',
        '.jpg': 'images',
        '.mp3': 'audio'
    };

    const extension = path.extname(filename);
    const dir = directories[extension] || '';

    const filePath = path.join(__dirname, `../assets/${dir}`, filename);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found');
    }
};
