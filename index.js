const express = require('express');
const cors = require('cors');
const path = require('path');

const { fileHandler } = require('./handlers/fileHandler');
const { handleHtml1, handleHtml2 } = require('./handlers/htmlHandler');
const {
    handleAllObjects,
    handleObjectsWithType,
    handleObjectsWithTypeAndId
} = require('./handlers/objectsHandler');
const { infoHandler } = require('./handlers/infoHandler');

const app = express();
const port = 3000;

const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/html1', handleHtml1);
app.get('/html2', handleHtml2);
app.get('/file/:filename', fileHandler);
app.get('/objects', handleAllObjects);
app.get('/objects/:type', handleObjectsWithType);
app.get('/objects/:type/:id', handleObjectsWithTypeAndId);
app.get('/info', infoHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
