var express = require('express');
var router = express.Router();
var fs = require('fs'); // Load fileSystem module
var fontPath = "./fonts";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'fontServer' });
});


/* GET font listing. */
router.get('/fonts/:fontName', function(req, res, next) {
    var fontname = req.params.fontName;
    switch (fontname) {
        case "ESPRUAR.woff" :
            console.log("Requested:" + fontname);
            // Data is the varaible holding the loaded file
            fs.readFile(fontPath + fontname, function(err, data) {
                if (err) throw err;
                console.log("Successfully read file!");
                res.writeHead(200, {'Content-Type': 'image/jpeg'});
                res.end(data); // Send the file data to the browser.
            });
            res.send('you requested font by name:' + fontname);
            break;
        default:
            var err = new Error('No support for requested font[' + fontname + "].");
            err.status = 404;
            next(err);
            break;
    }
});

module.exports = router;
var express = require('express');
var router = express.Router();
var fs = require('fs'); // Load fileSystem module
var fontPath = "./fonts/";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'fontServer' });
});


/* GET font listing. */
router.get('/fonts/:fontName', function(req, res, next) {
    var fontname = req.params.fontName;
    switch (fontname) {
        case "Aetherian" :
        case "AncientHylian" :
        case "Daedra" :
        case "DemonicRunes" :
        case "DETHEK" :
        case "dragonScript" :
        case "ESPRUAR" :
        case "dalach" :
        case "Lovecrafts-Diary" :
        case "Naga" :
        case "pulsian" :
        case "RPG-Cuthulu" :
        case "srilermorna" :
            console.log("Requested:" + fontname);
            // Data is the varaible holding the loaded file
            //res.setHeader('Content-disposition', 'attachment; filename=' + filename);
            res.setHeader('Content-type', 'application/font-woff');
            // Set CORS header
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

            var filestream = fs.createReadStream(fontPath + fontname + ".woff");
            filestream.pipe(res);

            break;
        default:
            var err = new Error('No support for requested font[' + fontname + "].");
            err.status = 404;
            next(err);
            break;
    }
});

module.exports = router;
