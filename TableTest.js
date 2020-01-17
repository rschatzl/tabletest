
const port = 3000;
const fs = require('fs')
var http = require('http')



fs.readFile('./table.html', (err, html) =>  {
    if(err){
        throw err;
    }


    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end()

    }).listen(port, function() {
        console.log('Listening on ' + port + '...')
    });
    
    
    
});




function testFunc(){
    console.log('helllo')
}