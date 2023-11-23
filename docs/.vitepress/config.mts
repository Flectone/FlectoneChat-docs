import { defineConfig } from 'vitepress'

const modrithLogo = '<svg width="512" height="514" viewBox="0 0 512 514" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M503.16 323.56C514.55 281.47 515.32 235.91 503.2 190.76C466.57 54.2299 326.04 -26.8001 189.33 9.77991C83.8101 38.0199 11.3899 128.07 0.689941 230.47H43.99C54.29 147.33 113.74 74.7298 199.75 51.7098C306.05 23.2598 415.13 80.6699 453.17 181.38L411.03 192.65C391.64 145.8 352.57 111.45 306.3 96.8198L298.56 140.66C335.09 154.13 364.72 184.5 375.56 224.91C391.36 283.8 361.94 344.14 308.56 369.17L320.09 412.16C390.25 383.21 432.4 310.3 422.43 235.14L464.41 223.91C468.91 252.62 467.35 281.16 460.55 308.07L503.16 323.56Z" fill="var(--color-brand)"/><path d="M321.99 504.22C185.27 540.8 44.7501 459.77 8.11011 323.24C3.84011 307.31 1.17 291.33 0 275.46H43.27C44.36 287.37 46.4699 299.35 49.6799 311.29C53.0399 323.8 57.45 335.75 62.79 347.07L101.38 323.92C98.1299 316.42 95.39 308.6 93.21 300.47C69.17 210.87 122.41 118.77 212.13 94.7601C229.13 90.2101 246.23 88.4401 262.93 89.1501L255.19 133C244.73 133.05 234.11 134.42 223.53 137.25C157.31 154.98 118.01 222.95 135.75 289.09C136.85 293.16 138.13 297.13 139.59 300.99L188.94 271.38L174.07 231.95L220.67 184.08L279.57 171.39L296.62 192.38L269.47 219.88L245.79 227.33L228.87 244.72L237.16 267.79C237.16 267.79 253.95 285.63 253.98 285.64L277.7 279.33L294.58 260.79L331.44 249.12L342.42 273.82L304.39 320.45L240.66 340.63L212.08 308.81L162.26 338.7C187.8 367.78 226.2 383.93 266.01 380.56L277.54 423.55C218.13 431.41 160.1 406.82 124.05 361.64L85.6399 384.68C136.25 451.17 223.84 484.11 309.61 461.16C371.35 444.64 419.4 402.56 445.42 349.38L488.06 364.88C457.17 431.16 398.22 483.82 321.99 504.22Z" fill="var(--color-brand)"/></svg>'

export default defineConfig({
  base: process.env.VITEPRESS_BASE || '/docs',
  title: "FlectoneChat docs",
  description: "FlectoneChat - spigot plugin for minecraft server personalization!",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Configuration', link: '/configuration/' }
        ],
        sidebar: [
          {
            text: 'Configuration',
            items: [
              { text: `config.yml`, link: `/configuration/`},
              {
                text: 'settings',
                collapsed: true,
                items: [
                  { text: `commands.yml`, link: `/configuration/settings/commands/`},
                  { text: `cooldowns.yml`, link: `/configuration/settings/cooldowns/`},
                  { text: `integrations.yml`, link: `/configuration/settings/integrations/`},
                  { text: 'modules.yml', link: '/configuration/settings/modules/' },
                  { text: `sounds.yml`, link: `/configuration/settings/sounds/`},
                  { text: `swears.yml`, link: `/configuration/settings/swears/`},
                ]
              },
              { text: `permissions`, link: `/configuration/permissions/`}
            ]
          },
          {
            text: 'Group Modules',
            items: [
              {
                text: 'extra',
                collapsed: true,
                link: '/groupModules/extra/',
                items: [
                    {
                      text: 'item-sign',
                      link: '/groupModules/extra/item-sign/',
                      items: [
                          { text: 'unsign', link: '/groupModules/extra/item-sign/unsign/' }
                      ]
                    },
                  { text: 'knocking', link: '/groupModules/extra/knocking/' },
                  { text: 'mark', link: '/groupModules/extra/mark/' },
                  { text: 'spit', link: '/groupModules/extra/spit/' },
                ]
              },
              {
                text: 'server',
                collapsed: true,
                link: '/groupModules/server/',
                items: [
                  { text: 'brand', link: '/groupModules/server/brand/' },
                  { text: 'tab', link: '/groupModules/server/tab/' },
                  { text: 'status', link: '/groupModules/server/status/' },
                ]
              },
              {
                text: 'server-message',
                collapsed: true,
                link: '/groupModules/server-message/',
                items: [
                  { text: 'death', link: '/groupModules/server-message/death/' },
                  { text: 'advancement', link: '/groupModules/server-message/advancement/' },
                  { text: 'join', link: '/groupModules/server-message/join/' },
                  { text: 'quit', link: '/groupModules/server-message/quit/' },
                ]
              },
              {
                text: 'player',
                collapsed: true,
                link: '/groupModules/player/',
                items: [
                  { text: 'name', link: '/groupModules/player/name/' },
                  { text: 'name-tag', link: '/groupModules/player/name-tag/' },
                  { text: 'world', link: '/groupModules/player/world/' },
                  { text: 'afk-timeout', link: '/groupModules/player/afk-timeout/' },
                  { text: 'right-click', link: '/groupModules/player/right-click/' },
                  { text: 'hover', link: '/groupModules/player/hover/' },
                ]
              },
              {
                text: 'player-message',
                collapsed: true,
                link: '/groupModules/player-message/',
                items: [
                  { text: 'swear-protection', link: '/groupModules/player-message/swear-protection/' },
                  { text: 'patterns', link: '/groupModules/player-message/patterns/' },
                  { text: 'formatting', link: '/groupModules/player-message/formatting/' },
                  { text: 'anvil', link: '/groupModules/player-message/anvil/' },
                  { text: 'sign', link: '/groupModules/player-message/sign/' },
                  { text: 'book', link: '/groupModules/player-message/book/' },
                  { text: 'chat', link: '/groupModules/player-message/chat/' },
                ]
              },
              {
                text: 'chat-bubble',
                link: '/groupModules/chat-bubble/'
              },
              {
                text: 'auto-message',
                link: '/groupModules/auto-message/'
              },
              {
                text: `color`,
                link: `/groupModules/color/`
              }
            ]
          }
        ]
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        nav: [
          { text: 'Начальная Страница', link: '/ru/' },
          { text: 'Конфигурация', link: '/ru/configuration/' }
        ],
        sidebar: [
          {
            text: 'Конфигурация',
            items: [
              { text: `config.yml`, link: `/ru/configuration/`},
              {
                text: 'settings',
                collapsed: true,
                items: [
                  { text: `commands.yml`, link: `/ru/configuration/settings/commands/`},
                  { text: `cooldowns.yml`, link: `/ru/configuration/settings/cooldowns/`},
                  { text: `integrations.yml`, link: `/ru/configuration/settings/integrations/`},
                  { text: 'modules.yml', link: '/ru/configuration/settings/modules/' },
                  { text: `sounds.yml`, link: `/ru/configuration/settings/sounds/`},
                  { text: `swears.yml`, link: `/ru/configuration/settings/swears/`},
                ]
              },
              { text: `права`, link: `/ru/configuration/permissions/`}
            ]
          },
          {
            text: 'Групповые Модули',
            items: [
              {
                text: 'extra',
                collapsed: true,
                link: '/ru/groupModules/extra/',
                items: [
                    {
                      text: 'item-sign',
                      link: '/ru/groupModules/extra/item-sign/',
                      items: [
                          { text: 'unsign', link: '/ru/groupModules/extra/item-sign/unsign/' }
                      ]
                    },
                  { text: 'knocking', link: '/ru/groupModules/extra/knocking/' },
                  { text: 'mark', link: '/ru/groupModules/extra/mark/' },
                  { text: 'spit', link: '/ru/groupModules/extra/spit/' },
                ]
              },
              {
                text: 'server',
                collapsed: true,
                link: '/ru/groupModules/server/',
                items: [
                  { text: 'brand', link: '/ru/groupModules/server/brand/' },
                  { text: 'tab', link: '/ru/groupModules/server/tab/' },
                  { text: 'status', link: '/ru/groupModules/server/status/' },
                ]
              },
              {
                text: 'server-message',
                collapsed: true,
                link: '/ru/groupModules/server-message/',
                items: [
                  { text: 'death', link: '/ru/groupModules/server-message/death/' },
                  { text: 'advancement', link: '/ru/groupModules/server-message/advancement/' },
                  { text: 'join', link: '/ru/groupModules/server-message/join/' },
                  { text: 'quit', link: '/ru/groupModules/server-message/quit/' },
                ]
              },
              {
                text: 'player',
                collapsed: true,
                link: '/ru/groupModules/player/',
                items: [
                  { text: 'name', link: '/ru/groupModules/player/name/' },
                  { text: 'name-tag', link: '/ru/groupModules/player/name-tag/' },
                  { text: 'world', link: '/ru/groupModules/player/world/' },
                  { text: 'afk-timeout', link: '/ru/groupModules/player/afk-timeout/' },
                  { text: 'right-click', link: '/ru/groupModules/player/right-click/' },
                  { text: 'hover', link: '/ru/groupModules/player/hover/' },
                ]
              },
              {
                text: 'player-message',
                collapsed: true,
                link: '/ru/groupModules/player-message/',
                items: [
                  { text: 'swear-protection', link: '/ru/groupModules/player-message/swear-protection/' },
                  { text: 'patterns', link: '/ru/groupModules/player-message/patterns/' },
                  { text: 'formatting', link: '/ru/groupModules/player-message/formatting/' },
                  { text: 'anvil', link: '/ru/groupModules/player-message/anvil/' },
                  { text: 'sign', link: '/ru/groupModules/player-message/sign/' },
                  { text: 'book', link: '/ru/groupModules/player-message/book/' },
                  { text: 'chat', link: '/ru/groupModules/player-message/chat/' },
                ]
              },
              {
                text: 'chat-bubble',
                link: '/ru/groupModules/chat-bubble/'
              },
              {
                text: 'auto-message',
                link: '/ru/groupModules/auto-message/'
              },
              {
                text: `color`,
                link: `/ru/groupModules/color/`
              }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/flectone/FlectoneChat' },
      { 
        icon: { svg: modrithLogo },  
        link: 'https://modrinth.com/plugin/flectonechat',
        ariaLabel: 'Modrinth',
      },
      { icon: 'discord', link: 'https://discord.flectone.net' }
    ]
  }
})
