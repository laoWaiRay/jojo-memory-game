const stands = [
  {
    name: 'Star Platinum',
    user: 'Jotaro Kujo',
    img: 'starPlatinum.png',
    gif: 'starPlatinum.gif',
    desc1: "Star Platinum (スタープラチナ (星の白金) Sutā Purachina) is the Stand of Jotaro Kujo, primarily featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders. It also appears in the fourth part, Diamond is Unbreakable, and the sixth part, Stone Ocean.",
    desc2: "Star Platinum is a close-range Stand with exceptional strength and speed, as well as gaining the ability to stop time during the fight against DIO. Its overwhelming power, coupled with Jotaro's fighting prowess, make it one of the strongest and most iconic Stands in the series.",
  },
  {
    name: 'Magician\'s Red',
    user: 'Muhammad Avdol',
    img: 'magiciansRed.png',
    gif: 'magiciansRed.gif',
    desc1: "Magician's Red (マジシャンズレッド（魔術師の赤） Majishanzu Reddo) is the Stand of Muhammad Avdol, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Magician's Red is a humanoid Stand whose appearance is that of a bird-human hybrid, with the ability to produce and manipulate fire in various ways.",
  },
  {
    name: 'Hermit Purple',
    user: 'Joseph Joestar',
    img: 'hermitPurple.png',
    gif: 'hermitPurple.gif',
    desc1: "Hermit Purple (ハーミットパープル（隠者の紫） Hāmitto Pāpuru) is the Stand of Joseph Joestar, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders, and briefly in the fourth part, Diamond is Unbreakable.",
    desc2: "Hermit Purple is a vine-like Stand that Joseph summons on his hands. It allows its user to divine information and messages from other locations.",
  },
  {
    name: 'Hierophant Green',
    user: 'Noriaki Kakyoin',
    img: 'hierophantGreen.png',
    gif: 'hierophantGreen.gif',
    desc1: "Hierophant Green (ハイエロファントグリーン（法皇の緑） Haierofanto Gurīn) is the Stand of Noriaki Kakyoin featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "The first long-range Stand revealed in the series, Hierophant Green fights at a distance and is capable of unraveling into tentacles and unleashing a brilliant blast of emeralds known as the Emerald Splash.",
  },
  {
    name: 'Silver Chariot',
    user: 'Jean Pierre Polnareff',
    img: 'silverChariot.png',
    gif: 'silverChariot.gif',
    desc1: "Silver Chariot (シルバーチャリオッツ（銀の戦車） Shirubā Chariottsu) is the Stand of Jean Pierre Polnareff, primarily featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders, and briefly in the fifth part, Vento Aureo.",
    desc2: "Silver Chariot is a humanoid Stand clad in armor and armed with a rapier. It is particularly deadly at close-range combat due to its speed and precision.",
  },
  {
    name: 'The Fool',
    user: 'Iggy',
    img: 'theFool.png',
    gif: 'theFool.gif',
    desc1: "The Fool (ザ・フール（愚者） Za Fūru) is the Stand of Iggy, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "The Fool is a Stand bound to a mass of sand that usually bears the appearance of a mechanical beast. Iggy wields The Fool to create sand constructs in battle.",
  },
  {
    name: 'The World',
    user: 'DIO',
    img: 'theWorld.png',
    gif: 'theWorld.gif',
    desc1: "The World (ザ・ワールド（世界） Za Wārudo) is the Stand of DIO, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "An extremely powerful time-controlling Stand wielded by an equally powerful user, The World is an esoteric Stand, both revered and feared by almost every character in Stardust Crusaders.",
  },
  {
    name: 'Tower of Gray',
    user: 'Gray Fly',
    img: 'towerOfGray.png',
    gif: 'towerOfGray.gif',
    desc1: "Tower of Gray (タワー・オブ・グレー（灰の塔） Tawā Obu Gurē) is the Stand of Gray Fly featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Specializing in making attacks look like accidents, it takes the form of a giant stag beetle with an extending second jaw and the ability to move at incredibly fast speeds.",
  },
  {
    name: 'Dark Blue Moon',
    user: 'Imposter Captain Tennille',
    img: 'darkBlueMoon.png',
    gif: 'darkBlueMoon.gif',
    desc1: "Dark Blue Moon (ダークブルームーン（暗青の月） Dāku Burū Mūn) is the Stand of the Impostor Captain Tennille, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Dark Blue Moon is a powerful humanoid Stand with many fish-like features whose capabilities are maximized when underwater. Its abilities range from attaching power-draining barnacles to creating whirlpools.",
  },
  {
    name: 'Strength',
    user: 'Forever',
    img: 'strength.png',
    gif: 'strength.gif',
    desc1: "Strength (ストレングス（力） Sutorengusu) is the Stand of the orangutan Forever, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "As a materialized Stand, it possesses the ability to bind itself to a boat and transform it into a massive freighter. Its user is then capable of manipulating the ship at will.",
  },
  {
    name: 'Ebony Devil',
    user: 'Devo the Cursed',
    img: 'ebonyDevil.png',
    gif: 'ebonyDevil.gif',
    desc1: "Ebony Devil (エボニーデビル（悪魔） Ebonī Debiru) is the Stand of Devo the Cursed, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It activates once its User is damaged and will grow in power based on the User's hatred for the attacker. The Stand will then enter a nearby physical object, such as a doll, allowing its User to control it remotely.",
  },
  {
    name: 'Yellow Temperance',
    user: 'Rubber Soul',
    img: 'yellowTemperence.png',
    gif: 'yellowTemperence.gif',
    desc1: "Yellow Temperance (イエローテンパランス（黄の節制） Ierō Tenparansu) is the Stand of Rubber Soul, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Yellow Temperance is a blob-like Stand that consumes flesh to grow in size. It can wrap itself around its User in order to provide either a disguise or an impenetrable defense.",
  },
  {
    name: 'Hanged Man',
    user: 'J. Geil',
    img: 'hangedMan.png',
    gif: 'hangedMan.gif',
    desc1: "Hanged Man (ハングドマン（吊られた男） Hangudo Man) is the Stand of J. Geil featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Hanged Man is a humanoid Stand with the appearance of a bandaged ghoul. It has the ability to attack its targets from reflective surfaces.",
  },
  {
    name: 'Emperor',
    user: 'Hol Horse',
    img: 'emperor.png',
    gif: 'emperor.gif',
    desc1: "Emperor (エンペラー（皇帝） Enperā) is the Stand of Hol Horse, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "The Stand takes the form of a gun that the user can summon into his hand, allowing him to shoot his foes with controllable bullets.",
  },
  {
    name: 'Empress',
    user: 'Nena',
    img: 'empress.png',
    gif: 'empress.gif',
    desc1: "Empress (エンプレス（女帝） Enpuresu) is the Stand of Nena, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It is a parasitic Stand that grows from the flesh of its victim, eventually overpowering them.",
  },
  {
    name: 'Wheel of Fortune',
    user: 'ZZ',
    img: 'wheelOfFortune.png',
    gif: 'wheelOfFortune.gif',
    desc1: "Wheel of Fortune (ホウィール・オブ・フォーチュン（運命の車輪） Howīru Obu Fōchun) is the Stand of ZZ, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "As a Stand bound to a car, it is capable of morphing its exterior to suit the needs of its driver.",
  },
  {
    name: 'Justice',
    user: 'Enya the Hag',
    img: 'justice.png',
    gif: 'justice.gif',
    desc1: "Justice (ジャスティス（正義） Jasutisu) is the Stand of Enya the Hag, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It is a Stand of fog often in the shape of a crowned skull and hands, capable of creating illusions and puppeteering its victims by invading their wounds.",
  },
  {
    name: 'Lovers',
    user: 'Steely Dan',
    img: 'lovers.png',
    gif: 'lovers.gif',
    desc1: "Lovers (ラバーズ（恋人） Rabāzu), is a microscopic Stand belonging to Steely Dan featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It is a minuscule humanoid Stand with insectoid features. It can infiltrate the brain of a designated target and manipulate their pain receptors. Any damage that Steely Dan receives will be doubled in the victim.",
  },
  {
    name: 'Sun',
    user: 'Arabia Fats',
    img: 'sun.png',
    gif: 'sun.gif',
    desc1: "Sun (サン（太陽） San) is the Stand of Arabia Fats, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "As it names suggest, Sun takes on the appearance of a small sun that radiates scorching heat and can shoot concentrated beams at its victims.",
  },
  {
    name: 'Death 13',
    user: 'Mannish Boy',
    img: 'death13.png',
    gif: 'death13.gif',
    desc1: "Death 13 (デスサーティーン（死神13） Desu Sātīn) is the Stand of Mannish Boy, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It has the formidable power to attack its victims in their dreams, luring their spirits into its own nightmare world where they have no power to retaliate.",
  },
  {
    name: 'Judgement',
    user: 'Cameo',
    img: 'judgement.png',
    gif: 'judgement.gif',
    desc1: "Judgement (ジャッジメント（審判） Jajjimento) is the Stand of Cameo, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Judgement is a burly mechanical humanoid Stand whose ability is to sculpt fakes out of dirt, \"granting\" wishes by creating things that its victims ask for.",
  },
  {
    name: 'High Priestess',
    user: 'Midler',
    img: 'highPriestess.png',
    gif: 'highPriestess.gif',
    desc1: "High Priestess (ハイプリエステス（女教皇） Hai Puriesutesu) is the Stand of Midler featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It has the troublesome ability to transform or assimilate into anything comprised of minerals, even something as large as a seabed.",
  },
  {
    name: 'Geb',
    user: 'N\'Doul',
    img: 'geb.png',
    gif: 'geb.gif',
    desc1: "Geb (ゲブ神 Gebu-shin) is the Stand of N'Doul featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Geb is a water Stand which can be remotely piloted from afar. Its nature as a water-controlling Stand makes it very nimble yet deadly, as it can materialize a clawed hand able to tear through flesh and metal, as well as rip off a man's head.",
  },
  {
    name: 'Khnum',
    user: 'Oingo',
    img: 'khnum.png',
    gif: 'khnum.gif',
    desc1: "Khnum (クヌム神 Kunumu-shin) is the Stand of Oingo featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Khnum is a pure ability and allows Oingo to mold his face to disguise himself as anyone.",
  },
  {
    name: 'Tohth',
    user: 'Boingo',
    img: 'tohth.png',
    gif: 'tohth.gif',
    desc1: "Tohth (トト神 Toto-shin) is the Stand of Boingo featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Representing the Egyptian God, Tohth, it takes the form of a comic book that allows its user to see into the very near future.",
  },
  {
    name: 'Anubis',
    user: 'Caravan Serai',
    img: 'anubis.png',
    gif: 'anubis.gif',
    desc1: "Anubis (アヌビス神 Anubisu-shin) is the former Stand of Caravan Serai, and a tertiary antagonist featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders, specifically the \"Anubis\" story arc.",
    desc2: "It is a humanoid Stand resembling the god, Anubis, and bound to a sword. It is a Stand made to kill with an array of abilities allowing it to possess anyone and enhance their fighting abilities. Anubis is unique in being a userless Stand who obeys DIO and repeatedly tries to kill the Joestar Group's members in Egypt.",
  },
  {
    name: 'Bastet',
    user: 'Mariah',
    img: 'bastet.png',
    gif: 'bastet.gif',
    desc1: "Bastet (バステト女神 Basuteto-joshin) is the Stand of Mariah featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It takes on the innocuous appearance of an electrical outlet, but once touched, it shocks its victims and magnetizes them.",
  },
  {
    name: 'Sethan',
    user: 'Alessi',
    img: 'sethan.png',
    gif: 'sethan.gif',
    desc1: "Sethan (セト神 Seto-shin) is the Stand of Alessi featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It manifests itself within Alessi's shadow and takes on the appearance of a humanoid with a bird-like head. Anyone who touches it will be de-aged.",
  },
  {
    name: 'Osiris',
    user: 'Daniel J. D\'Arby',
    img: 'osiris.png',
    gif: 'osiris.gif',
    desc1: "Osiris (オシリス神 Oshirisu-shin) is the Stand of Daniel J. D'Arby, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It is a hulking humanoid Stand capable of stealing souls of those who lose a bet or those who admit defeat, and storing them as poker chips.",
  },
  {
    name: 'Horus',
    user: 'Pet Shop',
    img: 'horus.png',
    gif: 'horus.gif',
    desc1: "Horus (ホルス神 Horusu-shin) is the Stand of Pet Shop featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Bound to ice, it vaguely takes on the appearance of a bird skeleton and allows Pet Shop to generate extreme cold temperatures.",
  },
  {
    name: 'Atum',
    user: 'Telence T D\'Arby',
    img: 'atum.png',
    gif: 'atum.gif',
    desc1: "Atum (アトゥム神 Atumu-shin) is the Stand of Telence T. D'Arby, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "It is a humanoid Stand with mechanical features endowed with two abilities: to steal the souls of people who lost in a game against D'Arby, and to observe a person's soul to partially guess their intents.",
  },
  {
    name: 'Cream',
    user: 'Vanilla Ice',
    img: 'cream.png',
    gif: 'cream.gif',
    desc1: "Cream (クリーム Kurīmu) is the Stand of Vanilla Ice, featured in the third part of the JoJo's Bizarre Adventure series, Stardust Crusaders.",
    desc2: "Cream is a humanoid Stand with a monstrous appearance. Its mouth leads to a dimension of darkness, and if Cream swallows itself, it takes the form of a destructive void sphere.",
  },
]

export default stands