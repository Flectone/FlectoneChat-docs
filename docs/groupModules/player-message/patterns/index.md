# patterns
`player-message.patterns`

The patterns module is responsible for modifying template expressions.

For example, `:)` will be replaced by `☺`
![replaced](replaced.jpg)

You can customize the list of patterns by adding them to the `player-message.patterns.list` list

```yaml
  player-message:
    patterns:
      list:
        
#        ↓ replaced expression
        ':)': "☺"
#              ↑ final expression
        
        ':D': "☻"
        ':(': "☹"
        ':ok:': "🖒"
        ':+1:': "🖒"
        ':-1': "🖓"
        ':cool:': "😎"
        'B)':  "😎"
        ':clown:': "🤡"
        '<3': "❤"
        'xd': "😆"
        '%)': "😵"
        '=D': "😃"
        '>:(': "😡"
        ':idk:': "¯\\_(ツ)_/¯"
        ':angry:': "(╯°□°)╯︵ ┻━┻"
        ':happy:': "＼(＾O＾)／"
        #...
```
