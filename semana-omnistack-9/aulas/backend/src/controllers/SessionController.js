const User = require('../models/User');

// Index(listagem), Show(unica sessão), store(Criar Sessão), update(Editar sessão), destroy(deletar sessão)
module.exports = {
  async store(req, res) {
    const { email } = req.body;

    // é utilizado let, pois pode ser alterado
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}