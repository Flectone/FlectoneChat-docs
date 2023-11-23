# world
`player.world`

Модуль world отвечает за отображение цвета мира в котором находится игрок

![World over](world-over.png)
![World nether](world-nether.png)
![World end](world-end.png)

::: info Важно
1. Если режим `mode` указан неверно, то используется режим `name`
2. Если режим `mode` указан, как `name` и название мира не найдено, то вернётся пустая строка (`""`)
:::

## Настройка модуля

| Параметр      | Описание                                                | Тип      | Значение по умолчанию                                |
|---------------|---------------------------------------------------------|----------|------------------------------------------------------|
| mode          | Режим проверки мира по имени, в котором находится игрок | `string` | `type/name`                                          |
| normal        | Цвет по типу мира "Обычный мир"                         | `string` | `<player_prefix>&f<player_name_real><player_suffix>` |
| nether        | Цвет по типу мира "Нижний мир"                          | `string` | `<world_prefix><vault_prefix><stream_prefix>`        |
| the_end       | Цвет по типу мира "Энд"                                 | `string` | `<GRADIENT:11b8f0><player></GRADIENT:87cee6>`        |
| custom        | Цвет по типу мира "Кастом"                              | `string` | `<afk_suffix><vault_suffix>`                         |
| world         | Цвет по названию мира "Обычный мир"                     | `string` | `<afk_suffix><vault_suffix>`                         |
| world_nether  | Цвет по названию мира "Нижний мир"                      | `string` | `<afk_suffix><vault_suffix>`                         |
| world_the_end | Цвет по названию мира "Энд"                             | `string` | `<afk_suffix><vault_suffix>`                         |
