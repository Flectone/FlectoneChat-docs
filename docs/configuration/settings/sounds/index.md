# Sounds
`sounds.yml`

FlectoneChat has the ability to customize sounds for any action

## Sound

```yaml
# Name of the group for which the sound is applied
default: 
  # Action name, it consists of the name of the module
  action:
    anvil:
      enable: false
      # Sound type:volume:pitch
      type: "BLOCK_NOTE_BLOCK_BELL:1:1"

# Example
# admin:
#  extra:
#    spit:
#      enable: true
#      type: "ENTITY_LLAMA_SPIT:0.3:1"
```