const VERBS = [
  {
    "infinitive": "burde",
    "present": "bør",
    "preterite": "burde",
    "perfect": "har burdet",
    "english": "ought to",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: ought to."
  },
  {
    "infinitive": "ha",
    "present": "har",
    "preterite": "hadde",
    "perfect": "har hatt",
    "english": "have",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: have. Norsk 'hadde' ligner på engelsk 'had'."
  },
  {
    "infinitive": "kunne",
    "present": "kan",
    "preterite": "kunne",
    "perfect": "har kunnet",
    "english": "can",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: can."
  },
  {
    "infinitive": "måtte",
    "present": "må",
    "preterite": "måtte",
    "perfect": "har måttet",
    "english": "must",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: must."
  },
  {
    "infinitive": "skulle",
    "present": "skal",
    "preterite": "skulle",
    "perfect": "har skullet",
    "english": "shall",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: shall."
  },
  {
    "infinitive": "ville",
    "present": "vil",
    "preterite": "ville",
    "perfect": "har villet",
    "english": "will, wish, want",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: will, wish, want."
  },
  {
    "infinitive": "være",
    "present": "er",
    "preterite": "var",
    "perfect": "har vært",
    "english": "be",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'æ' i infinitiv til 'a' i preteritum. Engelsk oversettelse: be. Norsk 'var' ligner på engelsk 'was' – begge begynner med wa/v."
  },
  {
    "infinitive": "arbeide",
    "present": "arbeider",
    "preterite": "arbeidet",
    "perfect": "har arbeidet",
    "english": "work",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: work."
  },
  {
    "infinitive": "bade",
    "present": "bader",
    "preterite": "badet",
    "perfect": "har badet",
    "english": "bathe",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: bathe."
  },
  {
    "infinitive": "be",
    "present": "ber",
    "preterite": "bad",
    "perfect": "har bedt",
    "english": "ask for, pray",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: ask for, pray."
  },
  {
    "infinitive": "bedra",
    "present": "bedrar",
    "preterite": "bedro",
    "perfect": "har bedratt",
    "english": "cheat",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: cheat."
  },
  {
    "infinitive": "begynne",
    "present": "begynner",
    "preterite": "begynte",
    "perfect": "har begynt",
    "english": "begin",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: begin."
  },
  {
    "infinitive": "beskrive",
    "present": "beskriver",
    "preterite": "beskrev",
    "perfect": "har beskrevet",
    "english": "describe",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: describe."
  },
  {
    "infinitive": "bestemme",
    "present": "bestemmer",
    "preterite": "bestemte",
    "perfect": "har bestemt",
    "english": "decide, resolve",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: decide, resolve."
  },
  {
    "infinitive": "bestille",
    "present": "bestiller",
    "preterite": "bestilte",
    "perfect": "har bestilt",
    "english": "order (food etc.)",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: order (food etc.)."
  },
  {
    "infinitive": "bety",
    "present": "betyr",
    "preterite": "betydde, betød",
    "perfect": "har betydd",
    "english": "mean (signify,",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: mean (signify,."
  },
  {
    "infinitive": "drømme",
    "present": "drømmer",
    "preterite": "drømte",
    "perfect": "har drømt",
    "english": "dream",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: dream."
  },
  {
    "infinitive": "falle",
    "present": "faller",
    "preterite": "falt",
    "perfect": "har falt",
    "english": "fall",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: fall."
  },
  {
    "infinitive": "finne",
    "present": "finner",
    "preterite": "fant",
    "perfect": "har funnet",
    "english": "find",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: find. Norsk 'fant' ligner på engelsk 'found' – begge bytter i→a/ou."
  },
  {
    "infinitive": "finnes",
    "present": "finnes",
    "preterite": "fantes",
    "perfect": "har funnes",
    "english": "exist",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: exist."
  },
  {
    "infinitive": "fly",
    "present": "flyr",
    "preterite": "fløy",
    "perfect": "har fløyet, flydd",
    "english": "fly",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'y' i infinitiv til 'ø' i preteritum. Engelsk oversettelse: fly."
  },
  {
    "infinitive": "flyte",
    "present": "flyter",
    "preterite": "fløt",
    "perfect": "har flytt",
    "english": "float",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'y' i infinitiv til 'ø' i preteritum. Engelsk oversettelse: float."
  },
  {
    "infinitive": "forby",
    "present": "forbyr",
    "preterite": "forbød",
    "perfect": "har forbudt",
    "english": "forbid",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: forbid."
  },
  {
    "infinitive": "foreslå",
    "present": "foreslår",
    "preterite": "foreslo",
    "perfect": "har foreslått",
    "english": "suggest",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: suggest."
  },
  {
    "infinitive": "foretrekke",
    "present": "foretrekker",
    "preterite": "foretrakk",
    "perfect": "har foretrukket",
    "english": "prefer",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: prefer."
  },
  {
    "infinitive": "forlate",
    "present": "forlater",
    "preterite": "forlot",
    "perfect": "har forlatt",
    "english": "leave",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: leave."
  },
  {
    "infinitive": "forstå",
    "present": "forstår",
    "preterite": "forsto(d)",
    "perfect": "har forstått",
    "english": "understand",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: understand."
  },
  {
    "infinitive": "forsvinne",
    "present": "forsvinner",
    "preterite": "forsvant",
    "perfect": "har forsvunnet",
    "english": "disappear",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: disappear."
  },
  {
    "infinitive": "fortelle",
    "present": "forteller",
    "preterite": "fortalte",
    "perfect": "har fortalt",
    "english": "tell",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: tell."
  },
  {
    "infinitive": "fryse",
    "present": "fryser",
    "preterite": "frøs",
    "perfect": "har frosset",
    "english": "freeze, be cold",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'y' i infinitiv til 'ø' i preteritum. Engelsk oversettelse: freeze, be cold. Norsk 'frøs' ligner på engelsk 'froze' – vokalen endrer til o/ø."
  },
  {
    "infinitive": "fyke",
    "present": "fyker",
    "preterite": "føk",
    "perfect": "har føket",
    "english": "drift",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'y' i infinitiv til 'ø' i preteritum. Engelsk oversettelse: drift."
  },
  {
    "infinitive": "fylle",
    "present": "fyller",
    "preterite": "fylte",
    "perfect": "har fylt",
    "english": "fill, stuff",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: fill, stuff."
  },
  {
    "infinitive": "få",
    "present": "får",
    "preterite": "fikk",
    "perfect": "har fått",
    "english": "get, receive",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'å' i infinitiv til 'i' i preteritum. Engelsk oversettelse: get, receive."
  },
  {
    "infinitive": "gi",
    "present": "gir",
    "preterite": "ga",
    "perfect": "har gitt",
    "english": "give",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: give."
  },
  {
    "infinitive": "gidde",
    "present": "gidder",
    "preterite": "gadd",
    "perfect": "har giddet",
    "english": "to bother to do",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: to bother to do."
  },
  {
    "infinitive": "gjelde",
    "present": "gjelder",
    "preterite": "gjaldt",
    "perfect": "har gjeldt",
    "english": "concern",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: concern."
  },
  {
    "infinitive": "gjemme",
    "present": "gjemmer",
    "preterite": "gjemte",
    "perfect": "har gjemt",
    "english": "hide",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: hide."
  },
  {
    "infinitive": "gjøre",
    "present": "gjør",
    "preterite": "gjorde",
    "perfect": "har gjort",
    "english": "do",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: do."
  },
  {
    "infinitive": "glede seg",
    "present": "gleder seg",
    "preterite": "gledet seg",
    "perfect": "har gledet seg",
    "english": "look forward to",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: look forward to."
  },
  {
    "infinitive": "glemme",
    "present": "glemmer",
    "preterite": "glemte",
    "perfect": "har glemt",
    "english": "forget",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: forget."
  },
  {
    "infinitive": "gli",
    "present": "glir",
    "preterite": "gled",
    "perfect": "har glidd",
    "english": "glide, slip, slide",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'e' i preteritum. Engelsk oversettelse: glide, slip, slide."
  },
  {
    "infinitive": "glippe",
    "present": "glipper",
    "preterite": "glapp",
    "perfect": "har glippet",
    "english": "slip away",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: slip away."
  },
  {
    "infinitive": "gni",
    "present": "gnir",
    "preterite": "gned",
    "perfect": "har gnidd",
    "english": "rub",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'e' i preteritum. Engelsk oversettelse: rub."
  },
  {
    "infinitive": "grine",
    "present": "griner",
    "preterite": "grein",
    "perfect": "har grint",
    "english": "cry (weep)",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'e' i preteritum. Engelsk oversettelse: cry (weep)."
  },
  {
    "infinitive": "gripe",
    "present": "griper",
    "preterite": "greip",
    "perfect": "har grepet",
    "english": "catch, seize, grab",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'e' i preteritum. Engelsk oversettelse: catch, seize, grab."
  },
  {
    "infinitive": "gråte",
    "present": "gråter",
    "preterite": "gråt",
    "perfect": "har grått",
    "english": "cry (weep)",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: cry (weep)."
  },
  {
    "infinitive": "gå",
    "present": "går",
    "preterite": "gikk",
    "perfect": "har gått",
    "english": "go, walk, leave",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'å' i infinitiv til 'i' i preteritum. Engelsk oversettelse: go, walk, leave. Norsk 'gikk' og engelsk 'went' er begge uregelmessige og må huskes hver for seg."
  },
  {
    "infinitive": "hende",
    "present": "hender",
    "preterite": "hendte",
    "perfect": "har hendt",
    "english": "happen, occur",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: happen, occur."
  },
  {
    "infinitive": "henge",
    "present": "henger",
    "preterite": "hang",
    "perfect": "har hengt",
    "english": "hang (be suspended)",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: hang (be suspended)."
  },
  {
    "infinitive": "henge",
    "present": "henger",
    "preterite": "hengte",
    "perfect": "har hengt",
    "english": "hang (suspend)",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: hang (suspend)."
  },
  {
    "infinitive": "hete",
    "present": "heter",
    "preterite": "het",
    "perfect": "har hett",
    "english": "be called",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: be called."
  },
  {
    "infinitive": "hilse",
    "present": "hilser",
    "preterite": "hilste",
    "perfect": "har hilst",
    "english": "greet",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: greet."
  },
  {
    "infinitive": "hjelpe",
    "present": "hjelper",
    "preterite": "hjalp",
    "perfect": "har hjulpet",
    "english": "help",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: help."
  },
  {
    "infinitive": "holde",
    "present": "holder",
    "preterite": "holdt",
    "perfect": "har holdt",
    "english": "hold",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: hold."
  },
  {
    "infinitive": "håpe",
    "present": "håper",
    "preterite": "håpet, håpte",
    "perfect": "har håpet, håpt",
    "english": "hope",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: hope."
  },
  {
    "infinitive": "kjenne",
    "present": "kjenner",
    "preterite": "kjente",
    "perfect": "har kjent",
    "english": "know (person,",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: know (person,."
  },
  {
    "infinitive": "krype",
    "present": "kryper",
    "preterite": "krøp",
    "perfect": "har krøpet",
    "english": "crawl",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'y' i infinitiv til 'ø' i preteritum. Engelsk oversettelse: crawl."
  },
  {
    "infinitive": "la",
    "present": "lar",
    "preterite": "lot",
    "perfect": "har latt",
    "english": "allow, permit",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'a' i infinitiv til 'o' i preteritum. Engelsk oversettelse: allow, permit."
  },
  {
    "infinitive": "lage",
    "present": "lager",
    "preterite": "laget",
    "perfect": "har laget",
    "english": "make",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: make."
  },
  {
    "infinitive": "late som",
    "present": "later som",
    "preterite": "lot som",
    "perfect": "har latt som",
    "english": "pretend",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'a' i infinitiv til 'o' i preteritum. Engelsk oversettelse: pretend."
  },
  {
    "infinitive": "le",
    "present": "ler",
    "preterite": "lo",
    "perfect": "har ledd",
    "english": "laugh",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'o' i preteritum. Engelsk oversettelse: laugh."
  },
  {
    "infinitive": "legge",
    "present": "legger",
    "preterite": "la",
    "perfect": "har lagt",
    "english": "lay, place down, put",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: lay, place down, put."
  },
  {
    "infinitive": "lete",
    "present": "leter",
    "preterite": "lette",
    "perfect": "har lett",
    "english": "look for, search",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: look for, search."
  },
  {
    "infinitive": "lide",
    "present": "lider",
    "preterite": "led",
    "perfect": "har lidd",
    "english": "suffer",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'e' i preteritum. Engelsk oversettelse: suffer."
  },
  {
    "infinitive": "ligge",
    "present": "ligger",
    "preterite": "lå",
    "perfect": "har ligget",
    "english": "lie down",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'å' i preteritum. Engelsk oversettelse: lie down."
  },
  {
    "infinitive": "lyve",
    "present": "lyver",
    "preterite": "løy",
    "perfect": "har løyet",
    "english": "lie (not telling the",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'y' i infinitiv til 'ø' i preteritum. Engelsk oversettelse: lie (not telling the."
  },
  {
    "infinitive": "snike",
    "present": "sniker",
    "preterite": "snek",
    "perfect": "har sneket",
    "english": "sneak",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'e' i preteritum. Engelsk oversettelse: sneak."
  },
  {
    "infinitive": "sove",
    "present": "sover",
    "preterite": "sov",
    "perfect": "har sovet",
    "english": "sleep",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Engelsk oversettelse: sleep."
  },
  {
    "infinitive": "spille",
    "present": "spiller",
    "preterite": "spilte",
    "perfect": "har spilt",
    "english": "play (game)",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: play (game)."
  },
  {
    "infinitive": "spinne",
    "present": "spinner",
    "preterite": "spant",
    "perfect": "har spunnet",
    "english": "spin, purr",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: spin, purr."
  },
  {
    "infinitive": "sprekke",
    "present": "sprekker",
    "preterite": "sprakk",
    "perfect": "har sprukket",
    "english": "burst",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: burst."
  },
  {
    "infinitive": "sprette",
    "present": "spretter",
    "preterite": "spratt",
    "perfect": "har sprettet",
    "english": "bounce, leap, jump",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: bounce, leap, jump."
  },
  {
    "infinitive": "springe",
    "present": "springer",
    "preterite": "sprang",
    "perfect": "har sprunget",
    "english": "run",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: run."
  },
  {
    "infinitive": "spørre",
    "present": "spør",
    "preterite": "spurte",
    "perfect": "har spurt",
    "english": "ask, inquire",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: ask, inquire."
  },
  {
    "infinitive": "stave",
    "present": "staver",
    "preterite": "stavet",
    "perfect": "har stavet",
    "english": "spell",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: spell."
  },
  {
    "infinitive": "stelle",
    "present": "steller",
    "preterite": "stelte",
    "perfect": "har stelt",
    "english": "care for, nurse",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: care for, nurse."
  },
  {
    "infinitive": "stemme",
    "present": "stemmer",
    "preterite": "stemte",
    "perfect": "har stemt",
    "english": "tune, vote, be correct",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: tune, vote, be correct."
  },
  {
    "infinitive": "stenge",
    "present": "stenger",
    "preterite": "stengte",
    "perfect": "har stengt",
    "english": "close, block",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: close, block."
  },
  {
    "infinitive": "stige",
    "present": "stiger",
    "preterite": "steig",
    "perfect": "har steget",
    "english": "rise, increase, mount",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'e' i preteritum. Engelsk oversettelse: rise, increase, mount."
  },
  {
    "infinitive": "stikke",
    "present": "stikker",
    "preterite": "stakk",
    "perfect": "har stukket",
    "english": "sting, run away",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'i' i infinitiv til 'a' i preteritum. Engelsk oversettelse: sting, run away."
  },
  {
    "infinitive": "stille",
    "present": "stiller",
    "preterite": "stilte",
    "perfect": "har stilt",
    "english": "put, place, set",
    "hint": "Dette er et svakt verb – preteritum dannes ved å legge til endelse (-et/-te/-de). Engelsk oversettelse: put, place, set."
  },
  {
    "infinitive": "stjele",
    "present": "stjeler",
    "preterite": "stjal",
    "perfect": "har stjålet",
    "english": "steal",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: steal."
  },
  {
    "infinitive": "strekke",
    "present": "strekker",
    "preterite": "strakk",
    "perfect": "har strukket",
    "english": "strech, draw out",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'e' i infinitiv til 'a' i preteritum. Engelsk oversettelse: strech, draw out."
  },
  {
    "infinitive": "stryke",
    "present": "stryker",
    "preterite": "strøk",
    "perfect": "har strøket",
    "english": "iron (clothes), fail",
    "hint": "Dette er et sterkt verb – preteritum dannes med vokalskifte. Første vokal skifter fra 'y' i infinitiv til 'ø' i preteritum. Engelsk oversettelse: iron (clothes), fail."
  }
];


// Irregular verb learning app
// Data is embedded in VERBS constant.

let verbs = VERBS;
let order = [];
let learned = [];
let currentIndex = null;

// DOM elements
const infinitiveEl = document.getElementById('infinitive');
const presentEl   = document.getElementById('present');
const preteriteEl = document.getElementById('preterite');
const perfectEl   = document.getElementById('perfect');
const englishEl   = document.getElementById('english');
const hintEl      = document.getElementById('hint');
const formsContainer = document.getElementById('forms');
const hintSection    = document.getElementById('hintSection');
const progressEl     = document.getElementById('progress');
const summaryEl      = document.getElementById('summary');
const learnedCountEl = document.getElementById('learnedCount');
const totalCountEl   = document.getElementById('totalCount');

// Buttons
const showButton  = document.getElementById('showButton');
const knowButton  = document.getElementById('knowButton');
const skipButton  = document.getElementById('skipButton');
const restartButton = document.getElementById('restartButton');

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadProgress() {
  try {
    const savedOrder = JSON.parse(localStorage.getItem('verbOrder'));
    const savedLearned = JSON.parse(localStorage.getItem('verbLearned'));
    if (Array.isArray(savedOrder) && savedOrder.every(n => typeof n === 'number')) {
      order = savedOrder;
    } else {
      order = shuffle([...Array(verbs.length).keys()]);
    }
    if (Array.isArray(savedLearned) && savedLearned.every(n => typeof n === 'number')) {
      learned = savedLearned;
    } else {
      learned = [];
    }
  } catch (e) {
    order = shuffle([...Array(verbs.length).keys()]);
    learned = [];
  }
}

function saveProgress() {
  localStorage.setItem('verbOrder', JSON.stringify(order));
  localStorage.setItem('verbLearned', JSON.stringify(learned));
}

function updateProgress() {
  progressEl.textContent = `${learned.length}/${verbs.length}`;
}

function showNext() {
  // hide summary if visible
  summaryEl.classList.add('hidden');
  if (order.length === 0) {
    // Completed
    learnedCountEl.textContent = learned.length;
    totalCountEl.textContent   = verbs.length;
    summaryEl.classList.remove('hidden');
    return;
  }
  currentIndex = order.pop();
  saveProgress();
  const v = verbs[currentIndex];
  infinitiveEl.textContent = v.infinitive;
  presentEl.textContent    = v.present;
  preteriteEl.textContent  = v.preterite;
  perfectEl.textContent    = v.perfect;
  englishEl.textContent    = v.english;
  hintEl.textContent       = v.hint;
  // hide answer and hint initially
  formsContainer.classList.add('hidden');
  hintSection.classList.add('hidden');
  updateProgress();
}

function showAnswer() {
  formsContainer.classList.remove('hidden');
  hintSection.classList.remove('hidden');
}

function markLearned() {
  if (currentIndex !== null && !learned.includes(currentIndex)) {
    learned.push(currentIndex);
    saveProgress();
  }
  showNext();
}

function skipVerb() {
  showNext();
}

function restart() {
  localStorage.removeItem('verbOrder');
  localStorage.removeItem('verbLearned');
  order = shuffle([...Array(verbs.length).keys()]);
  learned = [];
  saveProgress();
  showNext();
}

// Event listeners
showButton.addEventListener('click', showAnswer);
knowButton.addEventListener('click', markLearned);
skipButton.addEventListener('click', skipVerb);
restartButton.addEventListener('click', restart);

// Initialize on page load
loadProgress();
showNext();

