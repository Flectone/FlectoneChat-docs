# mark
`extra.mark`

Модуль mark отвечает за создание временных меток

Чтобы создать метку, нужно взять предмет, который указан в `config.yml`, и нажать ПКМ
![mark](mark.png)

:::info Важно
Цвет метки зависит от [названия предмета](#цвета). Если название не цвет, то будет по умолчанию белый
:::

## Цвета
| Параметр     | Цвет                                 |
|--------------|--------------------------------------|
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

## Настройка модуля

| Параметр | Описание                                       | Тип      | Значение по умолчанию |
|----------|------------------------------------------------|----------|-----------------------|
| item     | Предмет с помощью которого можно ставить метки | `string` | `WOODEN_SWORD`        |
| range    | Расстояние на котором возможно ставить метку   | `number` | `30`                  |