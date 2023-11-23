# Chat
`player-message.chat`

The chat module is responsible for separating chat rooms, their functionality and display.

You can customize the chat list in `config.yml` in the `player-message.chat.list` list

::: details (example) 3 chats: local, global, custom
```yaml{1,21,38}
    chat:
      list:
        local: # chat name // [!code focus]
          enable: true
          priority: 0
          features: [swear-protection, patterns, formatting]
          worlds: []
          format: "<player_name_display>&&2: <message>"

          range: 100

          no-recipients:
            enable: true

          prefix:
            cleared: true
            trigger: ""

          set-cancelled: true

        global: # chat name // [!code focus]
          enable: true
          priority: 5
          features: [swear-protection, patterns, formatting, mention]
          worlds: []
          format: "<player_name_display>&&2 » <message>"

          range: 0

          no-recipients:
            enable: true

          prefix:
            cleared: true
            trigger: "!"

          set-cancelled: false
        custom: # chat name // [!code focus]
          enable: true
          priority: 5
          features: []
          worlds: []
          format: "<player_name_display>&c » <message>"

          range: 0

          no-recipients:
            enable: true

          prefix:
            cleared: true
            trigger: "!"

          set-cancelled: false
        #...
```
:::

::: info Important
The most suitable chat by priority and trigger is selected for the player's message\
If no chat is found, the message `player-message.chat.not-found` will be displayed.
:::

## Customizing chats

| Parameter            | Description                                                                                                                 | Type       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- |
| enable               | enable chat                                                                                                                 | `boolean`  |
| priority             | chat priority (the higher the higher the priority)                                                                          | `number`   |
| features             | list of features that work in chat                                                                                          | `string[]` |
| worlds               | List of names of worlds where chat is available (works if range = 0)                                                        | `string[]` |
| format               | format of the message from the player                                                                                       | `string`   |
| range                | chat range (in blocks) <br/> 0 = server-wide                                                                                | `number`   |
| no-recipients.enable | Enable message that no one has received a message                                                                           | `boolean`  |
| prefix.trigger       | A character which, when detected, will send a message to the associated chat <br/> An empty string (`""`) means any message | `string`   |
| prefix.cleared       | remove prefix from message                                                                                                  | `boolean`  |
| set-cancelled        | cancel event messages (for other plugins)                                                                                   | `boolean`  |

