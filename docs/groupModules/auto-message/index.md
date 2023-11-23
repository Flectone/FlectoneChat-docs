# auto-message
`auto-message`

The auto-message module is responsible for auto-messages in the chat

![Auto message](auto-message.png)


You can change the messages in the localization file
```yaml
  auto-message:
    message:
      - "&&1-------------- "
      - "&&2This server uses FlectoneChat "
      - "&&1-------------- "
      - "<next>"
      - "&&1❝ "
      - "&&1Join our discord &&2https://discord.flectone.net "
      - "&&1❠ "
 "
```

## Module customization

| Parameter | Description                      | Type      | Default |
| --------- | -------------------------------- | --------- | ------- |
| random    | Send messages in random order    | `boolean` | `false` |
| period    | period between messages in ticks | `number`  | `800`   |