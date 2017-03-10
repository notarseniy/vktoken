const VKApi = require('node-vkapi');

module.exports = function VKToken(config, callback) {
  if (!config.clientId ||
      !config.clientSecret ||
      !config.username ||
      !config.password ||
      !config.phone) {
    callback('Wrong credentials');
  }

  const VK = new VKApi({
    app: {
      id: config.clientId,
      secret: config.clientSecret
    },
    auth: {
      login: config.username,
      pass: config.password,
      phone: config.phone
    }
  });

  VK.auth.server()
    .then(function (data) {
      callback(null, data.access_token);
    })
    .catch(function (error) {
      callback(error);
    });
};
