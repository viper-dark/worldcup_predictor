import { teams, predictions } from "./teams";
import { Group, Team } from "./interfaces";
//import prompt from "prompt";
//seeding the the group with the teams
export const seedData = () => {
  let groups: Array<Group> = [];
  teams.forEach((arr) => {
    const arrObj = arr.map((e) => {
      return { [e]: { points: 0, goalsF: 0, goalsA: 0, goalsD: 0 } };
    });
    const obj = {};
    for (const ob of arrObj) {
      const key = Object.keys(ob)[0];
      obj[key] = ob[key];
    }
    const group: Group = {
      teams: obj,
      ranking: [...arr],
    };
    groups.push(group);
  });
  return groups;
};

export const genGames = (group: Group): Array<String[]> => {
  const matches = [];
  for (let i = 0; i < 3; i++) {
    for (let l = i + 1; l < 4; l++) {
      matches.push([group.ranking[i], group.ranking[l]]);
    }
  }
  return matches;
};
let data = [];
const recordResultsPromt = async () => {
  const groups = seedData();
  data = groups;
  for (let index = 0; index < groups.length; index++) {
    const group: Group = groups[index];
    const matches = genGames(group);
    console.info(`group ${index + 1} matches`);
    console.info(`****************************`);
    console.info(
      `insert the the result seperated by "-" like this i.e 3-1  0-0 etc`
    );
    let i = 0;
    for (const match of matches) {
      prompt.start();
      const [team1, team2] = match;
      console.info(`${team1} vs ${team2}`);
      // const { result } = await prompt.get(["result"]);
      const result = predictions[index][i];
      //recording the score and the points
      const [score1, score2] = result.split("-");
      if (score1 == score2) {
        group.teams[team1].points += 1;
        group.teams[team2].points += 1;
      } else if (score1 > score2) {
        group.teams[team1].points += 3;
      } else if (score1 < score2) {
        group.teams[team2].points += 3;
      }
      //team 1
      group.teams[team1].goalsF += Number(score1);
      group.teams[team1].goalsA += Number(score2);
      group.teams[team1].goalsD =
        group.teams[team1].goalsF - group.teams[team1].goalsA;
      //team 2
      group.teams[team2].goalsF += Number(score2);
      group.teams[team2].goalsA += Number(score1);
      group.teams[team2].goalsD =
        group.teams[team2].goalsF - group.teams[team2].goalsA;

      i++;
    }
    //sorting the group

    group.ranking.sort((a, b) => {
      const team1 = group.teams[a + ""];
      const team2 = group.teams[b + ""];
      if (team1.points == team2.points) {
        //checking Goal difference in all group matches;
        if (team1.goalsD !== team2.goalsD) {
          return team2.goalsD - team1.goalsD;
        }

        //checking Number of goals scored in all group matches;

        if (team1.goalsF !== team2.goalsF) {
          return team2.goalsF - team1.goalsF;
        }

        //#TODO
        //Points obtained in the matches played between the teams in question;

        return 0;
      } else {
        return team2.points - team1.points;
      }
    });
  }
};

export function recordResults(predictions, genedMatches) {
  const groups = seedData();

  for (let index = 0; index < groups.length; index++) {
    const group: Group = groups[index];
    const matches = genedMatches[index];

    let i = 0;
    for (const match of matches) {
      const [team1, team2] = match;
      console.info(`${team1} vs ${team2}`);
      // const { result } = await prompt.get(["result"]);
      //group index to to group char
      const groupChar = String.fromCharCode(index + 65);

      const result = predictions[groupChar][i];
      console.log(groupChar + "   " + i);
      console.log(result);
      //if the result is empty or incomplte continue;
      if (!(result[0] && result[1])) {
        i++;
        continue;
      }
      //recording the score and the points
      const [score1, score2] = [Number(result[0]), Number(result[1])];
      if (score1 == score2) {
        group.teams[team1].points += 1;
        group.teams[team2].points += 1;
      } else if (score1 > score2) {
        group.teams[team1].points += 3;
      } else if (score1 < score2) {
        group.teams[team2].points += 3;
      }
      //team 1
      group.teams[team1].goalsF += Number(score1);
      group.teams[team1].goalsA += Number(score2);
      group.teams[team1].goalsD =
        group.teams[team1].goalsF - group.teams[team1].goalsA;
      //team 2
      group.teams[team2].goalsF += Number(score2);
      group.teams[team2].goalsA += Number(score1);
      group.teams[team2].goalsD =
        group.teams[team2].goalsF - group.teams[team2].goalsA;

      i++;
    }
    //sorting the group

    group.ranking.sort((a, b) => {
      const team1 = group.teams[a + ""];
      const team2 = group.teams[b + ""];
      if (team1.points == team2.points) {
        //checking Goal difference in all group matches;
        if (team1.goalsD !== team2.goalsD) {
          return team2.goalsD - team1.goalsD;
        }

        //checking Number of goals scored in all group matches;

        if (team1.goalsF !== team2.goalsF) {
          return team2.goalsF - team1.goalsF;
        }

        //#TODO
        //Points obtained in the matches played between the teams in question;

        return 0;
      } else {
        return team2.points - team1.points;
      }
    });
  }

  return groups;
}

function genRound16(groups: Group[]) {
  const matches: Array<String>[] = [];
  for (let index = 0; index < groups.length; index += 2) {
    //winner group i vs runner up group i+1
    matches.push([groups[index].ranking[0], groups[index + 1].ranking[1]]);

    //winner group i+1 vs runner up group i
    matches.push([groups[index + 1].ranking[0], groups[index].ranking[1]]);
  }
  return matches;
}
/* recordResults().then((e) => {
  console.log(data);
  data.forEach((e) => console.group(e));
  console.log("**************************************");
  console.log("Round of 16 matches");
  console.log("**************************************");
  genRound16(data).forEach((e) => console.info(`${e[0]} vs ${e[1]} `));
}); */
