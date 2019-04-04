const db = require('./database');

const select_all = async () => await db.execute('SELECT * FROM products');
const insert_into = async (val) => await db.execute(`INSERT INTO products (title, price, emoji) VALUES(${val})`);

// (async () => {
//     try {
//         let [results, metadata] = await select_all();
//         Object.assign(results[0], {viewed:true}); // or simply results[0].viewed=true
//         console.log(results[0]);
//     } catch (e) {
//         console.log(e);
//     }
// })();

(async()=> {
    try{
        let results = await insert_into("'Lollipop', '2.50', '🍭'");
        console.log("Affected rows: ", results[0].affectedRows);
    }catch(e){
        console.log(e);
    }
})();