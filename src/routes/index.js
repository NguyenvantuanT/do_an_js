const newsRouter = require('./news');
const userRouter = require('./User');  //kết nối user của router
const adminRouter = require('./admin');
const bookRouter = require('./detailsbook');

function route(app){
app.use('/', newsRouter);
app.use('/', userRouter);
app.use('/', adminRouter);
app.use('/detailsbook', bookRouter);
}

module.exports= route;