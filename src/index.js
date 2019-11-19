import app from './app';
require('./database');

const port = 4000;
 async function main(){
    await app.listen(port); // pedimos el puerto de conecion que viene desde app
        console.log(`server on port ${port} `);
}

main();