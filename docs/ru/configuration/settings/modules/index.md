# Модули
`modules.yml`

Для настройки FlectoneChat используется модульная система, которая предоставляет удобную настройку для каждой функции плагина.

## Отключение модулей

Включить или выключить любой модуль либо в конфиге модуля (`config.yml`), либо в файле `modules.yml`

```yaml{4-6}
player-message:
  enable: true

  # Модуль swear-protection выключен!
  swear-protection:
    enable: false

  patterns:
    enable: true

  formatting:
    enable: true

  anvil:
    enable: true
  book:
    enable: true
  sign:
    enable: true

  chat:
    enable: true
```

Также модули могут лежать внутри других модулей и при отключении родительского модуля все вложенные модули также будут выключены.

```yaml{1-3}
extra:
  # Все extra модули выключены
  enable: false

  item-sign:
    enable: true

    unsign: # Сабмодуль unsign также выключен
      enable: true

  mark:
    enable: true

  knocking:
    enable: true

  spit:
    enable: true
```
