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

// Keep the complete list separately
const allVerbs = VERBS;

// The active list of verbs, filtered by difficulty
let verbs = allVerbs;
let order = [];
let learned = [];
let currentIndex = null;

// Track current difficulty level ('all', 'easy', 'medium', 'hard')
let currentDifficulty = 'all';

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
const scoreEl        = document.getElementById('score');

// Buttons
const flipButton  = document.getElementById('flipButton');
const knowButton  = document.getElementById('knowButton');
const skipButton  = document.getElementById('skipButton');
const restartButton = document.getElementById('restartButton');

// Elements for flipping and progress bar
const cardInner   = document.getElementById('cardInner');
const progressBarEl = document.getElementById('progress-bar');
const toastEl        = document.getElementById('toast');

// Difficulty select element
const difficultySelect = document.getElementById('difficultySelect');

// Write mode elements
const writeButton       = document.getElementById('writeButton');
const writeContainer    = document.getElementById('writeContainer');
const writeScoreboard   = document.getElementById('writeScoreboard');
const writeQuestionEl   = document.getElementById('writeQuestion');
const inputPreteriteEl  = document.getElementById('inputPreterite');
const writeFeedbackEl   = document.getElementById('writeFeedback');
const writeCheckButton  = document.getElementById('writeCheckButton');
const writeSkipButton   = document.getElementById('writeSkipButton');
const writeExitButton   = document.getElementById('writeExitButton');

// Memory game elements
const memoryButton        = document.getElementById('memoryButton');
const memoryContainer     = document.getElementById('memoryContainer');
const memoryScoreboard    = document.getElementById('memoryScoreboard');
const memoryBoardEl       = document.getElementById('memoryBoard');
const memoryFeedbackEl    = document.getElementById('memoryFeedback');
const memoryRestartButton = document.getElementById('memoryRestartButton');
const memoryExitButton    = document.getElementById('memoryExitButton');

/**
 * Determine a difficulty level for a given verb object based on its hint and forms.
 * - Weak verbs (svakt) are classified as easy.
 * - Verbs with multiple alternative forms in preterite or perfect (comma or parentheses) are hard.
 * - Other strong verbs are medium.
 * @param {Object} v Verb object
 * @returns {string} 'easy' | 'medium' | 'hard'
 */
function assignDifficulty(v) {
  try {
    const hint = v.hint || '';
    const pret = v.preterite || '';
    const perf = v.perfect || '';
    if (/svakt/i.test(hint)) return 'easy';
    if (pret.includes(',') || perf.includes(',') || /\(/.test(pret) || /\(/.test(perf)) return 'hard';
    // default: strong verbs are medium
    return 'medium';
  } catch (e) {
    return 'medium';
  }
}

/**
 * Translate a Norwegian hint into English using simple replacements.
 * This is not a perfect translation, but conveys the core message.
 * @param {string} noHint Norwegian hint
 * @returns {string} English version of the hint
 */
function translateHint(noHint) {
  if (!noHint) return '';
  let en = noHint;
  // Replace phrases
  en = en.replace(/Dette er et svakt verb\s*–/i, 'This is a weak verb –');
  en = en.replace(/Dette er et sterkt verb\s*–/i, 'This is a strong verb –');
  en = en.replace(/preteritum dannes ved å legge til endelse/i, 'the preterite is formed by adding an ending');
  en = en.replace(/preteritum dannes med vokalskifte/i, 'the preterite is formed with a vowel change');
  en = en.replace(/Første vokal skifter fra/i, 'The first vowel changes from');
  en = en.replace(/i infinitiv til/i, 'in the infinitive to');
  en = en.replace(/i preteritum/i, 'in the preterite');
  en = en.replace(/Engelsk oversettelse:/i, 'English translation:');
  en = en.replace(/Norsk\s*'/i, 'The Norwegian ');
  en = en.replace(/ligner på engelsk/i, 'resembles the English');
  // Replace Norwegian letters with same letters (no translation needed)
  return en;
}

// Encouraging messages shown when a verb is remembered
const positiveMessages = [
  'Great job! (Bra jobbet!)',
  'Well done! (Godt jobba!)',
  'Keep it up! (Fortsett sånn!)',
  'Awesome! (Fantastisk!)',
  'You got it! (Du klarte det!)'
];

// Elements for info modal
const infoButton   = document.getElementById('infoButton');
const infoModal    = document.getElementById('infoModal');
const closeModalEl = document.getElementById('closeModal');
const modalCloseButton = document.getElementById('modalCloseButton');

// Elements for quiz mode
const quizButton      = document.getElementById('quizButton');
const quizContainer   = document.getElementById('quizContainer');
const quizScoreboard  = document.getElementById('quizScoreboard');
const quizQuestionEl  = document.getElementById('quizQuestion');
const quizOptionsEl   = document.getElementById('quizOptions');
const quizFeedbackEl  = document.getElementById('quizFeedback');
const quizExitButton  = document.getElementById('quizExitButton');

// Main card and buttons container for study mode
const cardEl           = document.getElementById('card');
const buttonsContainer = document.querySelector('.buttons');

// Quiz state variables
let isQuizMode  = false;
let quizOrder   = [];
let quizIndex   = 0;
let quizCorrect = 0;
let quizTotal   = 0;

// Delay in milliseconds before automatically advancing to the next quiz question.
// Increased to give users more time to read the explanation on mobile.
const QUIZ_FEEDBACK_DELAY = 3500;

// Write mode state variables
let isWriteMode   = false;
let writeOrder    = [];
let writeIndex    = 0;
let writeCorrect  = 0;
let writeTotal    = 0;

// Memory game state variables
let isMemoryMode     = false;
let memoryCards      = [];
let memoryFlipped    = [];
let memoryMatched    = 0;
let memoryMoves      = 0;
let memoryPairsTotal = 0;
let memoryLock       = false;
let memoryCardsRaw   = [];

/**
 * Open the information modal.
 */
function openModal() {
  if (infoModal) {
    infoModal.classList.remove('hidden');
  }
}

/**
 * Close the information modal.
 */
function closeModal() {
  if (infoModal) {
    infoModal.classList.add('hidden');
  }
}

function showToast() {
  if (!toastEl) return;
  const msg = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
  toastEl.textContent = msg;
  // Ensure element is visible
  toastEl.classList.remove('hidden');
  // Trigger show class for animation
  toastEl.classList.add('show');
  // Hide after delay
  setTimeout(() => {
    toastEl.classList.remove('show');
    // Hide again after animation completes
    setTimeout(() => {
      toastEl.classList.add('hidden');
    }, 300);
  }, 1800);
}

/**
 * Temporarily disable action buttons to prevent accidental double clicks or zoom events.
 */
function disableButtons() {
  const buttons = [flipButton, knowButton, skipButton];
  buttons.forEach(btn => {
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.6';
    }
  });
  setTimeout(() => {
    buttons.forEach(btn => {
      if (btn) {
        btn.disabled = false;
        btn.style.opacity = '';
      }
    });
  }, 400);
}

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
    const orderKey = `verbOrder_${currentDifficulty}`;
    const learnedKey = `verbLearned_${currentDifficulty}`;
    const savedOrder = JSON.parse(localStorage.getItem(orderKey));
    const savedLearned = JSON.parse(localStorage.getItem(learnedKey));
    // Validate order array
    if (Array.isArray(savedOrder) && savedOrder.every(n => typeof n === 'number')) {
      order = savedOrder.filter(idx => idx < verbs.length);
    } else {
      order = shuffle([...Array(verbs.length).keys()]);
    }
    // Validate learned array
    if (Array.isArray(savedLearned) && savedLearned.every(n => typeof n === 'number')) {
      learned = savedLearned.filter(idx => idx < verbs.length);
    } else {
      learned = [];
    }
  } catch (e) {
    order = shuffle([...Array(verbs.length).keys()]);
    learned = [];
  }
}

function saveProgress() {
  const orderKey = `verbOrder_${currentDifficulty}`;
  const learnedKey = `verbLearned_${currentDifficulty}`;
  localStorage.setItem(orderKey, JSON.stringify(order));
  localStorage.setItem(learnedKey, JSON.stringify(learned));
}

function updateProgress() {
  // Update textual progress and progress bar width
  progressEl.textContent = `${learned.length}/${verbs.length}`;
  const percent = verbs.length > 0 ? (learned.length / verbs.length) * 100 : 0;
  if (progressBarEl) {
    progressBarEl.style.width = `${percent}%`;
  }
  if (scoreEl) {
    // Update score display (remembered count)
    scoreEl.textContent = `Remembered: ${learned.length} (Husket: ${learned.length})`;
  }
}

function showNext() {
  // hide summary if visible
  summaryEl.classList.add('hidden');
  // Reset card orientation to front
  cardInner.classList.remove('flipped');
  // Reset flip button label
  if (flipButton) {
    flipButton.textContent = 'Show answer (Vis svar)';
  }
  if (order.length === 0) {
    // Completed
    learnedCountEl.textContent = learned.length;
    totalCountEl.textContent   = verbs.length;
    summaryEl.classList.remove('hidden');
    updateProgress();
    return;
  }
  currentIndex = order.pop();
  saveProgress();
  const v = verbs[currentIndex];
  if (!v) {
    // In case of mismatch, skip
    showNext();
    return;
  }
  infinitiveEl.textContent = v.infinitive;
  presentEl.textContent    = v.present;
  preteriteEl.textContent  = v.preterite;
  perfectEl.textContent    = v.perfect;
  englishEl.textContent    = v.english;
  // Show both Norwegian hint and translated English hint
  const englishHint = translateHint(v.hint || '');
  hintEl.innerHTML = `${v.hint || ''}<br><em>${englishHint}</em>`;
  updateProgress();
}

// Flip the card to reveal the answer. Once flipped, it remains flipped.
function flipCard() {
  // Only flip if it is not already flipped
  if (!cardInner.classList.contains('flipped')) {
    cardInner.classList.add('flipped');
  }
}

function markLearned() {
  if (currentIndex !== null && !learned.includes(currentIndex)) {
    learned.push(currentIndex);
    saveProgress();
  }
  // Show encouraging message
  showToast();
  showNext();
}

function skipVerb() {
  showNext();
}

function restart() {
  // Clear saved progress for current difficulty
  localStorage.removeItem(`verbOrder_${currentDifficulty}`);
  localStorage.removeItem(`verbLearned_${currentDifficulty}`);
  order = shuffle([...Array(verbs.length).keys()]);
  learned = [];
  saveProgress();
  showNext();
}

/**
 * Filter the verbs list based on selected difficulty and reload progress.
 * @param {string} level Difficulty: 'all', 'easy', 'medium', 'hard'
 */
function filterVerbs(level) {
  currentDifficulty = level;
  // Determine filtered verbs based on difficulty
  if (level === 'all') {
    verbs = allVerbs;
  } else {
    verbs = allVerbs.filter(v => assignDifficulty(v) === level);
  }
  // Reset order and learned arrays
  // Load saved progress for this difficulty if exists
  loadProgress();
  // If order array is empty (no saved progress), initialize new order
  if (!order || order.length === 0) {
    order = shuffle([...Array(verbs.length).keys()]);
  }
  // Ensure learned indices are valid for new verbs list
  learned = learned.filter(idx => idx < verbs.length);
  saveProgress();
  showNext();
}

/**
 * Update the quiz scoreboard text.
 */
function updateQuizScoreboard() {
  if (!quizScoreboard) return;
  quizScoreboard.textContent = `Quiz: ${quizIndex}/${quizTotal} – Correct: ${quizCorrect} (Riktig: ${quizCorrect})`;
}

/**
 * Start the quiz mode. Initializes quiz order and counters, hides study UI and shows quiz UI.
 */
function startQuiz() {
  isQuizMode = true;
  // Determine how many questions to ask: use up to 10 or total verbs if fewer
  quizTotal = Math.min(10, allVerbs.length);
  // Create a shuffled order of indices for quiz
  quizOrder = shuffle([...Array(allVerbs.length).keys()]).slice(0, quizTotal);
  quizIndex = 0;
  quizCorrect = 0;
  // Hide study mode elements
  if (cardEl) cardEl.style.display = 'none';
  if (buttonsContainer) buttonsContainer.style.display = 'none';
  summaryEl.classList.add('hidden');
  // Show quiz container
  if (quizContainer) quizContainer.classList.remove('hidden');
  updateQuizScoreboard();
  showQuizQuestion();
}

/**
 * Display the current quiz question and multiple choice options.
 */
function showQuizQuestion() {
  updateQuizScoreboard();
  if (quizIndex >= quizOrder.length) {
    endQuiz();
    return;
  }
  // Hide feedback until an answer is selected
  if (quizFeedbackEl) {
    quizFeedbackEl.classList.remove('show');
    quizFeedbackEl.style.display = 'none';
  }
  // Clear previous options
  if (quizOptionsEl) {
    quizOptionsEl.innerHTML = '';
  }
  const vIndex = quizOrder[quizIndex];
  const v = allVerbs[vIndex];
  if (!v) {
    quizIndex++;
    showQuizQuestion();
    return;
  }
  // Show the infinitive as the question prompt
  if (quizQuestionEl) {
    quizQuestionEl.textContent = v.infinitive;
  }
  // Determine correct and distractor answers. Use first variant of preterite as the canonical answer.
  const forms = v.preterite.split(/[,()]/).map(s => s.trim()).filter(s => s.length > 0);
  const correct = forms[0];
  // Generate distractors from other verbs' preterite forms
  const distractors = [];
  while (distractors.length < 3) {
    const r = Math.floor(Math.random() * allVerbs.length);
    const candidate = allVerbs[r].preterite.split(/[,()]/)[0].trim();
    if (candidate && candidate !== correct && !distractors.includes(candidate)) {
      distractors.push(candidate);
    }
  }
  const options = shuffle([correct, ...distractors]);
  // Render option buttons
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => handleQuizAnswer(btn, option, correct, v));
    quizOptionsEl.appendChild(btn);
  });
}

/**
 * Handle the user's answer in quiz mode, provide feedback, and proceed to the next question.
 * @param {HTMLButtonElement} btn The button clicked
 * @param {string} selected The selected answer
 * @param {string} correct The correct answer
 * @param {Object} v The current verb object
 */
function handleQuizAnswer(btn, selected, correct, v) {
  // Disable all options to prevent multiple selections
  const buttons = quizOptionsEl.querySelectorAll('button');
  buttons.forEach(button => {
    button.disabled = true;
  });
  // Check if selected answer matches any of the correct forms
  const allCorrectForms = v.preterite.split(/[,()]/).map(s => s.trim());
  const isCorrect = allCorrectForms.includes(selected);
  if (isCorrect) {
    btn.classList.add('correct');
    quizCorrect++;
    showToast();
  } else {
    btn.classList.add('wrong');
    // Highlight the correct button
    buttons.forEach(b => {
      if (allCorrectForms.includes(b.textContent)) {
        b.classList.add('correct');
      }
    });
  }
  // Show feedback with both languages
  const englishHint = translateHint(v.hint || '');
  if (quizFeedbackEl) {
    // Display all forms for clarity: present, preterite, perfect and English translation
    const feedbackHtml = `
      <strong>${v.infinitive}</strong><br>
      <span>Present (Presens): ${v.present}</span><br>
      <span>Preterite (Preteritum): ${v.preterite}</span><br>
      <span>Perfect (Perfektum): ${v.perfect}</span><br>
      <span>English: ${v.english}</span><br>
      ${v.hint || ''}<br><em>${englishHint}</em>
    `;
    quizFeedbackEl.innerHTML = feedbackHtml;
    quizFeedbackEl.classList.add('show');
    quizFeedbackEl.style.display = 'block';
  }
  // Advance to the next question after a longer delay to allow the user to read the feedback
  setTimeout(() => {
    quizIndex++;
    showQuizQuestion();
  }, QUIZ_FEEDBACK_DELAY);
}

/**
 * Display the quiz results at the end.
 */
function endQuiz() {
  updateQuizScoreboard();
  if (quizQuestionEl) {
    quizQuestionEl.textContent = 'Quiz finished! (Quiz ferdig!)';
  }
  if (quizOptionsEl) {
    quizOptionsEl.innerHTML = '';
  }
  if (quizFeedbackEl) {
    quizFeedbackEl.innerHTML = `You answered ${quizCorrect} of ${quizTotal} correctly. (Du svarte riktig på ${quizCorrect} av ${quizTotal}.)`;
    quizFeedbackEl.classList.add('show');
    quizFeedbackEl.style.display = 'block';
  }
}

/**
 * Exit quiz mode and return to study mode.
 */
function exitQuiz() {
  isQuizMode = false;
  // Hide quiz container
  if (quizContainer) quizContainer.classList.add('hidden');
  // Show study mode elements
  if (cardEl) cardEl.style.display = '';
  if (buttonsContainer) buttonsContainer.style.display = 'flex';
  // Reset any feedback
  if (quizFeedbackEl) {
    quizFeedbackEl.classList.remove('show');
    quizFeedbackEl.style.display = 'none';
  }
  // Continue normal study
  showNext();
}

/**
 * --- Write mode functionality ---
 * In write mode the user is given an infinitive and must type the preterite form.
 * The mode asks a subset of verbs (up to 10) from the full list. Progress and
 * correctness are tracked, and a scoreboard is displayed. The user can skip,
 * restart or exit back to study mode.
 */

function updateWriteScoreboard() {
  if (!writeScoreboard) return;
  // Retrieve best correct from storage
  let bestCorrect = parseInt(localStorage.getItem('writeBestCorrect') || '0', 10);
  const bestPart  = bestCorrect > 0 ? ` – Best: ${bestCorrect}` : '';
  writeScoreboard.textContent = `Write: ${writeIndex}/${writeTotal} – Correct: ${writeCorrect}${bestPart} (Riktig: ${writeCorrect})`;
}

function showWriteQuestion() {
  updateWriteScoreboard();
  // End of list
  if (writeIndex >= writeOrder.length) {
    endWrite();
    return;
  }
  const idx = writeOrder[writeIndex];
  const v   = allVerbs[idx];
  if (!v) {
    // Skip invalid entries
    writeIndex++;
    showWriteQuestion();
    return;
  }
  if (writeQuestionEl) {
    writeQuestionEl.textContent = v.infinitive;
  }
  // Clear input and feedback
  if (inputPreteriteEl) {
    inputPreteriteEl.value = '';
    inputPreteriteEl.focus();
  }
  if (writeFeedbackEl) {
    writeFeedbackEl.classList.remove('show');
    writeFeedbackEl.style.display = 'none';
    writeFeedbackEl.innerHTML = '';
  }
}

function handleWriteCheck() {
  if (writeIndex >= writeOrder.length) {
    return;
  }
  const idx      = writeOrder[writeIndex];
  const v        = allVerbs[idx];
  const userAns  = (inputPreteriteEl.value || '').trim().toLowerCase();
  const answers  = (v.preterite || '').split(/[,()]/).map(s => s.trim().toLowerCase()).filter(s => s.length > 0);
  const correct  = answers.includes(userAns);
  // Show feedback
  if (writeFeedbackEl) {
    const englishHint = translateHint(v.hint || '');
    if (correct) {
      writeCorrect++;
      // Use toast for positive reinforcement
      showToast();
      writeFeedbackEl.innerHTML = `<strong>Correct!</strong> ${v.infinitive} – ${v.preterite} – ${v.english}<br>${v.hint || ''}<br><em>${englishHint}</em>`;
      writeFeedbackEl.classList.add('show');
      writeFeedbackEl.style.display = 'block';
    } else {
      writeFeedbackEl.innerHTML = `<strong>Wrong.</strong> Correct forms: ${v.preterite} – ${v.english}<br>${v.hint || ''}<br><em>${englishHint}</em>`;
      writeFeedbackEl.classList.add('show');
      writeFeedbackEl.style.display = 'block';
    }
  }
  updateWriteScoreboard();
  // Move to next question after a delay to allow user to read feedback
  setTimeout(() => {
    writeIndex++;
    showWriteQuestion();
  }, 1800);
}

function handleWriteSkip() {
  if (writeIndex < writeOrder.length) {
    writeIndex++;
    showWriteQuestion();
  }
}

function endWrite() {
  // Display completion message
  if (writeQuestionEl) {
    writeQuestionEl.textContent = 'Finished! (Ferdig!)';
  }
  if (writeFeedbackEl) {
    writeFeedbackEl.innerHTML = `You answered ${writeCorrect} of ${writeTotal} correctly. (Du svarte riktig på ${writeCorrect} av ${writeTotal}.)`;
    writeFeedbackEl.classList.add('show');
    writeFeedbackEl.style.display = 'block';
  }
  // Update best score in localStorage
  let bestCorrect = parseInt(localStorage.getItem('writeBestCorrect') || '0', 10);
  if (writeCorrect > bestCorrect) {
    localStorage.setItem('writeBestCorrect', String(writeCorrect));
  }
  updateWriteScoreboard();
}

function startWrite() {
  isWriteMode = true;
  // Hide study and quiz UI
  if (cardEl) cardEl.style.display = 'none';
  if (buttonsContainer) buttonsContainer.style.display = 'none';
  if (quizContainer) quizContainer.classList.add('hidden');
  summaryEl.classList.add('hidden');
  // Show write container
  if (writeContainer) writeContainer.classList.remove('hidden');
  // Initialize order: use up to 10 verbs or full list if shorter
  writeTotal   = Math.min(10, allVerbs.length);
  writeOrder   = shuffle([...Array(allVerbs.length).keys()]).slice(0, writeTotal);
  writeIndex   = 0;
  writeCorrect = 0;
  showWriteQuestion();
}

function exitWrite() {
  isWriteMode = false;
  // Hide write container
  if (writeContainer) writeContainer.classList.add('hidden');
  // Restore study mode UI
  if (cardEl) cardEl.style.display = '';
  if (buttonsContainer) buttonsContainer.style.display = 'flex';
  // Reset and clear feedback
  if (writeFeedbackEl) {
    writeFeedbackEl.classList.remove('show');
    writeFeedbackEl.style.display = 'none';
    writeFeedbackEl.innerHTML = '';
  }
  // Show next verb in study mode
  showNext();
}

/**
 * --- Memory game functionality ---
 * A simple concentration/memory game where the user matches infinitives to
 * their preterite forms. A subset of verbs is selected randomly. Cards
 * are flipped by clicking, and matching pairs remain exposed. Moves and
 * pairs found are tracked. A best score (minimum moves) is stored in
 * localStorage under 'memoryBestMoves'.
 */

function updateMemoryScoreboard() {
  if (!memoryScoreboard) return;
  // Retrieve best moves from storage if exists
  let bestMoves = parseInt(localStorage.getItem('memoryBestMoves') || '0', 10);
  const bestPart = bestMoves > 0 ? ` – Best: ${bestMoves}` : '';
  memoryScoreboard.textContent = `Memory: ${memoryMatched}/${memoryPairsTotal} – Moves: ${memoryMoves}${bestPart}`;
}

function generateMemoryCards(pairCount) {
  const indices = shuffle([...Array(allVerbs.length).keys()]).slice(0, pairCount);
  const list = [];
  indices.forEach((idx, pid) => {
    const v = allVerbs[idx];
    const pre = (v.preterite || '').split(/[,()]/)[0].trim();
    list.push({ pair: pid, text: v.infinitive });
    list.push({ pair: pid, text: pre });
  });
  return shuffle(list);
}

function createMemoryBoard() {
  if (!memoryBoardEl) return;
  memoryBoardEl.innerHTML = '';
  memoryCards   = [];
  memoryFlipped = [];
  memoryMatched = 0;
  memoryMoves   = 0;
  memoryPairsTotal = memoryCardsRaw.length / 2;
  // Create DOM elements for each card
  memoryCardsRaw.forEach((cardObj, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'memory-card';
    cardEl.dataset.pair = cardObj.pair;
    cardEl.dataset.text = cardObj.text;
    cardEl.textContent = '';
    cardEl.addEventListener('click', () => handleMemoryCardClick(cardEl));
    memoryCards.push({ element: cardEl, pair: cardObj.pair, text: cardObj.text, matched: false, flipped: false });
    memoryBoardEl.appendChild(cardEl);
  });
  updateMemoryScoreboard();
}

function handleMemoryCardClick(cardEl) {
  if (memoryLock) return;
  // Find card object
  const cardObj = memoryCards.find(c => c.element === cardEl);
  if (!cardObj || cardObj.matched || cardObj.flipped) return;
  // Flip the card
  cardObj.flipped = true;
  cardEl.classList.add('flipped');
  cardEl.textContent = cardObj.text;
  memoryFlipped.push(cardObj);
  if (memoryFlipped.length === 2) {
    // Two cards flipped; increment moves
    memoryMoves++;
    const [c1, c2] = memoryFlipped;
    if (c1.pair === c2.pair) {
      // Match found
      c1.matched = true;
      c2.matched = true;
      c1.element.classList.remove('flipped');
      c1.element.classList.add('matched');
      c2.element.classList.remove('flipped');
      c2.element.classList.add('matched');
      memoryMatched++;
      // Optional feedback
      if (memoryFeedbackEl) {
        memoryFeedbackEl.textContent = `Match: ${c1.text} – ${c2.text}`;
        memoryFeedbackEl.classList.add('show');
        memoryFeedbackEl.style.display = 'block';
      }
      memoryFlipped = [];
      updateMemoryScoreboard();
      // Check if game finished
      if (memoryMatched === memoryPairsTotal) {
        endMemoryGame();
      }
    } else {
      // No match: hide after delay
      memoryLock = true;
      updateMemoryScoreboard();
      setTimeout(() => {
        memoryFlipped.forEach(obj => {
          obj.flipped = false;
          obj.element.classList.remove('flipped');
          obj.element.textContent = '';
        });
        memoryFlipped = [];
        memoryLock = false;
      }, 700);
    }
  } else {
    updateMemoryScoreboard();
  }
}

function endMemoryGame() {
  // Stop further interaction
  memoryLock = true;
  // Show final feedback
  if (memoryFeedbackEl) {
    memoryFeedbackEl.textContent = `Finished! (Ferdig!) You found all pairs in ${memoryMoves} moves.`;
    memoryFeedbackEl.classList.add('show');
    memoryFeedbackEl.style.display = 'block';
  }
  // Update best moves in storage
  let bestMoves = parseInt(localStorage.getItem('memoryBestMoves') || '0', 10);
  if (bestMoves === 0 || memoryMoves < bestMoves) {
    localStorage.setItem('memoryBestMoves', String(memoryMoves));
  }
  updateMemoryScoreboard();
}

function startMemory() {
  isMemoryMode = true;
  // Hide study and quiz UI
  if (cardEl) cardEl.style.display = 'none';
  if (buttonsContainer) buttonsContainer.style.display = 'none';
  if (quizContainer) quizContainer.classList.add('hidden');
  summaryEl.classList.add('hidden');
  // Show memory container
  if (memoryContainer) memoryContainer.classList.remove('hidden');
  // Generate new game: choose 6 pairs or half of verbs if fewer
  const pairs = Math.min(6, Math.floor(allVerbs.length / 2));
  memoryCardsRaw = generateMemoryCards(pairs);
  memoryPairsTotal = pairs;
  memoryFlipped = [];
  memoryMatched = 0;
  memoryMoves   = 0;
  memoryLock    = false;
  // Create board
  createMemoryBoard();
  // Clear feedback
  if (memoryFeedbackEl) {
    memoryFeedbackEl.classList.remove('show');
    memoryFeedbackEl.style.display = 'none';
    memoryFeedbackEl.textContent = '';
  }
}

function restartMemory() {
  startMemory();
}

function exitMemory() {
  isMemoryMode = false;
  // Hide memory container
  if (memoryContainer) memoryContainer.classList.add('hidden');
  // Reset feedback
  if (memoryFeedbackEl) {
    memoryFeedbackEl.classList.remove('show');
    memoryFeedbackEl.style.display = 'none';
    memoryFeedbackEl.textContent = '';
  }
  // Show study UI again
  if (cardEl) cardEl.style.display = '';
  if (buttonsContainer) buttonsContainer.style.display = 'flex';
  // Continue normal study
  showNext();
}

// Event listeners
flipButton.addEventListener('click', flipCard);
knowButton.addEventListener('click', markLearned);
skipButton.addEventListener('click', skipVerb);
restartButton.addEventListener('click', restart);

// Info button opens modal, close button closes
if (infoButton) {
  addTapListener(infoButton, openModal);
}
if (closeModalEl) {
  addTapListener(closeModalEl, closeModal);
}
// Additional button inside modal to close it
if (modalCloseButton) {
  addTapListener(modalCloseButton, closeModal);
}
// Clicking outside modal content closes it
if (infoModal) {
  infoModal.addEventListener('click', (event) => {
    if (event.target === infoModal) {
      closeModal();
    }
  });
}

// Quiz mode event listeners
if (quizButton) {
  addTapListener(quizButton, startQuiz);
}
if (quizExitButton) {
  addTapListener(quizExitButton, exitQuiz);
}

// Handle difficulty selection changes
if (difficultySelect) {
  difficultySelect.addEventListener('change', (ev) => {
    const level = ev.target.value;
    filterVerbs(level);
  });
}

// Write mode event listeners
addTapListener(writeButton, startWrite);
addTapListener(writeCheckButton, handleWriteCheck);
addTapListener(writeSkipButton, handleWriteSkip);
addTapListener(writeExitButton, exitWrite);

// Allow pressing Enter in the write input to trigger check
if (inputPreteriteEl) {
  inputPreteriteEl.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter') {
      handleWriteCheck();
    }
  });
}

// Memory game event listeners
addTapListener(memoryButton, startMemory);
addTapListener(memoryRestartButton, restartMemory);
addTapListener(memoryExitButton, exitMemory);

// Initialize on page load
loadProgress();
showNext();

/**
 * Helper to attach both click and touchstart events for buttons.
 * On mobile Safari the click event may be delayed; attaching touchstart
 * ensures immediate response. The default action is prevented to avoid
 * triggering synthetic mouse events.
 * @param {HTMLElement} el The element to attach listeners to
 * @param {Function} handler The handler to invoke
 */
function addTapListener(el, handler) {
  if (!el || !handler) return;
  el.addEventListener('click', handler);
  el.addEventListener('touchstart', (ev) => {
    ev.preventDefault();
    handler();
  }, { passive: false });
}

