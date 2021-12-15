//FIND: retorna todos os times que estão no banco de dados
db.times.find().pretty();

//FINDONE: retorna um(a) jogador(a) chileno(a)
db.players.findOne({country: "chile"});

//COUNT: retorna a quantidade de jogadores no banco de dados
db.players.count();

//PRETTY: retorna (de forma bonitinha) um campeonato que foi hosteado por Rakin
db.championship.find({host: "Rakin"}).pretty();

//SET: trocando o nome do campeonato COPA RAKIN para COPA RAKIN SEASON 2
db.championship.updateOne({name: "Copa Rakin"}, {$set:{"name": "Copa Rakin Season 2"}});

//SORT: ordenando os times por quantidade de vitorias. mostrando antes e depois
db.times.find().pretty();
db.times.find().sort({wins: -1}).pretty();

//RENAMECOLLECTION: mudando o nome da coleção TIMES para TEAMS 
db.times.renameCollection("teams");

//GROUP e SUM: agrupa todos os times e calcula a soma da vitória de todos
db.teams.aggregate([
    {
        $group: {
            _id: "$country",
            total_wins: {
                $sum: "$wins"
            }
        }
    }
]);

//GTE: retorna todos os campeonatos com premiação maior ou igual a 10000
db.championship.find({prize: {$gte: 10000}}).pretty();

//TEXT e SEARCH: lista todos os camponatos que possuem o nome VALORANT no nome
db.championship.createIndex({name: "text"});
db.championship.find({$text: {$search: "\"VALORANT\""}}).pretty();

//UNSET e EXISTS: Copa Rakin foi um evento sem fins lucrativos, então não teve premiação. vamos excluí-la e listá-la
db.championship.updateOne({name: "Copa Rakin Season 2"}, {$unset: {"prize": null}});
db.championship.find({prize: {$exists: false}}).pretty();

//SIZE: lista os campeonatos com 4 times
db.championship.find({teams:{$size: 4}}).pretty();

//AVG: retorna a media de ganhos acumulados dos times
db.teams.aggregate([
        {
            $group:
                {
                    _id: "$country",
                    avgEarnings: {$avg: "$earnings"}
                }
        }
    ]);

//MAX: retorna a maior quantidade de vitórias entre os times
db.teams.aggregate([
        {
            $group:
                {
                    _id: "$country",
                    most_victories: {$max: "$wins"},
                }
        }
    ]);

//MATCH: retorna todos os jogadores que são main duelista
db.players.aggregate({$match:{role: "duelista"}}).pretty();

//PROJECT e COND: classificando os times em SS (wins >= 5) e S (wins < 5) tier de acordo com a quantidade de vitórias
db.teams.aggregate([
    {
        $project:
         {
            _id: 0,
            name: 1,
            wins:
            {
                $cond: {if: {$gte: ["$wins", 5]}, then: "Tier SS", else: "Tier S"}
            } 
         }
    }
]);

//ALL: lista os campeonatos que possuem os times listados
db.championship.find({teams: {$all: [
    db.teams.findOne({name: "B4 Angels"})._id,
    db.teams.findOne({name: "Havan Liberty"})._id,
    db.teams.findOne({name: "Keyd Stars Athenas"})._id,
    db.teams.findOne({name: "Gamelanders Purple"})._id,
]}}).pretty();

//FILTER: (deveria) listar os patrocinadores que contribuiram com mais de 10000 dolares
//para o prêmio do campeonato

db.championship.aggregate([
    {
       $project: {
           _id: 0,
           name: 1,
           sponsor: {
             $filter: {
                input: "$sponsor",
                as: "sponsors_share",
                cond: { $gte: ["$$sponsor.prize_share", 10000]}
            }
          }
       }
    }
 ]);

//LOOKUP e LIMIT: lista 1 jogador e quais os times do seu país
db.players.aggregate([
    {
        $lookup: {
            from: "teams",
            localField: "country",
            foreignField: "country",
            as: "Teams from the player's country"
        }
    },
    {$limit: 1}
]).pretty();

//ADDTOSET e EACH: adicionando times masculinos na Copa Rakin Season 2
db.championship.updateMany({name: "Copa Rakin Season 2"}, {$addToSet:
    {
        teams:
        {
            $each:
            [
                db.teams.findOne({name: "Team Vikings"})._id,
                db.teams.findOne({name: "Vivo Keyd"})._id,
                db.teams.findOne({name: "FVRIA Esports"})._id
            ]
        }
    }   
});

//WHERE e FUNCTION: lista o campeonato de nome Copa Rakin Season 2
db.championship.find({$where: function() {
        return (this.name == "Copa Rakin Season 2")}
    }
).pretty();

//MAPREDUCE: criando duas funções, uma map e uma reduce, para listar os times e seus respectivos ganhos 
var mapFunction2 = function() {
    emit (this.name, this.earnings);
};

var reduceFunction2 = function(name, earnings) {
    return Array.sum(earnings);
};

db.teams.mapReduce (
    mapFunction2,
    reduceFunction2,
    { out: "mapReduce_ex"}
);

db.mapReduce_ex.find().sort({_id: 1});

/* 
1. USE (OK)
2. FIND (OK)
3. SIZE (OK)
4. AGGREGATE (OK)
5. MATCH (OK)
6. PROJECT (OK)
7. GTE (OK)
8. GROUP (OK)
9. SUM (OK)
10. COUNT (OK)
11. MAX (OK)
12. AVG (OK)
13. EXISTS (OK)
14. SORT (OK)
15. LIMIT (OK)
16. $WHERE (OK)
17. MAPREDUCE (OK)
18. FUNCTION (OK)
19. PRETTY (OK)
20. ALL (OK)
21. SET (OK)
22. TEXT (OK)
23. SEARCH (OK)
24. FILTER (OK)
25. UPDATE (OK)
26. SAVE (OK)
27. RENAMECOLLECTION (OK)
28. COND (OK)
29. LOOKUP (OK)
30. FINDONE (OK)
31. ADDTOSET (OK)
*/