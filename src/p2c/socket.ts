import SocketIo from 'socket.io-client';

const socket = SocketIo('ws://localhost:8080');

export default socket;
