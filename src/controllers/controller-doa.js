const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on ('error', (err)=>{
    console.error(err);
});

module.exports = {
// get semua data doa 
getDataDoa (req, res) {
    pool.getConnection(function(err, connection){
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM doa_list;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        sucses : true, 
                        message : 'Berhasil get Data Doa',
                        data : results 
                    }) ;
                    
                });
                connection.release();

    })
},

// ambil data berdasarkan id
getDataDoaById(req, res){
    let id = req.params.id; 
    pool.getConnection(function(err, connection) {
        if (err) throw err; 
        connection.query (

            `
            SELECT * FROM doa_list WHERE doa_id = ?;
            `
            ,[id]
            ,function (error, results) {
                if (error) throw error; 
                res.send({
                    sucses : true, 
                    message : 'berhasil ambil data doa',
                    data : results

                });
            });

            connection.release();

    })
},

// Tambah data
addDataDoa(req, res) {
    let data = {
        doa_nama : req.body.nama,
        doa_ar : req.body.ar,
        doa_tr : req.body.tr, 
        doa_tentang : req.body.tentang, 
        doa_latin : req.body.latin
    }
    pool.getConnection(function(err, connection) {
        if (err) throw err; 
        connection.query (
            `
            INSERT INTO doa_list SET ?;
            ` 
            , [data]
            , function(error, results){
                if (error) throw error;
                res.send ({
                    sucses : true, 
                    message : 'Berhasil Menambah Doa'

                });
            });

            connection.release();

    })

},

// Update data
updateDataDoa(req, res) {
        let dataEdit = {
            doa_nama : req.body.nama,
            doa_ar : req.body.ar,
            doa_tr : req.body.tr, 
            doa_tentang : req.body.tentang, 
            doa_latin : req.body.latin
        }
        let id = req.body.id
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(

                `
                UPDATE doa_list SET ? WHERE doa_id = ?;
                `
                , [dataEdit, id] 
                , function(error, results) {
                    if (error) throw error;
                    res.send({
                        sucses : true, 
                        message : 'Berhasil Update Data Doa',

                    });

                });
                connection.release();

        })
},

deleteDataDoa(req, res) {
    let id = req.body.id 
    pool.getConnection(function(err,connection) {
        if(err) throw err;
        connection.query (
            `
            DELETE FROM doa_list WHERE doa_id =?;

            `
            ,[id] 
            , function (error, results) {
                if (error) throw error; 
                res.send({
                    sucses : true, 
                    message : 'Data Berhasil dihapus'
                });
            });
                connection.release()
    })
}

}