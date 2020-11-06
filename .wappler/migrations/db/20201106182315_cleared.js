
exports.up = function(knex) {
  return knex.schema
    .dropTable('cars')
    .dropTable('countries')
    .dropTable('images')
    .table('users', function (table) {
      table.string('password');
    })
};

exports.down = function(knex) {
  return knex.schema
    .createTable('cars', function (table) {
      table.increments('id').primary().notNullable();
      table.string('make', 50);
      table.string('model', 50);
      table.string('year', 50);
    })
    .createTable('countries', function (table) {
      table.increments('id').primary().notNullable();
      table.string('country_code', 2).notNullable();
      table.string('country_name', 100).notNullable();
    })
    .createTable('images', function (table) {
      table.increments('id').primary().notNullable();
      table.string('image', 50);
      table.text('description', 65535);
      table.string('category', 12);
      table.string('author', 50);
      table.date('date');
    })
    .table('users', function (table) {
      table.dropColumn('password');
    })
};
