module.exports = function(db, conn, conf) {
  return db.db(conf.database.name).table("characters").insert([
    {
      user: 'username',
      name: 'Player-1',
      specialty: 'Unknown',
      strength: 1,
      agility: 1,
      vitality: 1,
      dexterity: 1
    },
    {
      user: 'username',
      name: 'Player-2',
      specialty: 'Unknown',
      strength: 2,
      agility: 2,
      vitality: 2,
      dexterity: 2
    },
    ]).run(conn);
};