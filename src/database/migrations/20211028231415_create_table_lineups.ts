import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('lineups', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('team_user_id').references('id').inTable('teams_users').notNullable()
        table.string('round_id').references('id').inTable('rounds')
        table.float('price').notNullable().defaultTo(0)
        table.timestamp('created_at').notNullable()
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('lineups')
}