import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getLogger } from '@lzwme/fe-utils';

const debug = process.argv.slice(2).includes('--debug');
export const isCI = +process.env.SYNC === 1;
export const logger = getLogger('SYNC', debug ? 'debug' : 'log');
export const rootDir = path.resolve(fileURLToPath(import.meta.url), '../../..');
export const CONFIG = {
  rootDir,
  debug,
  isCI,
  /** 是否忽略 manifest JSON 解析失败的应用 */
  ignoreParseFailed: true,
  tmpDir: path.resolve(rootDir, 'tmp'),
  ghproxy: 'https://ghgo.xyz',
  // ghproxy: 'https://mirror.ghproxy.com',
  // ghproxy: 'https://www.ghproxy.cc',
  // ghproxy: 'https://ghps.cc',
  // ghproxy: 'https://ghproxy.net',
  // ghproxy: 'https://gh.ddlc.top',
  // --- https://github-mirror.us.kg --- 大量个人部署的服务列表
  /** 已失效的历史地址；用于兼容其他仓库的，避免套娃问题 */
  ghproxyInvalid: ['https://gh-proxy.com', 'https://ghproxy.com', 'https://mirror.ghproxy.com'],
  /** 同步仓库列表，按仓库质量排序 */
  repo: new Set([
    // `duzyn/scoop-cn`, // 仅同步官方仓库，并修改为国内镜像地址
    `ScoopInstaller/PHP`,
    `ScoopInstaller/Main`,
    `ScoopInstaller/Extras`,
    `ScoopInstaller/Java`,
    `ScoopInstaller/Versions`,
    `ScoopInstaller/Nirsoft`,
    `ScoopInstaller/Nonportable`,
    `leic4u/Scoop-Store`,
    `wordpure/scoop-air`,
    `abgox/abgo_bucket`,
    `renxia/scoop-bucket`,
    // `xfqwdsj/BucketDev`, // Android SDK DEV...
    `scoopcn/scoopcn`, // 大多是国内应用程序
    `rasa/scoops`,
    `amorphobia/siku`,
    `ACooper81/scoop-apps`,
    `kkzzhizhou/scoop-zapps`,
    `Calinou/scoop-games`,
    `cderv/r-bucket`,
    `chawyehsu/dorado`,
    `borger/scoop-galaxy-integrations`,
    // `hoilc/scoop-lemon`,
    `ivaquero/scoopet`,
    `KNOXDEV/wsl`,
    `kodybrown/scoop-nirsoft`,
    `kidonng/sushi`,
    `littleli/scoop-clojure`,
    `niheaven/scoop-sysinternals`,
    `matthewjberger/scoop-nerd-fonts`,
    `TheCjw/scoop-retools`,
    `TheRandomLabs/Scoop-Bucket`,
    `TheRandomLabs/scoop-nonportable`,
    `TheRandomLabs/Scoop-Spotify`,
    `Paxxs/Cluttered-bucket`,
    `zhoujin7/tomato`,
    `HCLonely/my-scoop-bucket`,
    `Weidows-projects/scoop-3rd`,
    `hermanjustnu/scoop-emulators`,
    `everyx/scoop-bucket`,
    `borger/scoop-emulators`,
    `ZvonimirSun/scoop-iszy`,
    `kiennq/scoop-misc`,
    `wzv5/ScoopBucket`,
    `TheRandomLabs/Scoop-Python`,
    `naderi/scoop-bucket`,
    `ViCrack/scoop-bucket`,
    `42wim/scoop-bucket`,
    `akirco/aki-apps`,
    `batkiz/backit`,
    `iquiw/scoop-bucket`,
    `ygguorun/scoop-bucket`,
    `seumsc/scoop-seu`,
    `cc713/ownscoop`,
    `aoisummer/scoop-bucket`,
    `yuusakuri/scoop-bucket`,
    `hu3rror/scoop-muggle`,
    `starise/Scoop-Confetti`,
    `dodorz/scoop`,
    `SayCV/scoop-cvp`,
    `Qv2ray/mochi`,
    `Homeland-Community/scoop`,
    `jingyu9575/scoop-jingyu9575`,
    `couleur-tweak-tips/utils`,
    `wangzq/scoop-bucket`,
    `jonz94/scoop-sarasa-nerd-fonts`,
    `NyaMisty/scoop_bucket_misty`,
    `jfut/scoop-jfut`,
    `mogeko/scoop-sysinternals`,
    `ChungZH/peach`,
    `DoveBoy/Apps`,
    `Velgus/Scoop-Portapps`,
    `starise/Scoop-Gaming`,
    // `rivy/scoop-bucket`,
    `mo-san/scoop-bucket`,
    `brian6932/dank-scoop`,
    `AkariiinMKII/Scoop4kariiin`,
    `littleli/Scoop-littleli`,
    `ChinLong/scoop-customize`,
    `Darkatse/Scoop-KanColle`,
    `aliesbelik/poldi`,
    `MCOfficer/scoop-bucket`,
    `KnotUntied/scoop-fonts`,
    `beerpiss/scoop-bucket`,
    `HUMORCE/nuke`,
    `AkinoKaede/maple`,
    `hulucc/bucket`,
    `TheLastZombie/scoop-bucket`,
    `Deide/deide-bucket`,
    `echoiron/echo-scoop`,
    `tetradice/scoop-iyokan-jp`,

    // `kkzzhizhou/scoop-apps`, // 抓其他仓库自动同步【会将 todo、deprecated 的都抓进来】
    // `anderlli0053/DEV-tools`, // low quality
    // `okibcn/ScoopMaster`, // 抓取其他仓库(https://rasa.github.io/scoop-directory/by-apps.html)自动同步(879+)
  ]),
  filter: /audacity_installer|\.gitkeep|__/,
  sourcesStatFile: path.resolve(rootDir, `sync-sources.txt`),
  lowPriorityFile: path.resolve(rootDir, 'bucket-low-priority.txt'),
  ignoredFile: path.resolve(rootDir, 'bucket-ignored.txt'),
};
