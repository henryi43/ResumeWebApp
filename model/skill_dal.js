var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Skill;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(skill_id, callback) {
    var query = 'SELECT * FROM Skill WHERE skill_id = ?';
    var queryData = [skill_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO Skill (name, description) VALUES (?, ?)';

    // the question marks in the sql query above will be replaced by the values of the
    // the data in queryData
    var queryData = [params.name];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

}

exports.delete = function(skill_id, callback) {
    var query = 'DELETE FROM Skill WHERE skill_id = ?';
    var queryData = [skill_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};