var connection = require("../config/connection");

var orm = {
    selectALL: function(table, cb) {
        var dbQuery = "SELECT*FROM" + table + ";";

        connection.query(dbQuery, function(err, res){
            if(err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var dbQuery = 
        "INSERT INTO" + table +
        "(" + cols.toString()+
        ")" +
        "VALUES (" +
        createQmarks(vals.length)
        ")";

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if(err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;
        queryString += "SET";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, results){
            if(err){
                throw err;
            }
            cb(res);
        });
     },
    };
    
    module.exports = orm