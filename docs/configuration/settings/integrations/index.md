# Integrations

The `integrations.yml` file is responsible for communication between other plugins

## PlaceholderAPI

FlectoneChat has its own unique placeholders

| Parameter                        | Description                                                    |
| -------------------------------- | -------------------------------------------------------------- |
| `%flectonechat_player_name_tab%` | Returns string `player.name.tab` from `config.yml`             |
| `%flectonechat_player_suffix%`   | Returns string `player.name.suffix` from `config.yml`          |
| `%flectonechat_player_prefix%`   | Returns string `player.name.prefix` from `config.yml`          |
| `%flectonechat_moderation_ban%`  | Returns string `0`, when player is not banned, а `1` - banned  |
| `%flectonechat_moderation_mute%` | Returns string `0`, when player is not muted `1` - muted       |
| `%flectonechat_moderation_warn%` | Returns a string of the number of warnings for the player      |
| `%flectonechat_lastonline%`      | Returns a string with the date when the player last logged in  |
| `%flectonechat_firstonline%`     | Returns a string with the date when the player first logged in |
| `%flectonechat_stream_prefix%`   | Returns the current stream prefix of the player                |
| `%flectonechat_afk_suffix%`      | Returns the current afk suffix                                 |
| `%flectonechat_world_prefix%`    | Returns string `player.world.?` from `config.yml`              |

## InteractiveChat

FlectoneChat supports all formatting from InteractiveChat, including mentions

## LuckPerms

FlectoneChat gets the weight of the groups to sort using LuckPerms, and also gets the groups themselves

::: info Information
If LuckPerms is installed on the server, the Vault plugin is not required
:::

## SuperVanish

FlectoneChat supports the SuperVanish plugin's hiding and showing player events, and also does not show player actions with vanish

## Vault

FlectoneChat uses Vault to get the player's group

::: warning Warning
Sorting by group weight will not work without LuckPerms
:::

## PlasmoVoice

FlectoneChat mutes a player if he gets a mute with the `/mute` command, also in the PlasmoVoice plugin

## VoiceChat

FlectoneChat mutes a player if he gets a mute with the `/mute` command, also in the VoiceChat plugin (SimpleVoiceChat)

## DiscordSRV

FlectoneChat modifies the messages that are sent from minecraft to DiscordSRV with `features`

```yaml
DiscordSRV:
  features: [ swear-protection, patterns, formatting ]
```

### Customizing messages
FlectoneChat has the ability to send a message of some actions to DiscordSRV

| Parameter              | Description                                                      | Type      |
| ---------------------- | ---------------------------------------------------------------- | --------- |
| channel-id             | ID of the discord channel to which the message will be sent      | `string`  |
| content.text           | plain text of the message                                        | `string`  |
| embed.color            | The color of the message embed (HEX format)                      | `string`  |
| embed.image.url        | Link for the main image of the embed                             | `string`  |
| embed.title.text       | Embed title                                                      | `string`  |
| embed.title.icon.url   | Link for the embed name avatar                                   | `string`  |
| embed.description.text | embed description                                                | `string`  |
| embed.author.text      | Name of the embed author                                         | `string`  |
| embed.author.icon      | generating an avatar for the embed author from the sender's skin | `boolean` |
| embed.footer.text      | Text for the embed signature                                     | `string`  |
| embed.footer.icon.url  | avatar for the embed's signature                                 | `string`  |


