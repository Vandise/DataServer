import io from 'socket.io-client';

export default (server, session) => {
  const socket = session.socket;

  socket.on('fetch_characters', (currentUser) => {
    server.logger.info('Getting characters for user: ', currentUser);
    server.r.table('characters')
    .filter(server.r.row('user')
    .eq(currentUser.username)).run(server.conn, (err, cursor) => {
      if (err) {
        server.logger.info('Unable to retrieve a list of characters for user', currentUser.username);
        socket.emit('fetch_characters', []);
        return false;
      }
      return cursor.toArray((err, records) => {
        if (err) {
          server.logger.info('Unable to cast result set to array');
          socket.emit('fetch_characters', []);
          return false;
        }
        server.logger.info('Dispatching records', records);
        socket.emit('fetch_characters', records);
        return records;
      });
    });
  });

};