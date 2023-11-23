# hover
`player.hover`

The hover module is responsible for the text that will appear when you hover over a player's nickname in a message, and for the action when you click on a player's nickname

![hover](hover.png)

## Customizing messages

You can change the message when hovering over a player's nickname in the localization file

```yaml
player:
  hover:
    message: "&&1Click to write to &&2<player>"
```

## Module customization

| Parameter    | Description                        | Type     | Default          |
| ------------ | ---------------------------------- | -------- | ---------------- |
| command-type | The type of command to be executed | `string` | `suggest/run`    |
| command      | Text to be executed by the command | `string` | `/msg <player> ` |