# swear-protection
`player-message.swear-protection`

Модуль swear-protection отвечает за цензуру сообщений в чате

![Swear protection](swear-protection.jpg)


::: warning Предупреждение
Любые Unicode символы будут не проходить цензуру
:::


Настроить заблокированные слова можно в файле `swears.yml`
```yaml
 list:
   - мат
   - запретка
   - и т.д.
```

Символ, который будет заменять заблокированные слова, можно изменить в конфиге `player-message.swear-protection.symbol`
```yaml
  player-message:
    swear-protection:
      symbol: "❤"
```
