# formatting
`player-message.formatting`

Модуль formatting отвечает за форматирование и плэйсхолдеры в чате.

::: details ping
`player-message.formatting.ping`\
Плейсхолдер `%ping%` - пинг игрока

```yaml
        ping:
#          ↓ уровень пинга
          bad: 
            color: "#ff4e4e" # цвет
            count: 200
#                   ↑ минимальный уровень пинга (ms)
          medium: 
            color: "#fce303"
            count: 100
          good:
            color: "#4eff52"
```

![ping](ping.jpg)
:::

::: details cords
`player-message.formatting.cords`\
Плейсхолдер `%cords%` - координаты игрока

![cords](cords.png)
:::

::: details stats
`player-message.formatting.stats`\
Плейсхолдер `%stats%` - основная статистика игрока

![stats](stats.png)
:::

::: details url
`player-message.formatting.url`\
Форматирование ссылок

```yaml
        url:
          hover:
            # Включить сообщение при наведении 
            enable: true
            
          # Сделать, чтобы ссылка нажималась
          clickable: true
          # Настроить кастомное нахождение ссылок
          trigger: ((https?|ftp|gopher|telnet|file):((//)|(\\))+[\w:#@%/;$()~_?+-=\\.&]*)
          # Форматирование для ссылки
          format: "&&1<message>"
```

![url](url.png)
:::

::: details item
`player-message.formatting.item`\
Плейсхолдер `%item%` - предмет в руке

![item](item.png)
:::

::: details mention
`player-message.formatting.mention`\
Упоминание в чате

```yaml
        mention:
          trigger: "@" # Символ для упоминания
          format: "&&1@<message>" # Формат упоминания

```

![mention](mention.png)
:::

::: details markdown-||
`player-message.formatting.markdown-||`\
`||Спойлер||`

```yaml
        markdown-||:
          symbol: "&&1█" # Символ для спойлеров
```

![spoiler](spoiler.png)
:::

::: details markdown-**
`player-message.formatting.markdown-`\
`**Жирный текст**`
![markdown](markdown1.jpg)
:::

::: details markdown-##
`player-message.formatting.markdown-##`\
`__курсивный текст__`
![markdown](markdown2.jpg)
:::

::: details markdown-__
`player-message.formatting.markdown-__`\
`__подчёркнутый текст__`
![markdown](markdown3.jpg)
:::

::: details markdown-??
`player-message.formatting.markdown-??`\

`??случайные символы??`
![markdown](markdown4.jpg)
:::

::: details markdown-~~
`player-message.formatting.markdown-~~`\
`##зачёркнутый текст##`
![markdown](markdown5.jpg)
:::