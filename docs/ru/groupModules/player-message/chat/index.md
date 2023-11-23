# Chat
`player-message.chat`

Модуль chat отвечает за разделение чатов, их функционала и отображения.

Настроить список чатов можно в `config.yml` в списке `player-message.chat.list`

::: details (пример) 3 чата: local, global, custom
```yaml{1,21,38}
    chat:
      list:
        local: # название чата // [!code focus]
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

        global: # название чата // [!code focus]
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
        custom: # название чата // [!code focus]
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

::: info Важно
Для сообщения игрока выбирается самый подходящий чат по приоритету и триггеру\
Если чат не найден, то будет выведено сообщение `player-message.chat.not-found`
:::

## Настройка чатов

| Параметр             | Описание                                                                                                                               | Тип        |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------|------------|
| enable               | Включить чат                                                                                                                           | `boolean`  |
| priority             | Приоритет чата (чем выше, тем главнее)                                                                                                 | `number`   |
| features             | Список возможностей, работающих в чате                                                                                                 | `string[]` |
| worlds               | Список названий миров, в которых доступен чат (работает, если range = 0)                                                               | `string[]` |
| format               | Формат сообщения от игрока                                                                                                             | `string`   |
| range                | Радиус действия чата (в блоках) <br/> 0 = для всего сервера                                                                            | `number`   |
| no-recipients.enable | Включить сообщение о том, что никто не получил сообщение                                                                               | `boolean`  |
| prefix.trigger       | Символ, при обнаружении которого, сообщение будет отправлено в связанный с ним чат <br/> Пустая строка (`""`) означает любое сообщение | `string`   |
| prefix.cleared       | Удалять префикс из сообщения                                                                                                           | `boolean`  |
| set-cancelled        | Отменять эвент сообщения (для других плагинов)                                                                                         | `boolean`  |