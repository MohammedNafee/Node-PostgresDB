'use strict';

var dbm;
var type;
var seed;
var fs = require('fs');
var path = require('path');
var Promise;

/**
 * Setup function required by db-migrate
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
  Promise = options.Promise;
};

/**
 * Up migration: reads SQL file and runs it
 */
exports.up = function(db) {
  var filePath = path.join(__dirname, 'sqls', '20250927205818-students-table-up.sql');
  console.log('Running migration SQL from:', filePath);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  }).then(function(data) {
    return db.runSql(data);
  });
};

/**
 * Down migration: rollback SQL
 */
exports.down = function(db) {
  var filePath = path.join(__dirname, 'sqls', '20250927205818-students-table-down.sql');
  console.log('Running rollback SQL from:', filePath);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
      if (err) return reject(err);
      resolve(data);
    });
  }).then(function(data) {
    return db.runSql(data);
  });
};

exports._meta = {
  "version": 1
};
