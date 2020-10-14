const app = require('./app');
require('dotenv').config()


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`blog app is listening at http://localhost:${port}`)
})