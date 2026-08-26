$ErrorActionPreference = 'Stop'

$assets = @(
  @{ Path = 'assets/images/home/hero.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1601505612610-2HQ6WR95A9BUEXD69B7W/LeahNicolich_2.jpg?format=1500w' }

  @{ Path = 'assets/images/paintings/painted-hand-1.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736836117-V38R4EWRMEP61MQOJJLH/LeahNicolich_1.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/painted-hand-3.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736836740-KEE06SJ8WYLEB5N94PM0/LeahNicolich_3.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/painted-hand-2.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736835937-OIZ9LOY14CKHAG660X5O/LeahNicolich_2.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/friday-250pm.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736838151-FOYNOVU7JSXJOLD4T8I3/LeahNicolich_5.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/monday-300am.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736839355-MQ4LR73H9L2WSSYWI55L/LeahNicolich_7.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/thursday-1020am.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736840207-FVUMKVOPA8SE2I1MSAA5/LeahNicolich_8.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/hand-on-glass-4a.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736841164-41FPPG9JDFRCG6N942YM/LeahNicolich_9.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/hand-on-glass-4b.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736841705-RJOXSJ7VD7FLBWZGUC8B/LeahNicolich_10.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/hand-on-glass-1.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736842943-ADTU6DQX6SSWCLQ5RBE1/LeahNicolich_12.jpg?format=1500w' }
  @{ Path = 'assets/images/paintings/contemplation.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736845027-FHB07X177VMTN6YLNZ6G/LeahNicolich_19.jpg?format=1500w' }

  @{ Path = 'assets/images/drawings/drawn-hand-1.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736524847-5A650DSDAXKC82FW77MW/LeahNicolich_1.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-2.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736525085-SAEVRO1FFREXRXG172MN/LeahNicolich_2.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-4.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736525827-JLODG55P5V24HO6LGMWN/LeahNicolich_4.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-5.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736526870-21G2KOD38KA0I5INQ5CU/LeahNicolich_5.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-6.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736527598-CG84D3O5DWDUC63400KW/LeahNicolich_6.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-8.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736528631-790V1WUQJF8Z4OIEDT6W/LeahNicolich_8.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-9.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736528776-4CQ21GMZIZCH1Y16W1JB/LeahNicolich_9.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-11.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736529941-H4T0N3JAX8QUZ63VH6LO/LeahNicolich_11.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-12.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736531164-1OYW9EOZLZCHWOHCISMF/LeahNicolich_12.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-13.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736531385-BYCRC50Z8P4GJX4YC0G8/LeahNicolich_13.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-14.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736532762-CFJ40C0E8941TS7HVZKM/LeahNicolich_14.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-17.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736534469-5B9S66R3LOQCBA6H3NHZ/LeahNicolich_17.jpg?format=1500w' }
  @{ Path = 'assets/images/drawings/drawn-hand-18.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736535614-CXTDZ8XJIJIYX1GDKKPW/LeahNicolich_18.jpg?format=1500w' }

  @{ Path = 'assets/images/sculptures/march-11-front.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736864557-EDU0I6G77MQPQFRTKT5C/LeahNicolich_1.jpg?format=1500w' }
  @{ Path = 'assets/images/sculptures/march-11-top.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736865932-H56ICTVEH5H743RXXJ18/LeahNicolich_2.jpg?format=1500w' }
  @{ Path = 'assets/images/sculptures/march-12.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736865933-TCF57DMC8EE00ZDQF84Z/LeahNicolich_3.jpg?format=1500w' }
  @{ Path = 'assets/images/sculptures/hand-series-1.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1601586604399-MIX78AQQ8GL79JX7UVLT/LeahNicolich_4.jpg?format=1500w' }
  @{ Path = 'assets/images/sculptures/hand-series-2-front.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1601586654690-20MA84TBV8KR5JQZB69G/LeahNicolich_5.jpg?format=1500w' }

  @{ Path = 'assets/images/past/neighbors-morning.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736833152-54GQ77SVKAOUMOHNV86G/LeahNicolich_25.jpg?format=1500w' }
  @{ Path = 'assets/images/past/neighbors-evening.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736833134-1CO6JL8V06ZBB2H04JPT/LeahNicolich_26.jpg?format=1500w' }
  @{ Path = 'assets/images/past/neighbors-night.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736833991-IEF4L6TCWVOAEN926X1N/LeahNicolich_27.jpg?format=1500w' }
  @{ Path = 'assets/images/past/baldwin-park.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736847054-4WEG3TRQ5A4Y0EIW1QCJ/LeahNicolich_23.jpg?format=1500w' }
  @{ Path = 'assets/images/past/sketch.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736524324-0VGV1U01156H03JU3BLH/LeahNicolich_26.jpg?format=1500w' }
  @{ Path = 'assets/images/past/stephanie-front.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736868135-OBI9RBZBX74PLO9MGO93/LeahNicolich_7.jpg?format=1500w' }
  @{ Path = 'assets/images/past/stephanie-side.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736868502-DU1RO24TICIJOT76OAKX/LeahNicolich_8.jpg?format=1500w' }
  @{ Path = 'assets/images/past/stephanie-back.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736868565-1C824BN81UA2CLIG8F3O/LeahNicolich_9.jpg?format=1500w' }
  @{ Path = 'assets/images/past/white.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600736868980-FPKATEJH7NRSRWDLK40M/LeahNicolich_10.jpg?format=1500w' }

  @{ Path = 'assets/images/statement/statement-1.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600739007686-TVQA8ZQ0Y3LD79I9LYU8/LeahNicolich_8.jpg?format=1500w' }
  @{ Path = 'assets/images/statement/statement-2.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600739025640-215ETUXXPH05GVB07PU0/LeahNicolich_5.jpg?format=1500w' }
  @{ Path = 'assets/images/statement/statement-3.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600739006806-ASNMGBDPVG5X14XDXJ9X/LeahNicolich_1.jpg?format=1500w' }
  @{ Path = 'assets/images/statement/statement-4.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600739025113-WSMX7T409A2DV5TURPVR/LeahNicolich_1.jpg?format=1500w' }
  @{ Path = 'assets/images/statement/statement-5.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600739007825-TS6MRGYTXI0AK1GZSQBT/LeahNicolich_2.jpg?format=1500w' }
  @{ Path = 'assets/images/statement/statement-6.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600739025832-MRYOOBBI32BXJFHAZF8S/LeahNicolich_2.jpg?format=1500w' }
  @{ Path = 'assets/images/statement/statement-7.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600746049976-MV0RQNU77Z4X43HV73OV/LeahNicolich_11.jpg?format=1500w' }

  @{ Path = 'assets/images/news/chalk-up.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600735197320-RI6YE64UL474VZLV8WKB/4_chalk_up.jpg?format=1500w' }
  @{ Path = 'assets/images/news/pulse.png'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600735011201-VBOGGBLVTLHKTT4L4T8G/image-asset.png?format=1500w' }
  @{ Path = 'assets/images/news/senior-show-1.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600732598523-ZBFA4OFSFLK54WEEFDRD/2.1_senior_art_exhibition_show.jpg?format=1500w' }
  @{ Path = 'assets/images/news/senior-show-2.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600732597982-LPEZ0A7KW2K4XT41CJXU/2.2_senior_art_exhibition_show.jpg?format=1500w' }
  @{ Path = 'assets/images/news/bfa-8.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600733090204-NWXCX89EA951ZHMIPUSJ/BFAFAAED8_150-XL.jpg?format=1500w' }
  @{ Path = 'assets/images/news/bfa-19.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600733090961-BJZWS1M51JZGLSGOLFUZ/BFAFAAED19_150-XL.jpg?format=1500w' }
  @{ Path = 'assets/images/news/bfa-20.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600733091139-M1TDT6NE5N6A2FB9OQ2X/BFAFAAED20_150-XL.jpg?format=1500w' }
  @{ Path = 'assets/images/news/bfa-36.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600733337812-NJE27I3K1GTQNVIAKXCU/BFAFAAED36_150-XL.jpg?format=1500w' }
  @{ Path = 'assets/images/news/bfa-32.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600733343743-SHSZTEVBR2JO1N0ZQ0C2/BFAFAAED32_150-XL.jpg?format=1500w' }
  @{ Path = 'assets/images/news/senior-show-poster.jpg'; Url = 'https://images.squarespace-cdn.com/content/v1/5f501d7530205a1609fba0ef/1600732372683-73Y3HIYX3H8A7DOM8LXS/1_senior_art_exhibition_eblast.jpg?format=1500w' }
)

foreach ($asset in $assets) {
  $destination = Join-Path $PSScriptRoot '..' $asset.Path
  $directory = Split-Path -Parent $destination
  New-Item -ItemType Directory -Path $directory -Force | Out-Null
  if (-not (Test-Path -LiteralPath $destination)) {
    Invoke-WebRequest -Uri $asset.Url -OutFile $destination -UseBasicParsing -TimeoutSec 60
  }
  Write-Output $asset.Path
}
