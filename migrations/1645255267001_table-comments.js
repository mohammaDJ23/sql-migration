/* eslint-disable camelcase */

/**
 *
 * this file created by this command:
 * npm run migrate create table comments
 *
 * to execute this code into database i using this command:
 *
 * set DATABASE_URL=postgres://<USERNAME>:J<DATABASE_PASSWORD>@localhost:5432/socialnetwork&&npm run migrate up
 *
 * set DATABASE_URL=postgres://postgres:fsiFJOIDW23493854@localhost:5432/socialnetwork&&npm run migrate up
 * set DATABASE_URL=postgres://postgres:fsiFJOIDW23493854@localhost:5432/socialnetwork&&npm run migrate down
 *
 */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(`
    CREATE TABLE comments (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      contents VARCHAR(240) NOT NULL
    );
  `);
};

exports.down = pgm => {
  pgm.sql(`
    DROP TABLE comments;
  `);
};
