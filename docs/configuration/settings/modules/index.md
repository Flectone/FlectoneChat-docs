# Modules
`modules.yml`

FlectoneChat uses a modular system to customize FlectoneChat, which provides convenient customization for each function of the plugin.

## Disabling modules

Enable or disable any module either in the module config (`config.yml`) or in the `modules.yml` file

```yaml{4-6}
player-message:
  enable: true

  # Module swear-protection disabled!
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

Also modules can lie inside other modules and when the parent module is disabled, all nested modules will also be disabled.
 
```yaml{1-3}
extra:
  # All extra modules are disabled
  enable: false

  item-sign:
    enable: true

    unsign: # unsign submodule also disabled
      enable: true

  mark:
    enable: true

  knocking:
    enable: true

  spit:
    enable: true
```
