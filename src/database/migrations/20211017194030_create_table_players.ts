import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('players', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('name').notNullable()
        table.string('team_id').references('id').inTable('teams').notNullable()
        table.string('position_id').references('id').inTable('positions').notNullable()
        table.string('key_image').notNullable()
        table.string('url_image').notNullable()
        table.float('price').notNullable()
        table.string('status').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('players')
}