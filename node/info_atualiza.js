
const fs = require('fs')//file system

fs.appendFile('info.txt',' Tomem bastante água!',function(err){
    if(err) throw err
    console.log('Arquivo atualizado!')
})


