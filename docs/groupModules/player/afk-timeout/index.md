# afk-timeout
`player.afk-timeout`

The afk-timeout module is responsible for transitioning the player to the afk state after some time

![afk-timeout](afk-timeout.png)

## Customizing messages
You can change messages about switching to AFK in the localization file
```yaml
commands:
  afk:
    suffix: " #f2d40f💤"
    true-message: "#f2d40f💤 Now you're afk"
    false-message: "#f2d40f💤 Now you're not afk"
```

## Module customization
| Parameter        | Description                                                                      | Type       | Default                        |
| ---------------- | -------------------------------------------------------------------------------- | ---------- | ------------------------------ |
| time             | Time (in ticks) after which the player will get the status of afk without action | `number`   | `3000`                         |
| message-enable   | send a message that the person is now afk                                        | `boolean`  | `true`                         |
| take-out-actions | Actions that take a person out of afk status                                     | `string[]` | `[/afk, commands, chat, move]` |

