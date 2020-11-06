
exports.up = function(knex) {
  return knex.schema
    .dropTable('cars')
    .dropTable('countries')
    .dropTable('images')
    .dropTable('users')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('cars', function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 10);
      table.string('model', 12);
      table.integer('year');
    })
    .createTable('countries', function (table) {
      table.increments('id').primary().notNullable();
      table.string('country_code', 2);
      table.string('country_name', 38);
    })
    .createTable('images', function (table) {
      table.increments('id').primary().notNullable();
      table.string('image', 30);
      table.string('description', 20);
      table.string('category', 12);
      table.string('author', 18);
      table.date('date');
    })
    .createTable('users', function (table) {
      table.increments('id').primary().notNullable();
      table.string('first_name', 8);
      table.string('last_name', 10);
      table.string('gender', 6);
      table.string('email', 25);
      table.string('company', 29);
      table.string('avatar', 25);
    })
};
