
exports.up = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.date('date').notNullable().alter();
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.date('date').nullable().alter();
    })
};
