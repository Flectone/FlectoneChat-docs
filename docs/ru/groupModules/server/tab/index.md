# tab
`server.tab`

Модуль tab отвечает за текст, показываемый в окне TAB

![tab](tab.png) 
1. header 
2. footer 
3. player-list-name 
4. player-ping

## Настройка сообщений

::: details header
Изменить сообщения в хэдере можно в файле локализации, изменив/добавив строчку в `server.tab.header.message` 

```yaml
    tab:
      header:
        message:
          - " "
          - "&&1❤"
          - " "
```

### Анимация

Анимировать хэдер можно добавив новые кадры в `server.tab.header.message` и разделив их словом `<next>`

```yaml
    tab:
      header:
        message:
          - " "
          - "&&1❤" 
          - " "
          - "<next>"
          - " "
          - "&&2❤"
          - " "
```
:::

::: details footer
Изменить сообщения в хэдере можно в файле локализации, изменив/добавив строчку в `server.tab.footer.message` 

```yaml
    tab:
      footer:
        message:
          - " "
          - "&&1❤"
          - " "
```

### Анимация

Анимировать футер можно добавив новые кадры в `server.tab.footer.message` и разделив их словом `<next>`

```yaml
    tab:
      footer:
        message:
          - " "
          - "&&1❤"
          - " "
          - "<next>"
          - " "
          - "&&2❤"
          - " "
```
:::

::: details player-list-name
Изменить имя игрока в табе возможно в `player.name.tab` в конфиге

```yaml
  player:
    name:
      tab: "<player_prefix>&f<player_name_real><player_suffix>"
```
:::

## Настройка модуля

### `server.tab.player-ping`
| Параметр | Описание                                  | Тип       | Значение по умолчанию |
| -------- | ----------------------------------------- | --------- | --------------------- |
| enable   | Включить отображение пинга возле никнейма | `boolean` | `true`                |


### `server.tab.update`
| Параметр | Описание                                     | Тип       | Значение по умолчанию |
| -------- | -------------------------------------------- | --------- | --------------------- |
| enable   | Включить обновление сообщения (для анимаций) | `boolean` | `true`                |
| rate     | Скорость изменения кадров (в тиках)          | `number`  | `40`                  |