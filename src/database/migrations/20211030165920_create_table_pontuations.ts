import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('pontuations', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('name').notNullable()
        table.float('value').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('pontuations')
}