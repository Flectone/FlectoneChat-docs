# knocking
`extra.knocking`

The knocking module is responsible for knocking on a certain block

To knock, you need to press SHIFT + LMB on the block, which is specified in `config.yml`.

You can add/modify sounds of knocking on blocks in the sounds file `sounds.yml`.
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

You can add/modify the blocks that are knocked on in the `extra.knocking.list` config
```yaml
extra:
  knocking:
      list:
        - "glass"
        - "door"
      # - dirt
```