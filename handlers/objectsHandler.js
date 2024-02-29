const path = require('path');
const fs = require('fs');

const getDataFromFile = (filename) => {
    const filePath = path.join(__dirname, `../data/${filename}.json`);
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    return [];
};

exports.handleAllObjects = (req, res) => {
    const ducks = getDataFromFile('ducks');
    const hens = getDataFromFile('hens');
    const geese = getDataFromFile('geese');
    res.json({ ducks, hens, geese });
};

exports.handleObjectsWithType = (req, res) => {
    const type = req.params.type;
    const objects = getDataFromFile(type);
    if (objects.length > 0) {
        res.json(objects);
    } else {
        res.status(404).send('Type not found');
    }
};

exports.handleObjectsWithTypeAndId = (req, res) => {
    const { type, id } = req.params;
    const objects = getDataFromFile(type);
    const object = objects.find(obj => obj.id === Number(id));
    if (object) {
        res.json(object);
    } else {
        res.status(404).send('Object not found');
    }
};

