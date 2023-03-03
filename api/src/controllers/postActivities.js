const { activities } = require('../db.js');
const { country } = require('../db.js');

let id = 1;
const postActivities = async (name, dificult, duration, station, ubication) => {
  if (!name || !dificult || !duration || !station) throw new Error('me falta info');

  const newActivity = {
    name,
    dificult,
    duration,
    station,
    ubication,
  };

  return activities.create(newActivity);

  // const result = await country.findOne({
  //     where: {
  //         name: newActivity.ubication
  //     }
  // })

  // await country.update({ "activity" : result.activity},{
  //     where: {
  //         id: result.id
  // }
  // })

  // return result;
};

module.exports = {
  postActivities,
};
