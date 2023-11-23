# join
`server-message.join`

The join module is responsible for the message when a player enters

![join](join.png)

## Customizing messages
You can change the message when a player enters the server in the localization file
```yaml
server-message:
  join:
    message: "#4eff52→ &&2<player>"

    first-time:
      message: "#4eff52→ &&2<player> &&1has logged on to the server for the first time, let's welcome!"
```

## Module customization

| Parameter         | Description                                         | Type      | Default |
| ----------------- | --------------------------------------------------- | --------- | ------- |
| first-time-enable | Send a message the first time you access the server | `boolean` | `true`  |
