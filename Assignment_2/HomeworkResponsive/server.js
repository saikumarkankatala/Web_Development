const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/index.ejs'));
});
app.get('/css',(req,res)=>{
    res.sendFile(path.join(__dirname,"threecolumn/starbuzz.css"))
})
app.get('/about', (req, res) => {
    res.render(path.join(__dirname, 'views/directions.ejs'));
});
app.get('/priceinfo', (req, res) => {
    res.render(path.join(__dirname, 'views/lounge.ejs'));
});
app.get('/css2',(req,res)=>{
    res.sendFile(path.join(__dirname,"lounge/lounge.css"))
})
app.get('/cssformobile',(req,res)=>{
    res.sendFile(path.join(__dirname,"lounge/mobile.css"))
})
app.get('/contactus', (req, res) => {
    res.render(path.join(__dirname, 'views/styleform.ejs'));
});
app.get('/contactcss',(req,res)=>{
    res.sendFile(path.join(__dirname,"StyleForm/styledform.css"))
})
app.listen(3000, () => {
  console.log('Server started on port 3000');
});





