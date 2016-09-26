// classType: integer, see classes table
// attunement: integer, 1 <Earth>, 2 <Fire>, 3 <Water>, 4 <Wind>
// resistance <index = attunement>, <value = resistance value>
//    index 0 = + % resistance modifier 
// each attunement gains 10 resistance to their own element
//
//  Strength: Physical Attack
//  Defense: Physical Defense
//  Agility: Attack Speed / Order
//  Vitality: HP
//  Intelligence: Magical Attack
//  Resistance: Magical Defense
//
module.exports = function(db, conn, conf) {
  return db.db(conf.database.name).table("characters").insert([
    {
      user: 'username',
      name: 'Squire',
      level: 1,
      experience: 0,
      classType: 1,
      attunement: 1,
      strength: 8,
      defense: 5,
      agility: 4,
      vitality: 5,
      intelligence: 3,
      resistance: [0, 10, 0, 0, 0]
    },
    {
      user: 'username',
      name: 'Acolyte',
      level: 1,
      experience: 0,
      classType: 2,
      attunement: 2,
      strength: 2,
      defense: 3,
      agility: 5,
      vitality: 5,
      intelligence: 10,
      resistance: [10, 0, 10, 0, 0]
    },
    ]).run(conn);
};