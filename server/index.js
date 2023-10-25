const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! 변경사항 반영 확인')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})