var appRouter = function (app) {
  app.get('/', function (req, res) {
    setTimeout(() => {
      res.status(200).json({ a: 1 });
    }, 0);
  });
  app.get('/user', (req, res) => {
    var user = {
      "username": "achristoph",
      "password": "1234"
    }
    setTimeout(() => {
      return res.status(200).json(user);
    }, 5000);
  });
  app.get('/account', (req, res) => {
    var account = {
      "twitter": "@achristoph",
      "github": "achristoph"
    }
    setTimeout(() => {
      return res.status(200).json(account);
    }, 3000);
  });
}

module.exports = appRouter;
