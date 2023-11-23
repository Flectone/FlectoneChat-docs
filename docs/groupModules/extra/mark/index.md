# mark
`extra.mark`

The mark module is responsible for creating temporary marks

To create a mark, you need to take the item that is specified in `config.yml`, and press RMB
![mark](mark.png)

:::info Important
The color of the label depends on [item name](#color). If the name is not a color, it will default to white
:::

## Colors
| Parameter    | Color                                |
| ------------ | ------------------------------------ |
| BLACK        | <span style="color:#000000">■</span> |
| DARK_BLUE    | <span style="color:#0000AA">■</span> |
| DARK_GREEN   | <span style="color:#00AA00">■</span> |
| DARK_AQUA    | <span style="color:#00AAAA">■</span> |
| DARK_RED     | <span style="color:#AA0000">■</span> |
| DARK_PURPLE  | <span style="color:#AA00AA">■</span> |
| GOLD         | <span style="color:#FFAA00">■</span> |
| GRAY         | <span style="color:#AAAAAA">■</span> |
| DARK_GRAY    | <span style="color:#555555">■</span> |
| BLUE         | <span style="color:#5555FF">■</span> |
| GREEN        | <span style="color:#55FF55">■</span> |
| AQUA         | <span style="color:#55FFFF">■</span> |
| RED          | <span style="color:#FF5555">■</span> |
| LIGHT_PURPLE | <span style="color:#FF55FF">■</span> |
| YELLOW       | <span style="color:#FFFF55">■</span> |
| WHITE        | <span style="color:#FFFFFF">■</span> |

## Module customization

| Parameter | Description                            | Type     | Default        |
| --------- | -------------------------------------- | -------- | -------------- |
| Item      | Item that can create marks             | `string` | `WOODEN_SWORD` |
| range     | distance at which a mark can be placed | `number` | `30`           |