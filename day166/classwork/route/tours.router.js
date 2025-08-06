const { getTours } = require('./tours.controller');

const routes = (req, res) => {
  if (req.url === '/tours' && req.method === 'GET') {
    getTours(req, res);
    return
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

module.exports = routes;