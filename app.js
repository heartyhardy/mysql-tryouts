const db = require('./database');

const select_all = async () => await db.execute('SELECT * FROM products');
const insert_into = async (val) => await db.execute(`INSERT INTO products (title, price, emoji) VALUES(${val})`);
const select_by_id = async (id) => await db.execute(`SELECT * FROM products WHERE _id = ${id}`);
// const insert_into = async (val) => await db.execute(`INSERT INTO products (title, price, emoji) VALUES(? ? ?)`,[val1, val2, val3]);

// SELECT ALL

// (async () => {
//     try {
//         let [results, metadata] = await select_all();
//         Object.assign(results[0], {viewed:true}); // or simply results[0].viewed=true
//         console.log(results[0]);
//     } catch (e) {
//         console.log(e);
//     }
// })();

//INSERT INTO

// (async () => {
//     try {
//         let results = await insert_into("'Lollipop', '2.50', '🍭'");
//         console.log("Affected rows: ", results[0].affectedRows);
//     } catch (e) {
//         console.log(e);
//     }
// })();

// SELECT BY ID

(async() => {
    try{
        let [[results]] = await select_by_id(7);
        console.log(results);
    }catch(e){
        console.log(e);
    }
})();