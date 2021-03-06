// Episode 12 ->

module.exports = {
  name: 'ban',
  description: "Used to ban members from a server",
  async execute(bot, message, args, Discord) {

    if (!(message.member.roles.cache.some(r => r.id === "783700556472254525"))) return

      let reason;

      const user = await bot.users.fetch(args[0])

      if (!args[1])
      {
        reason = "Not specified"
      }

      else
      {
        reason = args[1]
      }

      const embed = new Discord.MessageEmbed()
      .setTitle(`${user.username} was banned!`)
      .setDescription(`${user.username} was banned by ${message.author.username} for: ${reason}`)
      .setColor("GREEN")
      .setFooter("Ban Command")
      .setTimestamp()

      message.channel.send(embed)

      message.guild.members.ban(user)

  }
}