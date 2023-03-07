import { useEffect, useRef, useState } from "react";
import Matches from "./components/Matches";
import "./App.css";
import lookup from 'country-code-lookup'
import { seedData, genGames } from "./logic_libs";
//adding the coutry wales and england
lookup.countries.push(

  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'Wales',
    capital: 'Pristina',
    fips: 'KV',
    iso2: 'GB-WLS',
    iso3: 'UNK',
    isoNo: null,
    internet: 'XK'
  },
  {
    continent: 'Europe',
    region: 'South East Europe',
    country: 'England',
    capital: 'Pristina',
    fips: 'KV',
    iso2: 'GB',
    iso3: 'UNK',
    isoNo: null,
    internet: 'XK'
  })

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
    <div className="min-h-screen p-12 m-auto bg-azure-300">
      <div className="flex flex-row border-blue-500 border-3 text-center mb-1">
        {groups.map((group) => (
          <button
            onClick={(e) => btn_group_click(e)}
            className={ `flex-1 rounded-md border-2 border-blue-200 ${isSelected(group) && "bg-blue-400 text-white"} `}
          >
            Group {group}
          </button>
        ))}
      </div>
      <table className="w-5/6 ">
        <thead>
          <tr className="">
            <th className="w-1/4  td-border">Team</th>
            <th className="w-1/12 td-border">Pts</th>
            <th className="w-1/12 td-border">GF</th>
            <th className="w-1/12 td-border">GA</th>
            <th className="w-1/12 td-border">+/-</th>
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
    <tr className={index < 2 ? "bg-green-400" : "bg-gray-300"}>
      <td className="border-4 border-blue-100 rounded-md p-2 radious">    <div style={{width:"50%",display:"inline-block"}}>{team}</div>
      <div style={{display:"inline"}}> <img className="HE3mn_" src={`https://flagcdn.com/w40/${ lookup.byCountry(team)?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2208.png?imwidth=64 2x
                            " alt="England" width="32px" />
                            </div> </td>
      <td className="border-4 border-blue-100 rounded-md radious ">{groupData.teams[team].goalsF}</td>
      <td className="border-4 border-blue-100 rounded-md radious">{groupData.teams[team].points}</td>
      <td className="border-4 border-blue-100 rounded-md radious ">{groupData.teams[team].goalsA}</td>
      <td className="border-4 border-blue-100 rounded-md radious">{groupData.teams[team].goalsD}</td>
    </tr>
  ));
}

export default App;
