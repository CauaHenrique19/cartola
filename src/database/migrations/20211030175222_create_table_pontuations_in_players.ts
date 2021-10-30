import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('pontuations_in_players', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('player_id').references('id').inTable('players').notNullable()
        table.string('pontuation_id').references('id').inTable('pontuations').notNullable()
        table.string('round_id').references('id').inTable('rounds').notNullable()
        table.integer('quantity').notNullable()
        table.timestamp('created_at').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('pontuations_in_players')
}