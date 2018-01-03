const Chance = require('chance')

module.exports = async (ctx) => {
  const { user: User } = ctx.models.mongo

  const chance = new Chance()
  const names = chance.name().split(' ')
  const name = names[0]
  const surname = names[1]
  const email = chance.email()

  const result = await User.store({
    name,
    surname,
    email
  })

  ctx.body = result
}
