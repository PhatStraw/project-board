
exports.up = function(knex) {
    //users table
  return knex.schema.createTable('users', users => {
      users.increments();
      users.string('username', 60).notNullable().unique();
      users.string('password', 150).notNullable()
      users.string('img')
  })
    //projects table 
  .createTable('projects', projects => {
      projects.increments();
      projects.string('img')
      projects.text('name')
      projects.text('description')
      projects.text('tasks')
      projects.text('languages')
      projects.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('users');
};
