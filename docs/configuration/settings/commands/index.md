# Command

The `commands.yml` file is responsible for the commands of FlectoneChat's commands

## /afk

### Command configuration
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  afk:
    suffix: " #f2d40f💤"
    true-message: "#f2d40f💤 Now you're afk"
    false-message: "#f2d40f💤 Now you're not afk"
```

## /ball
| Parameter | Description                               | Type       | Default                                    |
| --------- | ----------------------------------------- | ---------- | ------------------------------------------ |
| aliases   | Aliases                                   | `string[]` | `[]`                                       |
| features  | List of features that work with the team  | `string[]` | `[swear-protection, patterns, formatting]` |
| range     | Distance at which the message can be seen | `number`   | `0`                                        |

### Messages configuration
```yaml
commands:
  ball:
    usage: "&&1⚑ Usage: &&2/<command> (message)"
    message: "#bb63f2❓ <player> asked: <message> \n#9340c7🔮 Ball answered: <answer>"
    answers:
      - "Undeniably"
      - "No doubt about it."
      - "Definitely yes."
      - "You can be sure of it"
      - "Probably most likely"
      - "Good prospects"
      - "Yes"
      - "Not sure yet, try again."
      - "Ask later."
      - "It's better not to tell."
      - "You can't predict now."
      - "Concentrate and ask again"
      - "Don't even think about it"
      - "No"
      - "Prospects are not good."
      - "Very doubtful."
      - "Based"
```

## /ban
| Parameter              | Description                                                  | Type       | Default           |
| ---------------------- | ------------------------------------------------------------ | ---------- | ----------------- |
| aliases                | Aliases                                                      | `string[]` | `[tempban, tban]` |
| range                  | Distance at which the message can be seen                    | `number`   | `0`               |
| load-minecraft-banlist | Load default banlist to FlectoneChat                         | `bool`     | `false`           |
| tab-complete-mode      | Hint for player nicknames <br/> 0 - Offline <br/> 1 - Online | `number`   | `0`               |

### Messages configuration
```yaml
commands:
  ban:
    usage: "&&1⚑ Usage: &&2/<command> (player) (time) (reason)"
    default-reason: "You have been banned from this server"

    server-message: "#ff4e4e\n⏵ Player <player> has been banned for <time> \n⏵ Reason: <reason> \n⏵ Moderator: <moderator>\n"
    player-message: "#ff4e4e☠ You are banned, <time> left \nReason: <reason>"

    permanent-server-message: "#ff4e4e\n⏵ Player <player> has been banned permanently \n⏵ Reason: <reason> \n⏵ Moderator: <moderator>\n"
    permanent-player-message: "#ff4e4e☠ You are banned permanently \nReason: <reason>"
```

## /banlist
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |


### Messages configuration
```yaml
commands:
  banlist:
    empty: "#4eff52☺ No banned players found"
    page-not-exist: "#ff4e4e⁉ This page doesn't exist"
    title: "&&2════ Banned: <count> ════"
    player-ban: "<unban> &&1<player> - <reason> - <time> left - <moderator> moderator"
    player-ban-permanently: "<unban> &&1<player> - <reason> - permanently - <moderator> moderator"
    page-line: "<prev-page> &&1Page: <page>/<last-page> <next-page>"

    prev-page: "&&2←"
    next-page: "&&2→"

    unban-button: "&c☒"
    unban-hover: "&&1Click to unban &&2<player>"
```

## /me
| Parameter | Description                                 | Type       | Default                                    |
| --------- | ------------------------------------------- | ---------- | ------------------------------------------ |
| aliases   | Aliases                                     | `string[]` | `[ tempban, tban ]`                        |
| range     | Distance at which the message can be seen   | `number`   | `0`                                        |
| features  | List of features that work with the command | `string[]` | `[swear-protection, patterns, formatting]` |
```yaml
commands:
  me:
    usage: "&&1⚑ Usage: &&2/<command> (message)"
    message: "&&1✎ <player> <message>"
```

## /broadcast
| parameter | description                                 | type       | default                  |
| --------- | ------------------------------------------- | ---------- | ------------------------ |
| aliases   | aliases                                     | `string[]` | `[bc]`                   |
| features  | List of features that work with the command | `string[]` | `[patterns, formatting]` |
| range     | distance at which the message can be seen   | `number`   | `0`                      |
### messages configuration
```yaml
commands:
  broadcast:
    usage: "&&1⚑ Usage: &&2/<command> (message)"
    message: "#fce303🕫 Message for all from <player> \n<message>"
```

## /chatcolor
| parameter | description                            | type       | default |
| --------- | -------------------------------------- | ---------- | ------- |
| aliases   | aliases                                | `string[]` | `[]`    |
| minimum   | minimum number of colors to be entered | `number`   | `2`     |
### messages configuration
```yaml
commands:
  chatcolor:
    usage: "&&1⚑ Usage: &&2/<command> (...colors)"
    message: "#4eff52★ You set <colors>"
    color: "<color>message "
    minimum-message: "#ff4e4e⁉ Too few colors needed at least <minimum>"
```

## /chatsettings
| parameter   | description                            | type       | default                                                                                                                                   |
| ----------- | -------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| aliases     | aliases                                | `string[]` | `[]`                                                                                                                                      |
| change-list | parameters, that the player can change | `string[]` | `[local, global, advancement, death, join, quit, auto-message, me, try, dice, ball, kick, ban, mute, warn, tell, reply, mail, tictactoe]` |

### messages configuration
```yaml
commands:
  chatsettings:
    usage: "&&1⚑ Usage: &&2/<command>"
    hover-text: "&&1Click to change &&2<component> &&1display"
    not-available: "#ff4e4e⁉ Cannot change this setting"
    message-changed: "&&1⚙ Did you change the settings, save them #4eff52[✔]&&1?"

    format:
      chat: "&&2<chat>"
      advancement: "&&2Advancements"
      death: "&&2Deaths"
      join: "&&2Joins"
      quit: "&&2Quits"
      auto-message: "&&2Auto-message"
      me: "&&2/me"
      try: "&&2/try"
      dice: "&&2/dice"
      ball: "&&2/ball"
      kick: "&&2/kick"
      ban: "&&2/ban"
      mute: "&&2/mute"
      warn: "&&2/warn"
      tell: "&&2/tell"
      reply: "&&2/reply"
      mail: "&&2/mail"
      tictactoe: "&&2/tictactoe"

    color:
      false: "#ff4e4e[❌] "
      true: "#4eff52[✔] "

    message:
      - " "
      - "&&1════ Chat settings ════"
      - "&&1Chat types: <chat>"
      - "&&1------------------------"
      - "&&1Server messages: \n <advancement> \n <death> \n <join> \n <quit> \n <auto-message>"
      - "&&1------------------------"
      - "&&1Command alerts: \n <me> \n <try> \n <dice> \n <ball> \n <kick> \n <ban> \n <mute> \n <warn> \n <tell> \n <reply> \n <mail> \n <tictactoe>"
      - "&&1------------------------"
      - "&&1Be sure to save your settings with /chatsettings save"
```

## /clearchat
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |
### Messages configuration
```yaml
commands:
  clearchat:
    message: "&&1💬 Chat is cleared"
```


## /firstonline 
| Parameter         | Description                                                  | Type       | Default |
| ----------------- | ------------------------------------------------------------ | ---------- | ------- |
| aliases           | Aliases                                                      | `string[]` | `[]`    |
| tab-complete-mode | Hint for player nicknames <br/> 0 - Offline <br/> 1 - Online | `number`   | `0`     |
 
### Messages configuration
```yaml
commands:
  firstonline:
      usage: "&&1⚑ Usage: &&2/<command> (player)"
      message: "&&1⌛ &&2<player> &&1was first on server &&2<time> &&1ago"
```

## /flectonechat
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[fc]`  |

### Messages configuration
```yaml
commands:
  flectonechat:
    usage: "&&1⚑ Usage: &&2/<command> reload/set"
    wrong-file: "#ff4e4e⁉ Enter the correct file name"
    message: "&&1★ Plugin successfully reloaded!"
```

## /geolocate
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |
### Messages configuration
```yaml
commands:
  geolocate:
    usage: "&&1⚑ Usage: &&2/<command> (player)"
    fail: "#ff4e4e⁉ Problem receiving information, try again"
    message: "&&1Geolocation for &&2<player>\n
              &&1Country: &&2<country>\n
              &&1Region: &&2<region_name>\n 
              &&1City: &&2<city>\n
              &&1Timezone: &&2<timezone>\n
              &&1Mobile connection: &&2<mobile>\n 
              &&1VPN: &&2<proxy>\n
              &&1Hosting: &&2<hosting>\n 
              &&1IP: &&2<query>"
```

## /helper
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |
### Messages configuration
```yaml
commands:
  helper:
    usage: "&&1⚑ Usage: &&2/<command> (message)"
    no-helpers: "#ff4e4e⁉ There are no people who can help you"
    server-message: "&&1👤 <player> needs help ⏩ &&2<message>"
    player-message: "&&1👤 Request sent, awaiting reply"
```


## /ignore
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml 
commands:
  ignore:
    usage: "&&1⚑ Usage: &&2/<command> (player)"
    myself: "#ff4e4e⁉ You can't ignore yourself"
    true-message: "#ff4e4e☹ You ignore <player>"
    false-message: "#4eff52☺ You unignore <player>"
```

## /ignorelist
| Parameter | Description                | Type       | Default |
| --------- | -------------------------- | ---------- | ------- |
| aliases   | Aliases                    | `string[]` | `[]`    |
| per-page  | Number of players per page | `number`   | `4`     |

### Messages configuration
```yaml
commands:
  ignorelist:
    usage: "&&1⚑ Usage: &&2/<command>"
    empty: "#4eff52☺ You don't ignore anyone"
    page-not-exist: "#ff4e4e⁉ This page doesn't exist"

    title: "&&2════ Ignores: <count> ════"
    player-ignore: "<unignore> &&1<player>"
    page-line: "<prev-page> &&1Page: <page>/<last-page> <next-page>"

    prev-page: "&&2←"
    next-page: "&&2→"

    unignore-button: "&c☒"
    unignore-hover: "&&1Click to unignore &&2<player>"
```

## /kick
| Parameter | Description                               | Type       | Default |
| --------- | ----------------------------------------- | ---------- | ------- |
| aliases   | Aliases                                   | `string[]` | `[]`    |
| range     | Distance at which the message can be seen | `number`   | `0`     |
### Messages configuration
```yaml
commands:
  kick:
    usage: "&&1⚑ Usage: &&2/<command> (player) (reason)"
    default-reason: "Kicked by an operator"
    server-message: "#ff4e4e\n⏵ Player <player> was kicked \n⏵ Reason: <reason> \n⏵ Moderator: <moderator>\n"
    player-message: "#ff4e4e☠ You were kicked by <moderator> \nReason: <reason>"
```

## /lastonline
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  lastonline:
    usage: "&&1⚑ Usage: &&2/<command> (player)"
    currently: "&&1⌛ &&2<player> &&1currently on server"
    message: "&&1⌛ &&2<player> &&1was last on server <time> ago"
```

## /mail
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  mail:
    usage: "&&1⚑ Usage: &&2/<command> (player) (message)"
    send: "&&1✉ [Offline mail] to <player> ⏩ &&2<message>"
    get: "&&1✉ [Offline mail] from <player> ⏩ &&2<message>"
```

## /clearmail
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  clearmail:
    usage: "&&1⚑ Usage: &&2/<command> (player) (number)"
    empty: "#ff4e4e⁉ You have no mail for this player"
    message: "&&1✉ [Offline mail] cleared for <player> ⏩ &&2<message>"
```

## /maintenance
| Parameter | Description                           | Type       | Default |
| --------- | ------------------------------------- | ---------- | ------- |
| aliases   | Aliases                               | `string[]` | `[]`    |
| turned-on | whether server maintenance is enabled | `bool`     | `false` |

### Messages configuration
```yaml
commands:
  maintenance:
    usage: "&&1⚑ Usage: &&2/<command> on/off"

    already: "#ff4e4e⁉ You have already switched on maintenance"
    not: "#ff4e4e⁉ You have not switched on maintenance"

    turned-on: "&&1★ You have enabled maintenance on the server"
    turned-off: "&&1★ You have disabled maintenance on the server"

    motd:
      message: "&cThe server is under maintenance"

    kicked-message: "&&1★ The server is under maintenance"
```

## /mark
| Parameter | Description                               | Type       | Default |
| --------- | ----------------------------------------- | ---------- | ------- |
| aliases   | Aliases                                   | `string[]` | `[]`    |
| range     | Distance at which the message can be seen | `number`   | `0`     |

### Messages configuration
```yaml
commands:
  mark:
    usage: "&&1⚑ Usage: &&2/<command> (color)"
```

## /tell
| Parameter | Description                                 | Type       | Default                                    |
| --------- | ------------------------------------------- | ---------- | ------------------------------------------ |
| aliases   | Aliases                                     | `string[]` | `[]`                                       |
| features  | List of features that work with the command | `string[]` | `[swear-protection, patterns, formatting]` |

### Messages configuration
```yaml
commands:
  tell:
    usage: "&&1⚑ Usage: &&2/<command> (player) (message)"
    send: "&&1✉ You → <player> » &&2<message>"
    get: "&&1✉ <player> → You » &&2<message>"
    myself: "&&1✉ [Note] &&2<message>"
```

## /mute
| Parameter         | Description                                                  | Type       | Default |
| ----------------- | ------------------------------------------------------------ | ---------- | ------- |
| aliases           | Aliases                                                      | `string[]` | `[bc]`  |
| range             | Distance at which the message can be seen                    | `number`   | `0`     |
| tab-complete-mode | Hint for player nicknames <br/> 0 - Offline <br/> 1 - Online | `number`   | `0`     |

### Messages configuration
```yaml
commands:
  mute:
    usage: "&&1⚑ Usage: &&2/<command> (player) (time) (reason)"
    default-reason: "You were muted on this server"
    server-message: "#ff4e4e\n⏵ Player <player> was muted for <time> \n⏵ Reason: <reason> \n⏵ Moderator: <moderator>\n"
```

## /mutelist
| Parameter | Description                | Type       | Default |
| --------- | -------------------------- | ---------- | ------- |
| aliases   | Aliases                    | `string[]` | `[]`    |
| per-page  | Number of players per page | `number`   | `4`     |

### Messages configuration
```yaml
commands:
  mutelist:
    empty: "#4eff52☺ No muted players found"
    page-not-exist: "#ff4e4e⁉ This page doesn't exist"

    title: "&&2════ Muted: <count> ════"
    player-mute: "<unmute> &&1<player> - <reason> - <time> left - <moderator> moderator"
    page-line: "<prev-page> &&1Page: <page>/<last-page> <next-page>"

    prev-page: "&&2←"
    next-page: "&&2→"

    unmute-button: "&c☒"
    unmute-hover: "&&1Click to unmute &&2<player>"
```

## /ping
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  ping:
    myself-message: "&&1🌍 Your ping is <ping>"
    message: "&&1🌍 &&2<player> &&1ping is <ping>"
```

## /poll
| Parameter | Description                               | Type       | Default |
| --------- | ----------------------------------------- | ---------- | ------- |
| aliases   | Aliases                                   | `string[]` | `[]`    |
| time      | voting time                               | `number`   | `600`   |
| last-id   | last voting id                            | `number`   | `0`     |
| range     | Distance at which the message can be seen | `number`   | `0`     |

### Messages configuration
```yaml
commands:
  poll:
    usage: "&&1⚑ Usage: &&2/<command> create/vote"
    message: "#fce303🗐 There's a poll #<id> going on right now \n❓ <message>"

    over-message: "#fce303🗐 Poll #<id> is over \n❓ <message> \nVotes: <agree>-<agree_count> <disagree>-<disagree_count>"

    agree-message: "#4eff52👍 You voted with agree in poll #<id>. There are <count> of you"
    disagree-message: "#ff4e4e🖓 You voted with disagree in poll #<id>. There are <count> of you"

    already-message: "#ff4e4e⁉ You've already voted in this poll"
    expired-message: "#ff4e4e⁉ This poll has already ended"
```

## /reply
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[ r ]` |

### Messages configuration
```yaml
commands:
  reply:
    no-receiver: "#ff4e4e⁉ No one to answer"
```

## /spit 
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  spit:
    message: "&&1🫐 You were spit on by &&2<player>"
```

## /spy
| Parameter | Description                       | Type       | Default                           |
| --------- | --------------------------------- | ---------- | --------------------------------- |
| aliases   | Aliases                           | `string[]` | `[]`                              |
| list      | Действия, за которыми идёт слежка | `string[]` | `[msg, local, anvil, book, sign]` |

### Messages configuration
```yaml
commands:
  spy:
    message: "#ff9729[👁] &&2<player> &&1used <action> ⏵ &&2<message>"
    true-message: "#ff9729[👁] You #4eff52turned on #ff9729spy mode"
    false-message: "#ff9729[👁] You #ff4e4eturned off #ff9729spy mode"
```

## /stream
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  stream:
    usage: "&&1⚑ Usage: &&2/<command> start/end"
    online-prefix: "#ff4e4e⏻&f "
    offline-prefix: "#666666⏻&f "

    end:
      not: "#ff4e4e⁉ You don't stream"
      message: "&&1★ Thanks for streaming on our server!"
    start:
      need-url: "#ff4e4e⁉ You must enter a url(s)"
      already: "#ff4e4e⁉ You are already streaming"
      message:
        - "#ff4e4e🔔 &&1Announcement #ff4e4e🔔"
        - "&&2• • • • • • • • •"
        - "&&2Player <player> started stream"
        - "&&2• • • • • • • • •"
        - "&&1Url(s):"
        - "<urls>"
```

## /tictactoe
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  tictactoe:
    usage: "&&1⚑ Usage: &&2/<command> (player)"
    send-message: "&&1☐ An offer to play was sent to &&2<player>"
    get-message: "&&1☐ Received an invite to play tic tac toe with &&2<player>&&1, accept? [+]"
    hover-message: "&&1Click to accept"
    game:
      ended: "#ff4e4e⁉ This game is over"
      wrong: "#ff4e4e⁉ Such a move is impossible"
      move: "&&1<player>'s move\n-----"
      win: "#4eff52🧍 <player> won this game\n-----"
      draw: "#4eff52👬 The game ended in a draw\n-----"
    format:
      win: "#4eff52"
      empty: "&&2☐"
      first: "&&1☑"
      second: "&&1☒"
```

## /try
| Parameter | Description                                     | Type       | Default                                    |
| --------- | ----------------------------------------------- | ---------- | ------------------------------------------ |
| aliases   | Aliases                                         | `string[]` | `[]`                                       |
| features  | List of features that work with the command     | `string[]` | `[swear-protection, patterns, formatting]` |
| range     | Distance at which the message can be seen       | `number`   | `0`                                        |
| min-%     | Minimum possible percentage                     | `number`   | `0`                                        |
| max-%     | Maximum possible percentage                     | `number`   | `100`                                      |
| good-%    | Percentage at which it is considered to be good | `number`   | `50`                                       |

### Messages configuration
```yaml
commands:
  try:
    usage: "&&1⚑ Usage: &&2/<command> (message)"
    true-message: "#4eff52☺ <player> <message> <percent>%"
    false-message: "#ff4e4e☹ <player> <message> <percent>%"
```

## /dice
| Parameter       | Description                                                                             | Type       | Default                                    |
| --------------- | --------------------------------------------------------------------------------------- | ---------- | ------------------------------------------ |
| aliases         | Aliases                                                                                 | `string[]` | `[]`                                       |
| features        | List of features that work with the command                                             | `string[]` | `[swear-protection, patterns, formatting]` |
| range           | Distance at which the message can be seen                                               | `number`   | `0`                                        |
| min             | minimum number of cubes                                                                 | `number`   | `1`                                        |
| max             | maximum number of cubes                                                                 | `number`   | `6`                                        |
| win-coefficient | The sum of the dice must exceed the number of dice rolled multiplied by the coefficient | `double`   | `3.0`                                      |

### Messages configuration
```yaml
commands:
  dice:
    usage: "&&1⚑ Usage: &&2/<command> (number)"
    only-number: "#ff4e4e⁉ You must enter a number"

    true-message: "#4eff52☺ <player> successfully rolled <cube>"
    false-message: "#ff4e4e☹ <player> failed to roll <cube>"
    format:
      1: "⚀"
      2: "⚁"
      3: "⚂"
      4: "⚃"
      5: "⚄"
      6: "⚅"
```

## /unban
| Parameter | Description | Type       | Default      |
| --------- | ----------- | ---------- | ------------ |
| aliases   | Aliases     | `string[]` | `[ pardon ]` |

### Messages configuration
```yaml
commands:
  unban:
    usage: "&&1⚑ Usage: &&2/<command> (player)"
    not-banned: "#ff4e4e⁉ This player is not banned"
    message: "#ff4e4e☻ Player <player> unbanned"
```

## /unmute
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  unmute:
    usage: "&&1⚑ Usage: &&2/<command> (player)"
    not-muted: "#ff4e4e⁉ This player does not muted"
    message: "#ff4e4e☻ Player <player> unmuted"
```

## /warn
| Parameter | Description                                          | Type       | Default                                          |
| --------- | ---------------------------------------------------- | ---------- | ------------------------------------------------ |
| aliases   | Aliases                                              | `string[]` | `[]`                                             |
| range     | Distance at which the message can be seen            | `number`   | `0`                                              |
| action    | Punishment when a certain number of warns is reached | `string[]` | `3: "ban <player> 7d"` <br/> `5: "ban <player>"` |

### Messages configuration
```yaml
commands:
  warn:
    usage: "&&1⚑ Usage: &&2/<command> (player) (time) (reason)"
    default-reason: "You have been warned"
    server-message: "#ff4e4e\n⏵ Player <player> received warning №<count> <time> \n⏵ Reason: <reason> \n⏵ Moderator: <moderator>\n"
```

## /unwarn
| Parameter | Description | Type       | Default |
| --------- | ----------- | ---------- | ------- |
| aliases   | Aliases     | `string[]` | `[]`    |

### Messages configuration
```yaml
commands:
  unwarn:
    usage: "&&1⚑ Usage: &&2/<command> (player) (index)"
    not-warned: "#ff4e4e⁉ The player has no warnings"
    message: "#ff4e4e☻ <player> player's warning removed"
```

## /warnlist
| Parameter | Description                          | Type       | Default |
| --------- | ------------------------------------ | ---------- | ------- |
| aliases   | Aliases                              | `string[]` | `[]`    |
| per-page  | Количество игроков на одной странице | `number`   | `4`     |

### Messages configuration
```yaml
commands:
  warnlist:
    usage: "&&1⚑ Usage: &&2/<command>"
    empty: "#4eff52☺ No players with warnings"
    page-not-exist: "#ff4e4e⁉ This page doesn't exist"
    title: "&&2════ Warns: <count> ════"
    player-warn: "<unwarn> &&1<player> - <reason> - <time> left - <moderator> moderator"
    page-line: "<prev-page> &&1Page: <page>/<last-page> <next-page>"

    prev-page: "&&2←"
    next-page: "&&2→"

    unwarn-button: "&c☒"
    unwarn-hover: "&&1Click to unwarn &&2<player>"
```
