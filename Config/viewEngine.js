const path = require('path');
const cors = require('cors');

const ViewEngine = (app,express)=>{
    app.set('views',path.join('./Resources','Views'));
    app.set('view engine','ejs');
    app.use(express.static(path.join('./Resources','public')))
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors())
}
module.exports = ViewEngine;