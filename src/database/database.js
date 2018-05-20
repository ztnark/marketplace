import { db, env } from 'decentraland-commons'

export const database = {
  ...db.postgres,

  async connect() {
    console.log(env.get('CONNECTION_STRING'))
    const CONNECTION_STRING = "postgres://jjkrantz:qwerty@localhost:5432/marketplace"
    this.client = await db.postgres.connect(CONNECTION_STRING)
    return this
  }
}
