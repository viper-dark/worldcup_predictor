import { useEffect, useRef, useState } from "react";
import Matches from "./components/Matches";
import "./App.css";
import { seedData, genGames } from "./logic_libs";
const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

function App() {
  const [selectedGroup, setGroup] = useState("A");

  const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const [dataGroup, setDataGroup] = useState(seedData());
  const matchGens = useRef();
  const [go, setGO] = useState(false);
  useEffect(() => {
    matchGens.current = dataGroup.map((group) => genGames(group));
    setGO(true);
    console.log(matchGens.current);
  }, []);

  function btn_group_click(e): void {
    //   e.currentTarget.classList.toggle("bg-red-400");

    setGroup(e.currentTarget.innerText.at(-1));
  }

  function isSelected(group: string): Boolean {
    return selectedGroup === group;
  }
  if (!go) {
    return null;
  }
  return (
    <div className="p-12 m-auto bg-slate-500">
      <div className="flex flex-row border-blue-500 border-4 text-center">
        {groups.map((group) => (
          <button
            onClick={(e) => btn_group_click(e)}
            className={isSelected(group) ? "flex-1 bg-green-600" : "flex-1"}
          >
            Group {group}
          </button>
        ))}
      </div>
      <table className="w-5/6">
        <thead>
          <tr className="bg-violet-500 border-4">
            <th className="w-1/4">Team</th>
            <th className="w-1/12">Pts</th>
            <th className="w-1/12">GF</th>
            <th className="w-1/12">GA</th>
            <th className="w-1/12">+/-</th>
          </tr>
        </thead>
        <tbody className="">
          <Group group={selectedGroup} dataGroup={dataGroup} />
        </tbody>
      </table>
      <Matches
        group={selectedGroup}
        dataGroup={dataGroup}
        genedMatches={matchGens.current}
        modDataGroup={(state) => setDataGroup(state)}
      />
    </div>
  );
}

function Group({ group, dataGroup }) {
  //group letter to number
  const gIndex = group.charCodeAt(0) - 65;
  const groupData = dataGroup[gIndex];

  return groupData.ranking.map((team, index) => (
    <tr className={index < 2 ? "bg-green-400" : ""}>
      <td>{team}</td>
      <td>{groupData.teams[team].points}</td>
      <td>{groupData.teams[team].goalsF}</td>
      <td>{groupData.teams[team].goalsA}</td>
      <td>{groupData.teams[team].goalsD}</td>
    </tr>
  ));
}

export default App;
