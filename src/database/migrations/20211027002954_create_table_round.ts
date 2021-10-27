import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('rounds', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('description').notNullable()
        table.timestamp('started_at').notNullable()
        table.timestamp('end_at').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('rounds')
}