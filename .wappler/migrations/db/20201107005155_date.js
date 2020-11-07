
exports.up = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.date('date');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.dropColumn('date');
    })
};
