import io from 'socket.io-client';

export default (server, session) => {
  const socket = session.socket;

  socket.on('fetch_characters', (currentUser) => {
    server.logger.info('Getting characters for user: ', currentUser);
  });

};