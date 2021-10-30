import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('players_in_lineups', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('player_id').references('id').inTable('players').notNullable()
        table.string('lineup_id').references('id').inTable('lineups').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('players_in_lineups')
}