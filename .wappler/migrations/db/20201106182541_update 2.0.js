
exports.up = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.integer('drug_type').unsigned();
      table.foreign('drug_type').references('id').inTable('drug_types');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('entries', function (table) {
      table.dropForeign('drug_type');
      table.dropColumn('drug_type');
    })
};
