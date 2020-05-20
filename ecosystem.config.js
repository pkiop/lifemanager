module.exports = {
  apps : [{
    script: 'node_server.js',
    watch: '.',
    ignore_watch: ['./lowdb.json']
  }, ],

};
