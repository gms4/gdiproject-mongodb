//criando a coleção jogadores e inserindo jogadores nela
//inserindo jogadoras do cenário competitivo feminino de valorant
db.players.insertMany([
    //b4 angels
{
    name: "tayhuhu",
    country: "brasil",
    role: "iniciador",
    player_id: "f1"
},
{
    name: "isaa",
    country: "brasil",
    role: "flex",
    player_id: "f2"
},
{
    name: "celinett",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "f3"
},
{

    name: "shyz",
    country: "brasil",
    role: "flex",
    player_id: "f4"
},
{
    name: "shizue",
    country: "brasil",
    role: "controlador",
    player_id: "f5"
},
    //havan liberty
{
    
    name: "mittens",
    country: "brasil",
    role: "flex",
    player_id: "f6"
},
{
    name: "mel",
    country: "brasil",
    role: "iniciador",
    player_id: "f7"
},
{
    name: "hannabacon",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "f8"
},
{
    name: "sayuri",
    country: "brasil",
    role: "flex",
    player_id: "f9"
},
{
    name: "isa1",
    country: "brasil",
    role: "duelista/iniciador",
    player_id: "f10"
},
    //stars horizon
{
    name: "ori",
    country: "brasil",
    role: "iniciador",
    player_id: "f11"
},
{
    name: "blu",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "f12"
},
{
    name: "romi",
    country: "chile",
    role: "duelista",
    player_id: "f13"
},
{
    name: "mindle",
    country: "brasil",
    role: "flex",
    player_id: "f14"
},
{
    name: "kalita",
    country: "argentina",
    role: "controlador",
    player_id: "f15"
},
    //gamelanders purple
{
    name: "naxy",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "f16"
},
{
    name: "drn",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "f17"
},
{
    name: "bstrdd",
    country: "chile",
    role: "duelista",
    player_id: "f18"
},
{
    name: "daiki",
    country: "brasil",
    role: "iniciador",
    player_id: "f19"
},
{
    name: "nat1",
    country: "brasil",
    role: "flex",
    player_id: "f20"
},
    //keyd stars athenas
{
    name: "biazik",
    country: "brasil",
    role: "duelista",
    player_id: "f21"
},
{
    name: "larischz",
    country: "argentina",
    role: "sentinela/controlador",
    player_id: "f22"
},
{
    name: "isla",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "f23"
},
{
    name: "bagdal",
    country: "brasil",
    role: "iniciador",
    player_id: "f24"
},
{
    name: "antG",
    country: "brasil",
    role: "flex",
    player_id: "f25"
}
]);

////inserindo jogadores do cenário competitivo masculino de valorant
db.players.insertMany([
    //FVRIA esports
{
    name: "xand",
    country: "brasil",
    role: "duelista",
    player_id: "m1"
},
{
    name: "khalil",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "m2"
},
{
    name: "nozwerr",
    country: "argentina",
    role: "flex",
    player_id: "m3"
},
{
    name: "qck",
    country: "brasil",
    role: "flex",
    player_id: "m4"
},
{
    name: "mazin",
    country: "brasil",
    role: "flex",
    player_id: "m5"
},
    //vivo keyd
{
    name: "heat",
    country: "brasil",
    role: "duelista",
    player_id: "m6" 
},
{
    name: "mwzera",
    country: "brasil",
    role: "iniciador",
    player_id: "m7" 
},
{
    name: "jhow",
    country: "brasil",
    role: "sentinela/controlador",
    player_id: "m8"
},
{
    name: "murizzz",
    country: "brasil",
    role: "flex",
    player_id: "m9"
},
{
    name: "v1xen",
    country: "brasil",
    role: "controlador",
    player_id: "m10"
},
    //vikings
{
    name: "sacy",
    country: "brasil",
    role: "iniciador",
    player_id: "m11"
},
{
    name: "saadhak",
    country: "argentina",
    role: "sentinela/controlador",
    player_id: "m12"
},
{
    name: "gtnJESUS",
    country: "brasil",
    role: "duelista",
    player_id: "m13"
},
{
    name: "sutecas",
    country: "brasil",
    role: "controlador",
    player_id: "m14"
},
{
    name: "frz",
    country: "brasil",
    role: "flex",
    player_id: "m15"
}]);

//criando a coleção times e inserindo jogadores que já temos nela
db.times.insertOne(
    {
        name: "B4 Angels",
        coach: "Sonho",
        earnings: 19611,
        tournaments: 11,
        wins: 4,
        players: [
            db.players.findOne({name: "tayhuhu"})._id,
            db.players.findOne({name: "isaa"})._id,
            db.players.findOne({name: "celinett"})._id,
            db.players.findOne({name: "shyz"})._id,
            db.players.findOne({name: "shizue"})._id,
        ]
    }
)

db.times.insertOne(
    {
        name: "Havan Liberty",
        coach: "Marlow",
        earnings: 16748,
        tournaments: 24,
        wins: 3,
        players: [
            db.players.findOne({name: "mittens"})._id,
            db.players.findOne({name: "mel"})._id,
            db.players.findOne({name: "hannabacon"})._id,
            db.players.findOne({name: "sayuri"})._id,
            db.players.findOne({name: "isa1"})._id,
        ]
    }
)

db.times.insertOne(
    {
        name: "Stars Horizon Venus",
        coach: "Theo",
        earnings: 7856,
        tournaments: 17,
        wins: 1,
        players: [
            db.players.findOne({name: "ori"})._id,
            db.players.findOne({name: "blu"})._id,
            db.players.findOne({name: "romi"})._id,
            db.players.findOne({name: "mindle"})._id,
            db.players.findOne({name: "kalita"})._id,
        ]
    }
)

db.times.insertOne(
    {
        name: "Gamelanders Purple",
        coach: "Katraka",
        earnings: 35060,
        tournaments: 10,
        wins: 10,
        players: [
            db.players.findOne({name: "naxy"})._id,
            db.players.findOne({name: "drn"})._id,
            db.players.findOne({name: "bstrdd"})._id,
            db.players.findOne({name: "daiki"})._id,
            db.players.findOne({name: "nat1"})._id,
        ]
    }
)

db.times.insertOne(
    {
        name: "Keyd Stars Athenas",
        coach: "Zezao",
        earnings: 7838,
        tournaments: 10,
        wins: 0,
        players: [
            db.players.findOne({name: "biazik"})._id,
            db.players.findOne({name: "larischz"})._id,
            db.players.findOne({name: "isla"})._id,
            db.players.findOne({name: "bagdal"})._id,
            db.players.findOne({name: "antG"})._id,
        ]
    }
)

db.times.insertOne(
    {
        name: "Team Vikings",
        coach: "bzkA",
        earnings: 106110,
        tournaments: 30,
        wins: 6,
        players: [
            db.players.findOne({name: "sacy"})._id,
            db.players.findOne({name: "saadhak"})._id,
            db.players.findOne({name: "gtnJESUS"})._id,
            db.players.findOne({name: "sutecas"})._id,
            db.players.findOne({name: "frz"})._id,
        ]
    }
)

db.times.insertOne(
    {
        name: "Vivo Keyd",
        coach: "Koy",
        earnings: 45442,
        tournaments: 28,
        wins: 4,
        players: [
            db.players.findOne({name: "heat"})._id,
            db.players.findOne({name: "mwzera"})._id,
            db.players.findOne({name: "jhow"})._id,
            db.players.findOne({name: "murizzz"})._id,
            db.players.findOne({name: "v1xen"})._id,
        ]
    }
)

db.times.insertOne(
    {
        name: "FVRIA Esports",
        coach: "Carlao",
        earnings: 65677,
        tournaments: 16,
        wins: 5,
        players: [
            db.players.findOne({name: "xand"})._id,
            db.players.findOne({name: "khalil"})._id,
            db.players.findOne({name: "nozwerr"})._id,
            db.players.findOne({name: "qck"})._id,
            db.players.findOne({name: "mazin"})._id,
        ]
    }
)