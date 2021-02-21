const path = require('path')

module.exports = {
  images: {
    domains: ['rylik.ru'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

  