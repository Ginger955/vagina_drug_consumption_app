
exports.up = function(knex) {
  return knex.schema
    .createTable('entries', function (table) {
      table.increments('id');
      table.integer('consumed_by').unsigned();
      table.foreign('consumed_by').references('id').inTable('users');
    })
    .createTable('drug_types', function (table) {
      table.increments('id');
      table.string('name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('entries')
    .dropTable('drug_types')
};
