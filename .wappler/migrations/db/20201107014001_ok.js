
exports.up = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.dropForeign('drug_type');
      table.dropColumn('drug_type');
      table.integer('consumed_by').unsigned();
      table.foreign('consumed_by').references('id').inTable('users');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.integer('drug_type').unsigned();
      table.foreign('drug_type').references('id').inTable('drug_types');
      table.dropForeign('consumed_by');
      table.dropColumn('consumed_by');
    })
};
