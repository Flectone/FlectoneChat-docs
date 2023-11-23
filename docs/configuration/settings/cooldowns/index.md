# Cooldowns
`cooldowns.yml`

FlectoneChat has the ability to customize the delay for any action

## Cooldowns

```yaml
# Name of the group for which the delay is applied
default: 
  # Action name, it consists of the name of the module
  action:
    anvil:
      enable: false
      # Time after which this action can be used
      time: 5

# Example
# admin:
#  extra:
#    spit:
#      enable: true
#      time: 20
```