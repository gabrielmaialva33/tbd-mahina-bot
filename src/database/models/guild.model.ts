import { ObjectionModel } from '#src/lib/objection'

export class Guild extends ObjectionModel {
  static tableName = 'guilds'

  /**
   * ------------------------------------------------------
   * Columns
   * ------------------------------------------------------
   */
  id: number
  prefix: string
  guild_id: string
  created_at: string
  updated_at: string

  /**
   * ------------------------------------------------------
   * Relations
   * ------------------------------------------------------
   */

  /**
   * ------------------------------------------------------
   * Hooks
   * ------------------------------------------------------
   */

  /**
   * ------------------------------------------------------
   * Scopes
   * ------------------------------------------------------
   */
}
