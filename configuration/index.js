/**
 * This module is used to collect all the configuration variables,
 * like the environment vars, in one place so they are not scattered all over the whole codebase
 */
const config = {
    host: process.env.DB_HOST,
    port: process.env.PORT || 3300,
    db: 'education',
    user: 'root',
    pass: 'root',
  };
  
  module.exports = config;
  