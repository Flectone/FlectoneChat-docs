# Звуки
`sounds.yml`

FlectoneChat имеет возможность настройки звуки для любого действия

## Звук

```yaml
# Название группы, для которой применяется звук
default: 
  # Название действия, оно состоит из названия модуля
  action:
    anvil:
      enable: false
      # Тип звука:громкость:высота
      type: "BLOCK_NOTE_BLOCK_BELL:1:1"

# Например
# admin:
#  extra:
#    spit:
#      enable: true
#      type: "ENTITY_LLAMA_SPIT:0.3:1"
```