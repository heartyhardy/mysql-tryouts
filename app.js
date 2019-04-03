const db = require('./database');

const select_all = async () => await db.execute('SELECT * FROM products');

(async () => {
    try {
        let [[result]] = await select_all();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();