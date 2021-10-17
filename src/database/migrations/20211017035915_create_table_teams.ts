import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('teams', (table: Knex.TableBuilder) => {
        table.string('id').primary().notNullable()
        table.string('name').notNullable()
        table.string('key_image').notNullable()
        table.string('url_image').notNullable()
        table.string('abbreviation').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('teams')
}