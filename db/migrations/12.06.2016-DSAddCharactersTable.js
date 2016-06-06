module.exports = function(db, conn, conf) {
  return db.db(conf.database.name).tableCreate("characters").run(conn);
};