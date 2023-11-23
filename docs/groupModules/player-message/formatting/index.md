# formatting
`player-message.formatting`

The formatting module is responsible for formatting and placeholders in chat.

::: details ping
`player-message.formatting.ping`\
Placeholder `%ping%` - ping of the player

```yaml
        ping:
#          ↓ ping level
          bad: 
            color: "#ff4e4e" # color
            count: 200
#                   ↑ minimal ping (ms)
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
Placeholder `%cords%` - coordinates of the player

![cords](cords.png)
:::

::: details stats
`player-message.formatting.stats`\
Placeholder `%stats%` - basic statistics of the player

![stats](stats.png)
:::

::: details url
`player-message.formatting.url`\
Link formatting

```yaml
        url:
          hover:
            # Enable hover message 
            enable: true
            
          # Make the link clickable
          clickable: true
          # Customize custom link finding
          trigger: ((https?|ftp|gopher|telnet|file):((//)|(\\))+[\w:#@%/;$()~_?+-=\\.&]*)
          # Formatting for the link
          format: "&&1<message>"
```

![url](url.png)
:::

::: details item
`player-message.formatting.item`\
Placeholder `%item%` - item in hand

![item](item.png)
:::

::: details mention
`player-message.formatting.mention`\
Mention in chat

```yaml
        mention:
          trigger: "@" # symbol for mentions
          format: "&&1@<message>" # mention format

```

![mention](mention.png)
:::

::: details markdown-||
`player-message.formatting.markdown-||`\
`||spoiler||`

```yaml
        markdown-||:
          symbol: "&&1█" # symbol for spoilers
```

![spoiler](spoiler.png)
:::

::: details markdown-**
`player-message.formatting.markdown-`\
`**bold**`
![markdown](markdown1.jpg)
:::

::: details markdown-##
`player-message.formatting.markdown-##`\
`__italic__`
![markdown](markdown2.jpg)
:::

::: details markdown-__
`player-message.formatting.markdown-__`\
`__underlined__`
![markdown](markdown3.jpg)
:::

::: details markdown-??
`player-message.formatting.markdown-??`\

`??obfuscated??`
![markdown](markdown4.jpg)
:::

::: details markdown-~~
`player-message.formatting.markdown-~~`\
`##strikethrough##`
![markdown](markdown5.jpg)
:::