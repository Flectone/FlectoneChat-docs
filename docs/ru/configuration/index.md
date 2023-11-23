# Конфиг
`config.yml`

## Плагин

```yaml
plugin:
  # Версия текущего конфига, НЕ ТРОГАТЬ!
  version: 4.0.0

  # Язык используемый для сообщений, доступны `en` и `ru`
  language: en

  # Название файла датабазы
  database:
    name: "database"

  # Использовать ли кастомный Scoreboard для плагина FlectoneChat
  # Стоит включать только тогда, когда не работает по умолчанию
  # (обычно это помогает, когда другие плагины работают с Scoreboard)
  scoreboard:
    custom: false

  # Разрешить метрику
  bStats:
    enable: true
```

## Группы
FlectoneChat позволяет настраивать [любое действие](../groupModules/extra/) для любой группы

::: tip Важно
1. Параметр может отсутствовать у новых групп и он будет браться из default
2. Чтобы изменить параметр, он должен быть изменён у этой группы
3. Параметры наследуются по весу группы
4. Все параметры, имеющие тип `string[]` наследуются всегда, даже если для группы создан другой параметр. НО одинаковые заменяют друг друга, поэтому проблем быть не должно
:::

```yaml
# Название группы
default:
  extra:
    enable: true

    item-sign:
      enable: true

      format: "<dye>&o#<player>"
      block: "ANVIL"

      unsign:
        enable: true
        drop-dye: true
        block: "GRINDSTONE"

# Название группы
example:
  extra:
    enable: true

    item-sign:
      enable: true

      format: "<dye>&b#<player>"
      block: "STONE"
```
