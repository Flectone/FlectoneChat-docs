# knocking
`extra.knocking`

Модуль knocking отвечает за стук по определённому блоку

Чтобы постучать, нужно нажать ШИФТ + ЛКМ по блоку, который указан в `config.yml`

Добавить/Изменить звуки стуков по блокам можно в файле звуков `sounds.yml`
```yaml
extra:
    knocking:
      door:
        enable: true
        type: "BLOCK_WOOD_PLACE:1:1"
      glass:
        enable: true
        type: "BLOCK_GLASS_PLACE:1:1"
    # dirt:
    #   enable:
    #   type: "BLOCK_DIRT_PLACE:1:1"
    
```

Добавить/Изменить блоки, по которым происходит стук, можно в конфиге `extra.knocking.list`
```yaml
extra:
  knocking:
      list:
        - "glass"
        - "door"
      # - dirt
```