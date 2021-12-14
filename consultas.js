/* 
1. USE
2. FIND (OK)
3. SIZE
4. AGGREGATE (OK)
5. MATCH (OK)
6. PROJECT
7. GTE (OK)
8. GROUP (OK)
9. SUM (OK)
10. COUNT (OK)
11. MAX
12. AVG
13. EXISTS
14. SORT (OK)
15. LIMIT
16. $WHERE
17. MAPREDUCE
18. FUNCTION
19. PRETTY (OK)
20. ALL
21. SET (OK)
22. TEXT
23. SEARCH
24. FILTER
25. UPDATE
26. SAVE
27. RENAMECOLLECTION (OK)
28. COND
29. LOOKUP (OK)
30. FINDONE (OK)
31. ADDTOSET 
*/

//FIND: retorna todos os times que estão no banco de dados
db.times.find();

//FINDONE: retorna um(a) jogador(a) brasileiro(a)
db.players.findOne({country: "brasil"});

//COUNT: retorna a quantidade de jogadores no banco de dados
db.players.count();

//PRETTY: retorna um campeonato que foi hosteado por Rakin
db.championship.find({host: "Rakin"}).pretty();

//SET: trocando o nome do campeonato COPA RAKIN para COPA RAKIN SEASON 2
db.championship.updateOne({name: "Copa Rakin"}, {$set:{"name": "Copa Rakin Season 2"}});

//SORT: ordenando os times por quantidade de vitorias
db.times.find();
db.times.find().sort({wins: -1});

//RENAMECOLLECTION: mudando o nome da coleção TIMES para TEAMS 
db.times.renameCollection("teams");

//MATCH e AGGREGATE: listar o campeonato que foi hosteado por leticia motta e comentado por tixinha
db.championship.aggregate([
    {
        $match: {
            host: {$lt: "Leticia Motta"}
        },
    }
]);

//GROUP e SUM: lista todos os times e suas vitórias em campeonatos
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

//GTE: retorna todos os jogadores que possuem função sentinela/controlador
db.players.find({role: {$gte: "sentinela/controlador"}});

//LOOKUP e LIMIT: lista 5 jogadores

//