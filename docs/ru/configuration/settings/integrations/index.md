# Интеграции

Файл `integrations.yml` отвечает за связь между другими плагинами

## PlaceholderAPI

FlectoneChat имеет свои уникальные плейсхолдеры

| Параметр                             | Описание                                                       |
|--------------------------------------|----------------------------------------------------------------|
| `%flectonechat_player_name_real%`    | Возвращает строку `player.name.real` из `config.yml`           |
| `%flectonechat_player_name_display%` | Возвращает строку `player.name.display` из `config.yml`        |
| `%flectonechat_player_name_tab%`     | Возвращает строку `player.name.tab` из `config.yml`            |
| `%flectonechat_player_suffix%`       | Возвращает строку `player.name.suffix` из `config.yml`         |
| `%flectonechat_player_prefix%`       | Возвращает строку `player.name.prefix` из `config.yml`         |
| `%flectonechat_moderation_ban%`      | Возвращает строку `0`, когда игрок не забанен, а `1` - забанен |
| `%flectonechat_moderation_mute%`     | Возвращает строку `0`, когда игрок не замучен, а `1` - замучен |
| `%flectonechat_moderation_warn%`     | Возвращает строку количества предупреждений игрока             |
| `%flectonechat_lastonline%`          | Возвращает строку с датой, когда последний раз заходил игрок   |
| `%flectonechat_firstonline%`         | Возвращает строку с датой, когда первый раз заходил игрок      |
| `%flectonechat_stream_prefix%`       | Возвращает текущий стрим префикс игрока                        |
| `%flectonechat_afk_suffix%`          | Возвращает текущий афк суффикс                                 |
| `%flectonechat_world_prefix%`        | Возвращает строку `player.world.?` из `config.yml`             |

## InteractiveChat

FlectoneChat поддерживает все форматирования из InteractiveChat'a, включая упоминания

## LuckPerms

FlectoneChat получает вес групп для сортировки с помощью LuckPerms'a, а также получает сами группы

::: info Информация
Если на сервере установлен LuckPerms, то плагин Vault не требуется
:::

## SuperVanish

FlectoneChat поддерживает ивенты скрытия и показа игрока плагином SuperVanish, а также не показывает действия игрока с ванишем

## Vault

FlectoneChat использует Vault для получения группы игрока

::: warning Предупреждение
Сортировка по весу группы не будет работать без LuckPerms
:::

## PlasmoVoice

FlectoneChat мутит игрока, если он получает мут с помощью команды `/mute`, также и в плагине PlasmoVoice

## VoiceChat

FlectoneChat мутит игрока, если он получает мут с помощью команды `/mute`, также и в плагине VoiceChat (SimpleVoiceChat)

## DiscordSRV

FlectoneChat изменяет сообщения, которые отправляются из майнкрафта в DiscordSRV с помощью `features`
```yaml
DiscordSRV:
  features: [ swear-protection, patterns, formatting ]
```

### Настройка сообщений
FlectoneChat имеет возможность отправки сообщения множества действий в DiscordSRV

| Параметр               | Описание                                                      | Тип       |
|------------------------|---------------------------------------------------------------|-----------|
| channel-id             | Айди дискорд канала, куда будет отправлено сообщение          | `string`  |
| content.text           | Обычный текст сообщения                                       | `string`  |
| embed.color            | Цвет эмбеда сообщения (HEX формат)                            | `string`  |
| embed.image.url        | Ссылка для главного изображения эмбеда                        | `string`  |
| embed.title.text       | Название эмбеда                                               | `string`  |
| embed.title.icon.url   | Ссылка для аватарки названия эмбеда                           | `string`  |
| embed.description.text | Описание эмбеда                                               | `string`  |
| embed.author.text      | Название автора эмбеда                                        | `string`  |
| embed.author.icon      | Генерирование аватарки для автора эмбеда из скина отправителя | `boolean` |
| embed.footer.text      | Текст для подписи эмбеда                                      | `string`  |
| embed.footer.icon.url  | Аватарка для подписи эмбеда                                   | `string`  |
