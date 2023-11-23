# death
`server-message.death`

The death module is responsible for death messages

![death](death.png)

## Customizing messages
You can change the death messages in the localization file

```yaml
death:
  natural:
    type: "<player> was slain"
  mob:
    type: "&&1🪦 &&2<player> &&1was slain by &&2<killer>"
```

## Placeholders

Placeholders are words that may be changed when composing a death message. If a placeholder is in the message, but there is no replacement for it, it will be replaced by an empty string (`""`)

| Parameter      | Description                       |
| -------------- | --------------------------------- |
| `<player>`     | A player who died                 |
| `<killer>`     | A Mob that killed a player        |
| `<block>`      | The block that killed the player  |
| `<projectile>` | A projectile that killed a player |
| `<due-to>`     | The one that killed the player    |
| `<by-item>`    | The item that was used to kill    |




## Module customization
| Parameter           | Description                                        | Type      | Default |
| ------------------- | -------------------------------------------------- | --------- | ------- |
| visible             | visibility of death message                        | `boolean` | `true`  |
| mob-default         | Don't separate the kill message from each mob      | `boolean` | `true`  |
| entity-hover-enable | Allow hovering over a mob to see its type and uuid | `boolean` | `true`  |