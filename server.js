const app = require('express')()
const listener = app.listen(process.env.PORT, () => console.log('Уже подключились к порту ' + listener.address().port));