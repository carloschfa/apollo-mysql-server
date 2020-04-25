/*** 
 * 
 * 
 * Importing Dependencies
 * 
 */
const dotenv = require('dotenv');
import Sequelize from 'sequelize';
import _ from 'lodash';
import { createFriend } from './tables/Friend';
import { createPerson } from './tables/Person';
import { createBlocked } from './tables/Blocked';
import { createDetail } from './tables/Detail';
import { createGroup } from './tables/Group';
import { createMember } from './tables/Member'; 
import { createMessage } from './tables/Message'; 
import { createSingle } from './tables/Single'; 

/*** 
 * 
 * 
 * Database Connection
 * 
 */
dotenv.config()
const Conn = new Sequelize(
  process.env.DB,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    dialect: 'mysql',
    host: process.env.DBHOST,
    port: process.env.DBPORT
  }
);

/***
 * 
 * 
 * Database Objects
 * 
 */

createFriend(Conn, Sequelize);
createPerson(Conn, Sequelize);
createBlocked(Conn, Sequelize);
createDetail(Conn, Sequelize);
createGroup(Conn, Sequelize);
createMember(Conn, Sequelize);
createMessage(Conn, Sequelize);
createSingle(Conn, Sequelize);

Conn.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

export default Conn;