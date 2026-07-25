// DỮ LIỆU MẪU CÁC ĐỘI BÓNG VÀ CẦU THỦ (Lưu tại js/doihinh.js)

const allTeamsData = [
    { id: "mexico", name: "Mexico", logo: "https://flagcdn.com/w40/mx.png", coach: "Jaime Lozano", formation: "4-3-3" },
    { id: "nam-phi", name: "Nam Phi", logo: "https://flagcdn.com/w40/za.png", coach: "Hugo Broos", formation: "4-2-3-1" },
    { id: "canada", name: "Canada", logo: "https://flagcdn.com/w40/ca.png", coach: "Jesse Marsch", formation: "3-5-2" },
    { id: "bosnia", name: "Bosnia & Herzegovina", logo: "https://flagcdn.com/w40/ba.png", coach: "Savo Milošević", formation: "4-2-3-1" },
    { id: "my", name: "Mỹ", logo: "https://flagcdn.com/w40/us.png", coach: "Gregg Berhalter", formation: "4-3-3" },
    { id: "paraguay", name: "Paraguay", logo: "https://flagcdn.com/w40/py.png", coach: "Daniel Garnero", formation: "4-4-2" },
    { id: "qatar", name: "Qatar", logo: "https://flagcdn.com/w40/qa.png", coach: "Tintín Márquez", formation: "3-5-2" },
    { id: "thuy-si", name: "Thụy Sĩ", logo: "https://flagcdn.com/w40/ch.png", coach: "Murat Yakin", formation: "3-4-2-1" },
    { id: "brazil", name: "Brazil", logo: "https://flagcdn.com/w40/br.png", coach: "Dorival Júnior", formation: "4-2-3-1" },
    { id: "morocco", name: "Morocco", logo: "https://flagcdn.com/w40/ma.png", coach: "Walid Regragui", formation: "4-1-4-1" },
    { id: "haiti", name: "Haiti", logo: "https://flagcdn.com/w40/ht.png", coach: "Gabriel Calderón", formation: "4-3-3" },
    { id: "scotland", name: "Scotland", logo: "https://flagcdn.com/w40/gb-sct.png", coach: "Steve Clarke", formation: "3-4-2-1" },
    { id: "australia", name: "Australia", logo: "https://flagcdn.com/w40/au.png", coach: "Graham Arnold", formation: "4-2-3-1" },
    { id: "tho-nhi-ky", name: "Thổ Nhĩ Kỳ", logo: "https://flagcdn.com/w40/tr.png", coach: "Vincenzo Montella", formation: "4-2-3-1" }
];

const individualPlayersProfile = {
    "Luis Malagón": {
        "teamId": "mexico",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Club América",
        "nation": "Mexico",
        "dob": "02/03/1997",
        "height": "181 cm",
        "weight": "80 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/LuisMalagon.webp"
    },

    "César Montes": {
        "teamId": "mexico",
        "number": "3",
        "pos": "Hậu vệ (DF)",
        "club": "Lokomotiv Moscow",
        "nation": "Mexico",
        "dob": "24/02/1997",
        "height": "195 cm",
        "weight": "82 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/CesarMontes.jpg"
    },
        "Edson Álvarez": {
        "teamId": "mexico",
        "number": "4",
        "pos": "Tiền vệ (MF)",
        "club": "West Ham",
        "nation": "Mexico",
        "dob": "24/10/1997",
        "height": "187 cm",
        "weight": "80 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/EdsonAlvarez.webp"
    },
        "Santiago Giménez": {
        "teamId": "mexico",
        "number": "11",
        "pos": "Tiền đạo (FW)",
        "club": "Feyenoord",
        "nation": "Mexico",
        "dob": "18/04/2001",
        "height": "182 cm",
        "weight": "79 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/SantiagoGimenez.jpg"
    },
        "Ronwen Williams": {
        "teamId": "nam-phi",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Mamelodi Sundowns",
        "nation": "Nam Phi",
        "dob": "21/01/1992",
        "height": "184 cm",
        "weight": "78 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/RonwenWilliams.jpg"
    },
        "Khuliso Mudau": {
        "teamId": "nam-phi",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Mamelodi Sundowns",
        "nation": "Nam Phi",
        "dob": "26/04/1995",
        "height": "178 cm",
        "weight": "72 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/KhulisoMudau.jpg"
    },
        "Teboho Mokoena": {
        "teamId": "nam-phi",
        "number": "8",
        "pos": "Tiền vệ (MF)",
        "club": "Mamelodi Sundowns",
        "nation": "Nam Phi",
        "dob": "24/01/1997",
        "height": "176 cm",
        "weight": "70 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/TebohoMokoena.webp"
    },
        "Themba Zwane": {
        "teamId": "nam-phi",
        "number": "10",
        "pos": "Tiền đạo (FW)",
        "club": "Mamelodi Sundowns",
        "nation": "Nam Phi",
        "dob": "03/08/1989",
        "height": "170 cm",
        "weight": "65 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/ThembaZwane.webp"
    },
        "Maxime Crépeau": {
        "teamId": "canada",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Portland Timbers",
        "nation": "Canada",
        "dob": "11/04/1994",
        "height": "185 cm",
        "weight": "88 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/MaximeCrepeau.jpg"
    },
        "Alistair Johnston": {
        "teamId": "canada",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Celtic",
        "nation": "Canada",
        "dob": "08/10/1998",
        "height": "180 cm",
        "weight": "77 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/AlistairJohnston.jpg"
    },
        "Ismaël Koné": {
        "teamId": "canada",
        "number": "8",
        "pos": "Tiền vệ (MF)",
        "club": "Marseille",
        "nation": "Canada",
        "dob": "16/06/2002",
        "height": "188 cm",
        "weight": "76 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/IsmaelKone.jpg"
    },
        "Tajon Buchanan": {
        "teamId": "canada",
        "number": "11",
        "pos": "Tiền đạo (FW)",
        "club": "Inter Milan",
        "nation": "Canada",
        "dob": "08/02/1999",
        "height": "183 cm",
        "weight": "68 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/TajonBuchanan.webp"
    },
        "Nikola Vasilj": {
        "teamId": "bosnia",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "St. Pauli",
        "nation": "Bosnia & Herzegovina",
        "dob": "13/06/1995",
        "height": "193 cm",
        "weight": "88 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/NikolaVasilj.jpg"
    },
        "Jusuf Gazibegović": {
        "teamId": "bosnia",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Sturm Graz",
        "nation": "Bosnia & Herzegovina",
        "dob": "11/03/2000",
        "height": "175 cm",
        "weight": "69 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/JusufGazibegovic.jpg"
    },
        "Rade Krunić": {
        "teamId": "bosnia",
        "number": "8",
        "pos": "Tiền vệ (MF)",
        "club": "Red Star Belgrade",
        "nation": "Bosnia & Herzegovina",
        "dob": "07/10/1993",
        "height": "184 cm",
        "weight": "74 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/RadeKrunic.jpg"
    },
        "Edin Džeko": {
        "teamId": "bosnia",
        "number": "11",
        "pos": "Tiền đạo (FW)",
        "club": "Fenerbahçe",
        "nation": "Bosnia & Herzegovina",
        "dob": "17/03/1986",
        "height": "193 cm",
        "weight": "84 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/EdinDzeko.jpg"
    },
    "Matt Turner": {
        "teamId": "my",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Crystal Palace",
        "nation": "Mỹ",
        "dob": "24/06/1994",
        "height": "191 cm",
        "weight": "79 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/MattTurner.jpg"
    },
    "Sergiño Dest": {
        "teamId": "my",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "PSV Eindhoven",
        "nation": "Mỹ",
        "dob": "03/11/2000",
        "height": "175 cm",
        "weight": "62 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/SerginoDest.jpg"
    },
    "Weston McKennie": {
        "teamId": "my",
        "number": "8",
        "pos": "Tiền vệ (MF)",
        "club": "Juventus",
        "nation": "Mỹ",
        "dob": "28/08/1998",
        "height": "185 cm",
        "weight": "84 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/WestonMcKennie.jpg"
    },
    "Christian Pulisic": {
        "teamId": "my",
        "number": "10",
        "pos": "Tiền đạo (FW)",
        "club": "AC Milan",
        "nation": "Mỹ",
        "dob": "18/09/1998",
        "height": "177 cm",
        "weight": "73 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/ChristianPulisic.jpg"
    },
    "Carlos Coronel": {
        "teamId": "paraguay",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "New York Red Bulls",
        "nation": "Paraguay",
        "dob": "29/12/1996",
        "height": "189 cm",
        "weight": "85 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/CarlosCoronel.jpg"
    },
    "Gustavo Velázquez": {
        "teamId": "paraguay",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Newell's Old Boys",
        "nation": "Paraguay",
        "dob": "17/04/1991",
        "height": "181 cm",
        "weight": "76 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/GustavoVelazquez.jpg"
    },
    "Andrés Cubas": {
        "teamId": "paraguay",
        "number": "6",
        "pos": "Tiền vệ (MF)",
        "club": "Vancouver Whitecaps",
        "nation": "Paraguay",
        "dob": "22/05/1996",
        "height": "163 cm",
        "weight": "60 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/AndresCubas.jpg"
    },
    "Miguel Almirón": {
        "teamId": "paraguay",
        "number": "10",
        "pos": "Tiền đạo (FW)",
        "club": "Newcastle United",
        "nation": "Paraguay",
        "dob": "10/02/1994",
        "height": "174 cm",
        "weight": "67 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/MiguelAlmiron.jpg"
    },
    "Meshaal Barsham": {
        "teamId": "qatar",
        "number": "22",
        "pos": "Thủ môn (GK)",
        "club": "Al Sadd",
        "nation": "Qatar",
        "dob": "14/02/1998",
        "height": "180 cm",
        "weight": "72 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/MeshaalBarsham.jpg"
    },
    "Ro-Ro": {
        "teamId": "qatar",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Al Sadd",
        "nation": "Qatar",
        "dob": "06/08/1990",
        "height": "181 cm",
        "weight": "79 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/RoRo.jpg"
    },
    "Assim Madibo": {
        "teamId": "qatar",
        "number": "6",
        "pos": "Tiền vệ (MF)",
        "club": "Al-Duhail",
        "nation": "Qatar",
        "dob": "22/10/1996",
        "height": "168 cm",
        "weight": "65 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/AssimMadibo.jpg"
    },
    "Akram Afif": {
        "teamId": "qatar",
        "number": "11",
        "pos": "Tiền đạo (FW)",
        "club": "Al Sadd",
        "nation": "Qatar",
        "dob": "18/11/1996",
        "height": "177 cm",
        "weight": "69 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/AkramAfif.jpg"
    },
    "Yann Sommer": {
        "teamId": "thuy-si",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Inter Milan",
        "nation": "Thụy Sĩ",
        "dob": "17/12/1988",
        "height": "183 cm",
        "weight": "79 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/YannSommer.jpg"
    },
    "Manuel Akanji": {
        "teamId": "thuy-si",
        "number": "5",
        "pos": "Hậu vệ (DF)",
        "club": "Man City",
        "nation": "Thụy Sĩ",
        "dob": "19/07/1995",
        "height": "187 cm",
        "weight": "85 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/ManuelAkanji.jpg"
    },
    "Granit Xhaka": {
        "teamId": "thuy-si",
        "number": "10",
        "pos": "Tiền vệ (MF)",
        "club": "Bayer Leverkusen",
        "nation": "Thụy Sĩ",
        "dob": "27/09/1992",
        "height": "186 cm",
        "weight": "80 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/GranitXhaka.jpg"
    },
    "Xherdan Shaqiri": {
        "teamId": "thuy-si",
        "number": "23",
        "pos": "Tiền đạo (FW)",
        "club": "Basel",
        "nation": "Thụy Sĩ",
        "dob": "10/10/1991",
        "height": "169 cm",
        "weight": "72 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/XherdanShaqiri.jpg"
    },
    "Alisson Becker": {
        "teamId": "brazil",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Liverpool",
        "nation": "Brazil",
        "dob": "02/10/1992",
        "height": "191 cm",
        "weight": "91 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/AlissonBecker.jpg"
    },
    "Danilo": {
        "teamId": "brazil",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Juventus",
        "nation": "Brazil",
        "dob": "15/07/1991",
        "height": "184 cm",
        "weight": "78 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/Danilo.jpg"
    },
    "Bruno Guimarães": {
        "teamId": "brazil",
        "number": "5",
        "pos": "Tiền vệ (MF)",
        "club": "Newcastle United",
        "nation": "Brazil",
        "dob": "16/11/1997",
        "height": "182 cm",
        "weight": "74 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/BrunoGuimaraes.jpg"
    },
    "Rodrygo": {
        "teamId": "brazil",
        "number": "10",
        "pos": "Tiền đạo (FW)",
        "club": "Real Madrid",
        "nation": "Brazil",
        "dob": "09/01/2001",
        "height": "174 cm",
        "weight": "64 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/Rodrygo.jpg"
    },
    "Yassine Bounou": {
        "teamId": "morocco",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Al-Hilal",
        "nation": "Morocco",
        "dob": "05/04/1991",
        "height": "192 cm",
        "weight": "78 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/YassineBounou.jpg"
    },
    "Achraf Hakimi": {
        "teamId": "morocco",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "PSG",
        "nation": "Morocco",
        "dob": "04/11/1998",
        "height": "181 cm",
        "weight": "73 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/AchrafHakimi.jpg"
    },
    "Sofyan Amrabat": {
        "teamId": "morocco",
        "number": "4",
        "pos": "Tiền vệ (MF)",
        "club": "Fenerbahçe",
        "nation": "Morocco",
        "dob": "21/08/1996",
        "height": "185 cm",
        "weight": "76 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/SofyanAmrabat.jpg"
    },
    "Youssef En-Nesyri": {
        "teamId": "morocco",
        "number": "19",
        "pos": "Tiền đạo (FW)",
        "club": "Fenerbahçe",
        "nation": "Morocco",
        "dob": "01/06/1997",
        "height": "188 cm",
        "weight": "78 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/YoussefEnNesyri.jpg"
    },
    "Johny Placide": {
        "teamId": "haiti",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Bastia",
        "nation": "Haiti",
        "dob": "29/01/1988",
        "height": "181 cm",
        "weight": "79 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/JohnyPlacide.jpg"
    },
     "Carlens Arcus": {
        "teamId": "haiti",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Vitesse",
        "nation": "Haiti",
        "dob": "28/06/1996",
        "height": "180 cm",
        "weight": "74 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/CarlensArcus.jpg"
    },
    "Bryan Alceus": {
        "teamId": "haiti",
        "number": "6",
        "pos": "Tiền vệ (MF)",
        "club": "Doxa Katokopias",
        "nation": "Haiti",
        "dob": "21/03/1996",
        "height": "175 cm",
        "weight": "71 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/BryanAlceus.jpg"
    },
    "Duckens Nazon": {
        "teamId": "haiti",
        "number": "9",
        "pos": "Tiền đạo (FW)",
        "club": "Kayserispor",
        "nation": "Haiti",
        "dob": "07/04/1994",
        "height": "181 cm",
        "weight": "83 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/DuckensNazon.jpg"
    },
    "Angus Gunn": {
        "teamId": "scotland",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Norwich City",
        "nation": "Scotland",
        "dob": "22/01/1996",
        "height": "196 cm",
        "weight": "83 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/AngusGunn.jpg"
    },
    "Anthony Ralston": {
        "teamId": "scotland",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Celtic",
        "nation": "Scotland",
        "dob": "16/11/1998",
        "height": "178 cm",
        "weight": "75 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/AnthonyRalston.jpg"
    },
    "Scott McTominay": {
        "teamId": "scotland",
        "number": "4",
        "pos": "Tiền vệ (MF)",
        "club": "Napoli",
        "nation": "Scotland",
        "dob": "08/12/1996",
        "height": "193 cm",
        "weight": "88 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/ScottMcTominay.jpg"
    },
    "Che Adams": {
        "teamId": "scotland",
        "number": "10",
        "pos": "Tiền đạo (FW)",
        "club": "Torino",
        "nation": "Scotland",
        "dob": "13/07/1996",
        "height": "175 cm",
        "weight": "70 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/CheAdams.jpg"
    },
    "Mathew Ryan": {
        "teamId": "australia",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "AS Roma",
        "nation": "Australia",
        "dob": "08/04/1992",
        "height": "184 cm",
        "weight": "82 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/MathewRyan.jpg"
    },
    "Gethin Jones": {
        "teamId": "australia",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "Bolton Wanderers",
        "nation": "Australia",
        "dob": "13/10/1995",
        "height": "180 cm",
        "weight": "76 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/GethinJones.jpg"
    },
    "Keanu Baccus": {
        "teamId": "australia",
        "number": "8",
        "pos": "Tiền vệ (MF)",
        "club": "Kortrijk",
        "nation": "Australia",
        "dob": "07/06/1998",
        "height": "177 cm",
        "weight": "70 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/KeanuBaccus.jpg"
    },
    "Craig Goodwin": {
        "teamId": "australia",
        "number": "23",
        "pos": "Tiền đạo (FW)",
        "club": "Al-Wehda",
        "nation": "Australia",
        "dob": "16/12/1991",
        "height": "173 cm",
        "weight": "70 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/CraigGoodwin.jpg"
    },
    "Mert Günok": {
        "teamId": "tho-nhi-ky",
        "number": "1",
        "pos": "Thủ môn (GK)",
        "club": "Beşiktaş",
        "nation": "Thổ Nhĩ Kỳ",
        "dob": "01/03/1989",
        "height": "196 cm",
        "weight": "92 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "0/0",
        "img": "imgcauthu/MertGunok.jpg"
    },
    "Zeki Çelik": {
        "teamId": "tho-nhi-ky",
        "number": "2",
        "pos": "Hậu vệ (DF)",
        "club": "AS Roma",
        "nation": "Thổ Nhĩ Kỳ",
        "dob": "17/02/1997",
        "height": "180 cm",
        "weight": "78 kg",
        "match": 15,
        "goals": 0,
        "assists": 0,
        "cards": "1/0",
        "img": "imgcauthu/ZekiCelik.jpg"
    },
    "Hakan Çalhanoğlu": {
        "teamId": "tho-nhi-ky",
        "number": "10",
        "pos": "Tiền vệ (MF)",
        "club": "Inter Milan",
        "nation": "Thổ Nhĩ Kỳ",
        "dob": "08/02/1994",
        "height": "178 cm",
        "weight": "76 kg",
        "match": 15,
        "goals": 1,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/HakanCalhanoglu.jpg"
    },
    "Arda Güler": {
        "teamId": "tho-nhi-ky",
        "number": "8",
        "pos": "Tiền đạo (FW)",
        "club": "Real Madrid",
        "nation": "Thổ Nhĩ Kỳ",
        "dob": "25/02/2005",
        "height": "175 cm",
        "weight": "69 kg",
        "match": 15,
        "goals": 4,
        "assists": 3,
        "cards": "0/0",
        "img": "imgcauthu/ArdaGuler.jpg"
    },
};

let currentSelectedTeamId = ""; // Biến lưu đội bóng đang xem hiện tại

// PHẦN 1: CÁC HÀM XỬ LÝ CHO TRANG ĐỘI HÌNH (SQUAD)

// Hàm tải danh sách toàn bộ đội bóng
function loadSquad() {
    const grid = document.getElementById('squad-grid');
    if (!grid) return;

    grid.innerHTML = allTeamsData.map(team => `
        <div class="team-card" style="cursor:pointer; padding:15px; border:1px solid #ddd; margin:10px; border-radius:8px;" 
             onclick="loadPage('chitietdoihinh', '${team.id}')">
            <img src="${team.logo}" alt="${team.name}" style="width:50px; height:auto; margin-bottom:10px;"><br>
            <strong>${team.name}</strong>
        </div>
    `).join('');
}

// Hàm tải chi tiết đội hình của một đội bóng cụ thể khi click vào
function loadSquadDetail(teamId) {
    currentSelectedTeamId = teamId;
    const team = allTeamsData.find(t => t.id === teamId);
    if (!team) return;

    // Hiển thị tên đội, logo, HLV và sơ đồ lên giao diện chi tiết
    const teamNameEl = document.getElementById('team-name');
    const teamLogoEl = document.getElementById('team-logo');
    const teamCoachEl = document.getElementById('team-coach');
    const teamFormationEl = document.getElementById('team-formation');

    if (teamNameEl) teamNameEl.innerText = team.name;
    if (teamLogoEl) teamLogoEl.src = team.logo;
    if (teamCoachEl) teamCoachEl.innerText = team.coach || "Đang cập nhật";
    if (teamFormationEl) teamFormationEl.innerText = team.formation || "Đang cập nhật";

    // Lọc ra danh sách cầu thủ thuộc đội bóng này để chia vị trí
    const playersOfTeam = Object.keys(individualPlayersProfile)
        .filter(name => individualPlayersProfile[name].teamId === teamId)
        .map(name => ({ name, ...individualPlayersProfile[name] }));

    const gk = playersOfTeam.filter(p => p.pos.includes("GK"));
    const df = playersOfTeam.filter(p => p.pos.includes("DF"));
    const mf = playersOfTeam.filter(p => p.pos.includes("MF"));
    const fw = playersOfTeam.filter(p => p.pos.includes("FW"));

    // Điền thẻ cầu thủ vào các ô tương ứng trên trang chi tiết đội hình
    fillPlayerList('list-gk', gk, 'Thủ môn (GK)');
    fillPlayerList('list-df', df, 'Hậu vệ (DF)');
    fillPlayerList('list-mf', mf, 'Tiền vệ (MF)');
    fillPlayerList('list-fw', fw, 'Tiền đạo (FW)');
}

// Hàm bổ trợ vẽ thẻ cầu thủ cho trang Đội hình (Đã mã hóa an toàn)
function fillPlayerList(elementId, playerArray, positionLabel) {
    const listEl = document.getElementById(elementId);
    if (!listEl) return;
    
    if (!playerArray || playerArray.length === 0) { 
        listEl.innerHTML = "<p style='color:#999; padding:10px;'>Đang cập nhật...</p>"; 
        return; 
    }

    listEl.innerHTML = playerArray.map(player => {
        const paramData = encodeURIComponent(`${player.name}|${currentSelectedTeamId}|${positionLabel}`);
        return `
            <div class="player-card" style="cursor: pointer;" onclick="loadPage('chitietcauthu', '${paramData}')">
                <img class="player-image" src="${player.img}" alt="${player.name}">
                <div class="player-number">${player.number}</div>
                <div class="player-info">
                    <h4>${player.name}</h4>
                    <p>${player.club}</p>
                </div>
            </div>
        `;
    }).join('');
}

// =========================================================================
// PHẦN 2: CÁC HÀM XỬ LÝ CHO TRANG CẦU THỦ TỔNG HỢP VÀ CHI TIẾT CẦU THỦ
// =========================================================================

// Hàm kích hoạt từ main.js khi người dùng click vào tab "Cầu thủ" trên Menu
function loadCauthu() {
    renderAllPlayersPage();
}

// Hàm tự động phân loại theo vị trí ở trang danh sách Cầu Thủ Tổng Hợp
function renderAllPlayersPage() {
    const gkContainer = document.getElementById('all-list-gk');
    const dfContainer = document.getElementById('all-list-df');
    const mfContainer = document.getElementById('all-list-mf');
    const fwContainer = document.getElementById('all-list-fw');

    if (!gkContainer || !dfContainer || !mfContainer || !fwContainer) return;

    const groups = { gk: [], df: [], mf: [], fw: [] };

    Object.keys(individualPlayersProfile).forEach(name => {
        const player = individualPlayersProfile[name];
        const posText = player.pos.toUpperCase();

        if (posText.includes("GK") || posText.includes("THỦ MÔN")) groups.gk.push({ name, ...player });
        else if (posText.includes("DF") || posText.includes("HẬU VỆ")) groups.df.push({ name, ...player });
        else if (posText.includes("MF") || posText.includes("TIỀN VỆ")) groups.mf.push({ name, ...player });
        else if (posText.includes("FW") || posText.includes("TIỀN ĐẠO")) groups.fw.push({ name, ...player });
    });

    const buildCardsHTML = (container, playersList) => {
        if (playersList.length === 0) {
            container.innerHTML = "<p style='color:#999; padding: 10px; grid-column: 1/-1;'>Đang cập nhật cầu thủ...</p>";
            return;
        }
        container.innerHTML = playersList.map(player => {
            const teamInfo = allTeamsData.find(t => t.id === player.teamId);
            const paramData = encodeURIComponent(`${player.name}|${player.teamId}|${player.pos}`);
            return `
                <div class="player-card" style="cursor: pointer;" onclick="loadPage('chitietcauthu', '${paramData}')">
                    <img class="player-image" src="${player.img}" alt="${player.name}">
                    <div class="player-number">${player.number}</div>
                    <div class="player-info">
                        <h4>${player.name}</h4>
                        <p>${player.club} (${teamInfo ? teamInfo.name : 'Đội tuyển'})</p>
                    </div>
                </div>
            `;
        }).join('');
    };

    buildCardsHTML(gkContainer, groups.gk);
    buildCardsHTML(dfContainer, groups.df);
    buildCardsHTML(mfContainer, groups.mf);
    buildCardsHTML(fwContainer, groups.fw);
}

// Hàm xử lý đổ dữ liệu ra trang tiểu sử chi tiết cầu thủ (chitietcauthu)
function loadPlayerDetail(paramString) {
    if (!paramString) return;
    
    const decodedParam = decodeURIComponent(paramString);
    const [playerName, teamId, positionFallback] = decodedParam.split('|');
    
    const dbPlayer = individualPlayersProfile[playerName];
    const teamInfo = allTeamsData.find(t => t.id === teamId);

    const nameEl = document.getElementById("player-profile-name");
    const logoEl = document.getElementById("player-profile-team-logo");
    if (nameEl) nameEl.innerText = playerName;
    if (logoEl) logoEl.src = teamInfo ? teamInfo.logo : "";

    if (dbPlayer) {
        if(document.getElementById("player-profile-img")) document.getElementById("player-profile-img").src = dbPlayer.img;
        if(document.getElementById("player-profile-number")) document.getElementById("player-profile-number").innerText = dbPlayer.number;
        if(document.getElementById("player-profile-position")) document.getElementById("player-profile-position").innerText = `Vị trí: ${dbPlayer.pos}`;
        if(document.getElementById("player-profile-club")) document.getElementById("player-profile-club").innerText = dbPlayer.club;
        
        if(document.getElementById("p-bio-nation")) document.getElementById("p-bio-nation").innerText = dbPlayer.nation;
        if(document.getElementById("p-bio-dob")) document.getElementById("p-bio-dob").innerText = dbPlayer.dob;
        if(document.getElementById("p-bio-height")) document.getElementById("p-bio-height").innerText = dbPlayer.height;
        if(document.getElementById("p-bio-weight")) document.getElementById("p-bio-weight").innerText = dbPlayer.weight;

        if(document.getElementById("p-stat-match")) document.getElementById("p-stat-match").innerText = dbPlayer.match;
        if(document.getElementById("p-stat-goals")) document.getElementById("p-stat-goals").innerText = dbPlayer.goals;
        if(document.getElementById("p-stat-assists")) document.getElementById("p-stat-assists").innerText = dbPlayer.assists;
        if(document.getElementById("p-stat-cards")) document.getElementById("p-stat-cards").innerText = dbPlayer.cards;
    }
}