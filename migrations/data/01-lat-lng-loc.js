/**
 *
 * you can do this update by pgadming or by this file.
 *
 * runnting this file by cli
 * with this command
 * first navigate to this file then:
 * node 01-lat-lng-loc.js
 *
 */

const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "socialnetwork",
  user: "postgres",
  password: "fsiFJOIDW23493854"
});

pool
  .query(
    `
    UPDATE posts
    SET loc = POINT(lat, lng)
    WHERE loc IS NULL;
  `
  )
  .then(() => {
    console.log("Update was completed");

    pool.end();
  })
  .catch(err => {
    console.error(err.message);
  });
