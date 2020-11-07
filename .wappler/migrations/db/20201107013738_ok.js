
exports.up = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.dropForeign('consumed_by');
      table.dropColumn('consumed_by');
      table.text('drugs');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.integer('consumed_by').unsigned();
      table.foreign('consumed_by').references('id').inTable('users');
      table.dropColumn('drugs');
    })
};
