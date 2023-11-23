# item-sign
`extra.item-sign`

The item-sign module is responsible for signing things with dye

To sign an object you need to take any dye in your left hand and press LMB on the block, which is specified in `config.yml`

![Item sign](item-sign.png)

::: info Important
A player can only have one signature per item. If the item is re-signed, the [unsign](./unsign/) module will be used
:::

## Module customization

| Parameter | Description                 | Type     | Default            |
| --------- | --------------------------- | -------- | ------------------ |
| format    | formatting the signature    | `string` | `<dye>&o#<player>` |
| block     | block used to sign the item | `string` | `ANVIL`            |
