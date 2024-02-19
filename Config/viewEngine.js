const path = require('path');

const ViewEngine = (app,express)=>{
    app.set('views',path.join('./Resources','Views'));
    app.set('view engine','ejs');
    app.use(express.static(path.join('./Resources','public')))
}
module.exports = ViewEngine;