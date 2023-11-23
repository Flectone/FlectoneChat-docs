# unsign
`extra.item-sign.unsign`

The unsign module is responsible for removing the sign on an item

To remove the sign, you need to click on the block that is specified in `config.yml`.

::: info Important
A player can only delete his own sign
:::

## Module customization

| Parameter | Description                                                 | Type     | Default      |
| --------- | ----------------------------------------------------------- | -------- | ------------ |
| drop-dye  | Whether the dye will drop out when the signature is removed | `bool`   | `true`       |
| block     | block to remove the signature                               | `string` | `GRINDSTONE` |

