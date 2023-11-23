# quit
`server-message.quit`

The quit module is responsible for the message when a player quits

![quit](quit.png)

## Customizing messages
You can change the message when a player leaves the server in the localization file
```yaml
server-message:
  quit:
    message: "#ff4e4e← &&2<player>"

    first-time:
      message: "#ff4e4e← &&2<player> &&1left the server for the first time"
```
## Module customization

| Parameter         | Description                                        | Type      | Default |
| ----------------- | -------------------------------------------------- | --------- | ------- |
| first-time-enable | Send a message the first time you leave the server | `boolean` | `true`  |