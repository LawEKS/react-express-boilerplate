const app = require('./app');

const PORT = app.get('port');
const HOST = app.get('host');

app.listen(PORT, () => {
  console.log(`server running at http://${HOST}:${PORT}`);
});

