/*************************************************************************
 *
 * Server.js
 *  Passes arguments and boots up the Gameserver.
 *
 *************************************************************************/

import DataServer from './app/DataServer';

let DS = new DataServer(process.argv);
DS.start();