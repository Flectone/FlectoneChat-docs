# swear-protection
`player-message.swear-protection`

The swear-protection module is responsible for censoring chat messages

![Swear protection](swear-protection.jpg)


::: warning Warning
Any Unicode characters will be uncensored
:::


You can customize the blocked words in the `swears.yml` file
```yaml
 list:
   - banned
   - words
   - here
```

The symbol that will replace the blocked words can be changed in the config `player-message.swear-protection.symbol`
```yaml
  player-message:
    swear-protection:
      symbol: "❤"
```
