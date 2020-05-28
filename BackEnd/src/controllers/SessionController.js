//METODOS DO CONTROLLER
//index -> listagem de todas <contexto do controller>
//show-> listar uma unica  <contexto do controller>
//Store -> Criar  <contexto do controller>
//Update -> atualizar  <contexto do controller>
//destroy -> remover <contexto do controller>

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  },

  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  }
};
