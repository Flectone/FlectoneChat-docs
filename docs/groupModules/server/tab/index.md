# tab
`server.tab`

The tab module is responsible for the text shown in the TAB window

![tab](tab.png) 
1. header 
2. footer 
3. player-list-name 
4. player-list

## Customizing messages

::: details header
You can change the messages in the header in the localization file by changing/adding a line in `server.tab.header.message` 

```yaml
    tab:
      header:
        message:
          - " "
          - "&&1❤"
          - " "
```

### Animation

You can animate the header by adding new frames to the `server.tab.header.message` and separating them with the word `<next>`

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
You can change the messages in the header in the localization file by changing/adding a line in `server.tab.footer.message` 

```yaml
    tab:
      footer:
        message:
          - " "
          - "&&1❤"
          - " "
```

### Animation

You can animate the footer by adding new frames to `server.tab.footer.message` and separating them with the word `<next>`

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
It is possible to change the name of a player in a tab in `player.name.tab` in the config

```yaml
  player:
    name:
      tab: "<player_prefix>&f<player_name_real><player_suffix>"
```
:::

## Module customization

### `server.tab.player-list`
| Parameter | Description                                                                             | Type     | Default |
| --------- | --------------------------------------------------------------------------------------- | -------- | ------- |
| mode      | player-list text mode. Could be one of: `health` `level` `ping` `food` `armor` `attack` | `string` | `ping`  |


### `server.tab.update`
| Parameter | Description                            | Type      | Default |
| --------- | -------------------------------------- | --------- | ------- |
| enable    | enable message update (for animations) | `boolean` | `true`  |
| rate      | frame rate (in ticks)                  | `number`  | `40`    |

