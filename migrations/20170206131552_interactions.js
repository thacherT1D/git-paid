exports.up = (knex) => {
  return knex.schema.createTable('interaction', (table) => {
    table.increments();
    table.integer('application_id')
      .notNullable()
      .references('id')
      .inTable('application')
      .onDelete('CASCADE');
    table.string('type');
    table.text('note', 'mediumtext');
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('interaction');
};
