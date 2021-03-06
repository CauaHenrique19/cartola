import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('name').notNullable()
        table.boolean('admin').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
}