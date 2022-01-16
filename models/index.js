const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');
const Schedule = require('./Schedule');

User.hasMany(Painting,{
  foreignKey:'user_id'
})

Painting.belongsTo(User,{
  foreignKey:'user_id'
})

// User.belongsToMany(Painting,{
//   through: Schedule,
//   as:'scheduled_paintings',
//   foreignKey:'user_id'
// })

// Painting.belongsToMany(User,{
//   through:Schedule,
//   as:'scheduled_paintings',
//   foreignKey:'painting_id'
// })

Schedule.belongsTo(User,{
  foreignKey:'user_id'
})


User.hasMany(Schedule,{
  foreignKey:'user_id'
})

Gallery.hasMany(Painting, {
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting,Schedule };
