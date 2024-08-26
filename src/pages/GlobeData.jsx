import { info } from "autoprefixer";

const GlobeData = [
    {
      code: 'CAN',
      name: 'Canada',
      info:'Blue racer is a large snake with large eyes and black masks, found mostly in Ontario. The largest blue racer ever captured was 138 cm long.',
      img:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JIDExQft1AADfqVHCD-fvKRTqrzjG_tDwj_MULBhTw2NxjyM"/>
    },
    {
      code: 'USA',
      name: 'United States of America',
      info: 'Agkistrodon piscivorus is a species of venomous snake, a pit viper in the subfamily Crotalinae of the family Viperidae. It is one of the worlds few semiaquatic vipers, and is native to the Southeastern United States.',
      img: <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJlkKYz1RZlijKNr3VxGJ4x9J4G-IxulVMNUxwGR3mwVmmErW1"/>
    },
    {
      code: 'FRA',
      name: 'France',
      info: 'The most common snakes in France are couleuvres, which are not poisonous to humans, although they do have a venom which kills mice and other small creatures. A legend, sometimes heard in country areas, that they got their name from their habit of licking their lips is not true, according to experts',
      img: <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioYVGE6LSD928fD2vWlFt2YiMAwwcYvSSaEZ49SFioBx1alMMVHT4SU9P3LFD7mlCW0nWBfsOJQ7d6wzNfoQCS-gc9NatA5ZBRbX8tO5LQ5NdnkRNZZXolurlKDzwzDJRSaZQ1EQ/s400/grass_snake_3_260507_sw.jpg"/>
    },
    {
      code:'AFG',
      name: 'Afghanistan',
      info: 'Russell vipers are one of the most dangerous snakes of the Afghanistan/ Pakistan region. These snakes are short- tempered and very aggressive. When disturbed, they strike with great force and speed.',
      img: <img src="https://qph.cf2.quoracdn.net/main-qimg-c30f9b1160d4c55cf04fcaacd3a94323-lq"/>
    },
    {
        code:'BGD',
        name: 'Bangladesh',
        info: 'The common krait (Bungarus caeruleus), also known as Bengal krait, is a species of highly venomous snakes of the genus Bungarus in the Elapidae family, native to the Indian subcontinent. It is one of the Big Four Indian snakes that inflict the most snakebites on humans in Pakistan, India and Bangladesh',
        img: <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Bungarus_caerulus.jpg"/>
      },
      {
        code:'BEL',
        name: 'Belgium',
        info: '',
        img: <img src=""/>
      },
      {
        code:'BTN',
        name: 'Bhutan',
        info: 'The monocled cobra, also called monocellate cobra and Indian spitting cobra, is a venomous cobra species widespread across South and Southeast Asia and listed as Least Concern on the IUCN Red List.',
        img: <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoUnUVEgdTWr_Y9S9xH1c7ACkLYh30Mrz74wAYZ9unHYwmmOSM"/>
      },
      {
        code:'MMR',
        name: 'Myanmar',
        info: 'Trimeresurus purpureomaculatus is a venomous pit viper species native to India, Bangladesh and Southeast Asia. Common names include: mangrove pit viper, mangrove viper, and shore pit viper.',
        img: <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTSJPIhKCYILGlsGeLn1PrCKdOll7-bbv2kN3nS7X0Bk1yEU80W"/>
      },
      {
        code:'CHN',
        name: 'China',
        info: 'Trimeresurus stejnegeri is a species of venomous pit viper endemic to Asia. Two subspecies are currently recognized, including the nominate subspecies described here.',
        img: <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQq7VVZc6-xCJi2gqQoRx7jAoEgHGpNyMcbbYuJMysx-ZbhX-jA"/>
      },
      {
        code:'COL',
        name: 'Colombia',
        info: 'Bothriechis schlegelii, known commonly as the eyelash viper or the eyelash pit viper, is a species of pit viper in the family Viperidae, native to Latin America',
        img: <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSR1xQBNdjHwa9mJ4Pmr3U_LwR1Q0hZ8rrY4YssTVlELN0qkni"/>
      },
      {
        code:'DNK',
        name: 'Denmark',
        info: 'Today, only two snake species roam the country of Denmark. Originally four, the Aesculapian and Smooth Snakes are considered extinct, leaving the European Adder and the Grass Snake as the remaining species. Luckily, while venomous, adders are relatively shy and do not bite unless provoked or startled.',
        img: <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxKCkDV_SqVfFUsyHVFZZLa8anNYm9B5RtpcoJs5I2C8KZ41Cf"/>
      },
      {
        code:'EGY',
        name: 'Egypt',
        info: 'Saharan Horned Viper are venomous vipers are best known for the ‘horns’ that stick straight up from just above their eyes. They’re sand-colored, with a variegated pattern of light and dark brown scales. Desert horned vipers grow to a maximum length of three feet and eat mostly rodents and small birds. They move by sidewinding, a type of movement in which they move sideways by curving and straightening their bodies. Saharan horned vipers are one of the most common snakes in Egypt',
        img: <img src="https://a-z-animals.com/media/2022/03/shutterstock_176055518-1024x614.jpg"/>
      },
      {
        code:'FIN',
        name: 'Finland',
        info: 'Grass snake also known as the ringed snake or water snake, this non-venomous snake is semi-aquatic and can be found near water. It has a round head and eyes, and is black or dark brown with yellow dots behind its head. It mainly eats amphibians.',
        img: <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRI97MqLNzPST2XEJMN5ln16qMlaxohOR4EUaqot8gXurlC6Ljs"/>
      },
      {
        code:'DEU',
        name: 'Germany',
        info: 'Aesculapian snake(Zamenis longissimus) The largest native snake in Germany, growing up to 6.6 ft long. It has belly scales with light keels that help it climb. It is found in the southern Odenwald, the Taunus, and near Passau and Burghausen. The Aesculapian snake is endangered in Germany and has cultural and historical significance in ancient Greek, Roman, and Illyrian mythology.',
        img: <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRI5A5wopibZ_Y9FCNozKpAyVbqpXWF6ijCZDZJ_Q8kOfiCLq_U"/>
      },
      {
        code:'GRC',
        name: 'Greece',
        info: 'The Balkan whip snake is a species of snake in the family Colubridae. It is found in Italy, Greece and most of the Balkan countries where its natural habitats are Mediterranean-type shrubby vegetation, pastureland, plantations and rural gardens.',
        img: <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTfw0KypMft6QwJ-3z6IHVemaMjVXwlAww8G2Q_6vTXkLY_wdFT"/>
      },
      {
        code:'GRL',
        name: 'Greenland',
        info: 'While there are some snakes in Europe, no snake is native to Ireland, New Zealand, Iceland or Greenland',
        img: <img src=""/>
      },
      {
        code:'HKG',
        name: 'Hong Kong',
        info: 'Rhabdophis subminiatus, commonly called the red-necked keelback or red-necked keelback snake, is a species of venomous snake in the subfamily Natricinae of the family Colubridae. The species is endemic to Asia. Unusual for snakes, it is also poisonous.',
        img: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Rhabdophis_subminiatus-Red-necked_keelback.jpg/800px-Rhabdophis_subminiatus-Red-necked_keelback.jpg"/>
      },
      {
        code:'IND',
        name: 'India',
        info: 'The Indian python is a large python species native to tropical and subtropical regions of the Indian subcontinent and Southeast Asia. It is also known by the common names black-tailed python, Indian rock python, and Asian rock python.',
        img: <img src=""/>
      },
      {
        code:'ISL',
        name: 'Iceland',
        info: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pratik_jain_dahod_python.JPG/640px-Pratik_jain_dahod_python.JPG',
        img: <img src=""/>
      },
      {
        code:'IDN',
        name: 'Indonesia',
        info: 'Asian vine snake also known as Ahaetulla prasina, this snake has a wide distribution, extending from western to eastern Indonesia and originating in East Java',
        img: <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAi-XJWiY47GJi3CcjFI0LqvjP3DFCYStfWxAm2HFrd0Jf0_ED"/>
      },
      {
        code:'IRN',
        name: 'Iran',
        info: 'The Grass snake (Natrix natrix) is a Eurasian non-venomous colubrid snake. It is often found near water and feeds almost exclusively on amphibians.',
        img: <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/AEEpRPhABiWJigPNmHkd.webp"/>
      },
      {
        code:'IRQ',
        name: 'Iraq',
        info: 'The Yellow-bellied sea snake (Hydrophis platurus) is a venomous species of snake found in tropical oceanic waters around the world except for the Atlantic Ocean. It is one of the most widely distributed snakes in the world. Yellow-bellied sea snakes are fully adapted to living their whole lives at sea. They can uptake up to 33% of their oxygen requirements through the skin while diving and swimming at the surface of the water.',
        img: <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/hydrophis-platurus-118933110jpg.webp"/>
      },
      {
        code:'IRL',
        name: 'Ireland',
        info: 'The Irish Sea, though, proved too big an obstacle for the three British species of snake – grass snake, smooth snake and adder – that had made it to Britain, so Ireland remained snake-free. Another reptile did make it though, and is now Ireland only reptile: the common lizard.',
        img: <img src=""/>
      },
      {
        code:'ITA',
        name: 'Italy',
        info: 'Green whip snake one of the most common snakes in Italy, this snake is diurnal and heliophilous, meaning it only comes out on sunny days. It needs to reach a body temperature of 37°C to achieve its quick movements and reflexes',
        img: <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwmQyxWyRqbVnvBaytXMauSfB5-blgsSCUfFuEd5T5vIOQRMPY"/>
      },
      {
        code:'JPN',
        name: 'Japan',
        info: 'The mamushi goes by many names, including the Japanese moccasin, Japanese pit viper, Quichun snake, Salmusa, and Japanese mamushi. These snakes can be found all across Japan, although there is some debate as to whether they are currently found on the Ryukyu Islands. They are pale gray, reddish-brown, or yellow-brown with irregular splotches and evenly spaced banding down their backs. Their heads are generally dark brown with darker eyes and distinct pits, marking them as pit vipers.',
        img: <img src="https://a-z-animals.com/media/2022/03/shutterstock_797257303-1536x922.jpg"/>
      },
      {
        code:'KOR',
        name: 'Korea',
        info: 'Lycodon rufozonatus is a species of snake in the family Colubridae. The species is native to East Asia. It is medium-sized, nocturnal, and is considered non-venomous. Two subspecies are recognised, one of which, L. r. walli, is restricted to the Ryukyu Archipelago.',
        img: <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Asian_king_snake.jpeg"/>
      },
      {
        code:'MEX',
        name: 'Mexico',
        info: 'The common garter snake (Thamnophis sirtalis ) is a species of natricine snake, which is indigenous to North America and found widely across the continent. Most common garter snakes have a pattern of yellow stripes on a black, brown or green background, and their average total length (including tail) is about 55 cm (22 in), with a maximum total length of about 137 cm (54 in). The average body mass is 150 g (5.3 oz). Common garter snakes are the state reptile of Massachusetts.',
        img: <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/2560px-common-garter-snake-thamnophis-sirtalis-284691627191129.webp"/>
      },
      {
        code:'NPL',
        name: 'Nepal',
        info: 'Found in the Indian subcontinent, including Nepal, Bangladesh, and Sri Lanka, this species can be found up to 5,250 ft above sea level.',
        img: <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRZZxcqrjRNYCQuAEdufFcN3wcLl4XdvPBcDdUHoFSoumqNDHV"/>
      },
      {
        code:'NLD',
        name: 'Netherlands',
        info: 'There are three types of snake found in Netherlands: The viper, grass snake and smooth snake. The smooth snake is the rarest, and only the viper is venomous, also the chances of being bitten by a viper is very small.',
        img: <img src="https://birdwatchinghq.com/wp-content/uploads/2022/07/common-snakes-scaled-e1658860997879-1024x470.jpg"/>
      },
      {
        code:'PAK',
        name: 'Pakistan',
        info: 'Common sand boa, a non-venomous snake with a double-headed appearance that is native to Iran, Pakistan, and India. It lives in the dry parts of the Indian subcontinent.',
        img: <img src="https://i.pinimg.com/736x/e8/70/12/e87012f0f7e9e5a4c14029f650cd1bb1.jpg"/>
      },
      {
        code:'PHL',
        name: 'Philippines',
        info: 'The Philippine cobra also called Philippine spitting cobra or northern Philippine cobra, is a stocky, highly venomous species of spitting cobra native to the northern regions of the Philippines. The Philippine cobra is called ulupong in Tagalog, carasaen in Ilocano.',
        img: <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Naja_philippinensis.png"/>
      },
      {
        code:'RUS',
        name: 'Russia',
        info: 'Vipera kaznakovi, also known as the Caucasus viper, Kaznakow viper, Kaznakov viper, and by other common names, is a species of venomous snake in the subfamily Viperinae of the family Viperidae. The species is native to Turkey, Georgia, and Russia.There are no subspecies that are recognized as being valid.',
        img: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Vipera_kaznakovi_%285%29.jpg/1024px-Vipera_kaznakovi_%285%29.jpg"/>
      },
      {
        code:'SAU',
        name: 'Saudi Arabia',
        info: 'Echis carinatus, known as the saw-scaled viper, Indian saw-scaled viper, little Indian viper, and by other common names, is a viper species found in parts of the Middle East and Central Asia, and especially the Indian subcontinent.',
        img: <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Saw-scaled_Viper_%28Echis_carinatus%29_Photographed_By_Shantanu_Kuveskar.jpg"/>
      },
      {
        code:'ZAF',
        name: 'South africa',
        info: 'The Puff Adder looks inconspicuous but is responsible for the most fatalities in Africa, particularly southern Africa. With a blunt snout and remarkably well adapted colouration, most Puff Adder victims are those who unknowingly step on this formidable snake by accident.Instead of slithering away, the Puff Adder will remain in position and attack. With such sophisticated camouflage, this snake is rarely seen but when encountered, will puff itself up and hiss in a display of bravado.',
        img: <img src="https://media.discoverafrica.com/wp-content/uploads/2017/12/5_frightful_african_snakes_that_are_really_quite_beautiful_2.jpg?strip=all&lossy=1&ssl=1"/>
      },
      {
        code:'CHE',
        name: 'Switzerland',
        info: 'The Asp viper (Vipera aspis) is a venomous snake found in southwestern Europe. Bites from this species can be very painful and about 4% of all untreated bites are fatal.',
        img: <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/vgfFL8KXpvWJw9wbYHvS.webp"/>
      },
      {
        code:'LKA',
        name: 'Sri Lanka',
        info: 'The Brahminy blind snake (Indotyphlops braminus) is a nonvenomous blind snake species found mostly in Africa and Asia. It has also been introduced in many other parts of the world. They are completely fossorial (i.e., burrowing) animals, with habits and appearance similar to earthworms, for which they are often mistaken. The species is parthenogenetic and all known specimens have been female.',
        img: <img src="https://s3.animalia.bio/animals/photos/full/1.25x1/aqFVhP3Ftffy0Gwkt71w.webp"/>
      },
      {
        code:'GBR',
        name: 'United Kingdom',
        info: 'Smooth snake is greyish brown snake with a dark stripe down the side of its face. Smooth snakes are found only in the English counties of Dorset, Devon, Hampshire, Surrey, and West Sussex, and are a seriously threatened species. They are very shy and difficult to see.',
        img: <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Schlingnatter.jpg"/>
      },
      {
        code:'',
        name: '',
        info: '',
      },
  ];
  
  export default GlobeData;
  