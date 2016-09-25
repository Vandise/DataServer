import io from 'socket.io-client';

export default (server, session) => {
  const socket = session.socket;

  socket.on('get_characters', (data) => {
    let user = data.user;
    let characters = [];
    server.logger.info('Getting characters for user: ');
  });

};