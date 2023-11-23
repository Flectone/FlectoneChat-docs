# advancement
`server-message.advancement`

The advancement module is responsible for reporting the receipt of an achievement

![advancement](advancement.png)

## Customizing messages
You can change the messages about getting the achievement in the localization file
```yaml
server-message:
  advancement:
    type:
      name: "<player> получил достижение [<advancement>]"
      hover: "<name> <description>"
```

## Placeholders

Placeholders - words that may be changed when composing an achievement message

| Parameter       | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| `<player>`      | The player who received the achievement                             |
| `<advancement>` | The name of the achievement that you can hover over for information |
| `<name>`        | The name of the achievement                                         |
| `<description>` | Description of the achievement                                      |

## Module customization

| Parameter         | Description      | Type      | Default |
| ----------------- | ---------------- | --------- | ------- |
| task-visible      | Show achievement | `boolean` | `true`  |
| goal-visible      | Show goal        | `boolean` | `true`  |
| challenge-visible | Show challenge   | `boolean` | `true`  |
