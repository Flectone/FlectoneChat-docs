# world
`player.world`

The world module is responsible for displaying the color of the world the player is in

![World over](world-over.png)
![World nether](world-nether.png)
![World end](world-end.png)

::: info Important
1. If `mode` is specified incorrectly, the `name` mode is used
2. If `mode` mode is specified as `name` and no world name is found, an empty string (`""`) is returned.
:::

## Module customization

| Parameter     | Description                                             | Type     | Default                                              |
| ------------- | ------------------------------------------------------- | -------- | ---------------------------------------------------- |
| Mode          | Mode of checking the world by the name the player is in | `string` | `type/name`                                          |
| normal        | Color by world type "normal"                            | `string` | `<player_prefix>&f<player_name_real><player_suffix>` |
| nether        | Type Color "nether"                                     | `string` | `<world_prefix><vault_prefix><stream_prefix>`        |
| the_end       | color by world type "the end"                           | `string` | `<GRADIENT:11b8f0><player></GRADIENT:87cee6>`        |
| Custom        | Custom World Color                                      | `string` | `<afk_suffix><vault_suffix>`                         |
| world         | Color by world name "world"                             | `string` | `<afk_suffix><vault_suffix>`                         |
| world_nether  | Color by world name "the_nether"                        | `string` | `<afk_suffix><vault_suffix>`                         |
| world_the_end | Color by world name "the_end"                           | `string` | `<afk_suffix><vault_suffix>`                         |
