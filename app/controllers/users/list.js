module.exports = async (ctx) => {
  const { user: User } = ctx.models.mongo

  const result = await User.find()
  // const result = await User.findOne({
  //   email: 'email@address.it'
  // })

  ctx.body = result
}
