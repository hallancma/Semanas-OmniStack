const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index = lista
//show = unico
//store = criar
//update = alterar
//destroy = deletar

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiRes = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = apiRes.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }
    return res.json(dev);
  },
  async update(req, res) {
    const {
      github_username,
      name,
      avatar_url,
      bio,
      techs,
      latitude,
      longitude
    } = req.body;
    const techsArrayUpdate = parseStringAsArray(techs);
    const locationUpdate = {
      type: 'Point',
      coordinates: [longitude, latitude]
    };

    let devFind = await Dev.findOne({ github_username });

    if (!devFind) {
      return res.json({ retorno: 'Dev não encontrado' });
    } else {
      dev = await Dev.update(
        { github_username },
        {
          $set: {
            name,
            avatar_url,
            bio,
            techs: techsArrayUpdate,
            locationUpdate
          }
        }
      );
      return res.json({ sucess: 'Dev atualizado com sucesso!' });
    }
  },
  async destroy(req, res) {
    const { github_username } = req.body;

    let devFind = await Dev.findOne({ github_username });

    if (!devFind) {
      return res.json({ retorno: 'Dev não encontrado' });
    } else {
      dev = await Dev.deleteOne({ github_username }, err => {
        if (err) console.log(err);
        return res.json({ retorno: 'Dev excluído com sucesso!' });
      });
    }
  }
};

//nome,avatar,bio,localizacao,tech
