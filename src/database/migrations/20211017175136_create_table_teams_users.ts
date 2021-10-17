import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('teams_users', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('user_id').references('id').inTable('users').notNullable()
        table.string('name').notNullable()
        table.float('money').defaultTo(100).notNullable()
        table.timestamp('created_at').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('teams_users')
}