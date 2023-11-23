# Config
`config.yml`

## Plugin

```yaml
plugin:
  # Current config version, DO NOT TOUCH!

  version: 4.0.0

  # Language used for messages, available `en` and `ru`
  language: en

  # Database file name
  database:
    name: "database"

  # Whether to use a custom Scoreboard for the FlectoneChat plugin
  # Should only be enabled if it doesn't work by default
  # (this usually helps when other plugins work with Scoreboard)
  scoreboard:
    custom: false

  # Allow metrics
  bStats:
    enable: true
```

## Groups
FlectoneChat allows you to customize [any action](../groupModules/extra/) for any group

::: tip Important
1. New groups may not have the parameter and it will be taken from default
2. To change a parameter, it must be changed in that group
3. Parameters are inherited by group weight
4. All parameters of type `string[]` are always inherited, even if another parameter is created for the group. BUT identical ones replace each other, so there should be no problems
:::

```yaml
# Group name
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

# Group name
example:
  extra:
    enable: true

    item-sign:
      enable: true

      format: "<dye>&b#<player>"
      block: "STONE"
```
