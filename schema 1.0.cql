create keyspace scoreboard with replication={'class':'SimpleStrategy','replication_factor':3};
create table users(userid int primary key,firstname varchar,lastname varchar,Username varchar,PasswordHash varchar,EmailID varchar,Championships list<int>,subscriptions list<int>);
create table championships(championshipid int primary key,championship_name varchar,noofteams int,overstrike boolean,wide boolean,noob boolean,noofovers int,noofplayers int)
create table teams(teamid int primary key,championshipid int,teamname varchar)
create table players(playerid int primary key,teamid int,playername varchar);
create table matches(matchid int primary key,championshipid int,team1 varchar,team2 varchar,winner varchar,result varchar);
create table scores(ballid int primary key,matchid int,run int);
create table wickets(wicketid int primary key,
ballid int,bowler varchar,batsman varchar,support varchar);
