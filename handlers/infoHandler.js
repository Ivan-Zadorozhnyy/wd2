exports.infoHandler = (req, res) => {
    res.json({
        endpoints: [
            { method: 'GET', path: '/html1', description: 'gets the first html page.' },
            { method: 'GET', path: '/html2', description: 'gets the second html page.' },
            { method: 'GET', path: '/file/:filename', description: 'gets a file from the assets directory.' },
            { method: 'GET', path: '/objects', description: 'gets all objects.' },
            { method: 'GET', path: '/objects/:type', description: 'gets all objects of a specified type.' },
            { method: 'GET', path: '/objects/:type/:id', description: 'gets a single object of a specified type and id.'},
            { method: 'GET', path: '/info', description: 'provides documentation about the API endpoints.' }
        ],
        message: 'API documentation for HW2.'
    });
};
