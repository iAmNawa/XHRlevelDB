
const app = require('express')()

const level = require('level')
const db = level('databutt')


app.get('/', function(req, res){
  res.type('text/html')
  res.send(require('fs').readFileSync('index.html'))
})


app.get('/data', function (req,res){

  db.get('data', function(err, val){
    res.send(val)
  })
})

app.get('/store/:data', function(req, res){

  if ('data' in req.params){
    db.put('data', req.params.data)
  }



  res.send('thanks')
})


app.listen(3000)
