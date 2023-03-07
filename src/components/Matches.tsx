import { useState } from "react";
import { Link } from "react-router-dom";
import { seedData, genGames, recordResults, genRound16 } from "../logic_libs";
import lookup from "country-code-lookup"

const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

function Matches({ group, dataGroup, genedMatches, modDataGroup }) {
  //group index
  const gIndex = group.charCodeAt(0) - 65;
  const groupData = dataGroup[gIndex];
  const matches = genedMatches[gIndex];
  const [results, setResults] = useState(initState());

  function initState() {
    const obj = {};
    groups.map((g) => (obj[g] = [0, 0, 0, 0, 0, 0].map((v) => ["", ""])));
    return obj;
  }

  function confirmHandeler(result) {
    const updatedData = recordResults(result, genedMatches);
    modDataGroup(updatedData);
  }
  function onChangeHandeler(index: number, i: Number, value: string) {
    {
      setResults((state) => {
        const result = Object.assign({}, state);
        result[group][index][i] = value;

        if (result[group][index][i == 0 ? 1 : 0]) {
          confirmHandeler(result);
        }
        return result;
      });
    }
  }

  return (
    <>
      {matches.map((match, index) => (
        <div
          key={index}
          id={"match" + group + index}
          className="mt-6 flex flex-row justify-end space-x-2"
        >
           <div className="w-24" style={{ display:"inline-block",marginRight: "-2em"}}>{match[0]}</div>
      <div style={{display:"inline"}}> <img className="HE3mn_" src={`https://flagcdn.com/w40/${ lookup.byCountry(match[0])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2208.png?imwidth=64 2x
                            " alt="England" width="32px" />
                            </div>
          <input
            className="w-8"
            value={results[group][index][0]}
            onChange={(e) => onChangeHandeler(index, 0, e.target.value)}
            type="number"
            id="tentacles"
            name={index + "-0"}
            min="0"
            max="100"
          ></input>
          <input
            className="w-8"
            type="number"
            id="tentacles"
            value={results[group][index][1]}
            name={index + "-1"}
            min="0"
            max="100"
            onChange={(e) => onChangeHandeler(index, 1, e.target.value)}
          ></input>
          
      <div style={{display:"inline"}}> <img className="HE3mn_" src={`https://flagcdn.com/w40/${ lookup.byCountry(match[1])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2208.png?imwidth=64 2x
                            " alt="England" width="32px" />
                            </div>
                            <div className="w-24" style={{ display:"inline-block" }}>{match[1]}</div>
        </div>
      ))}
      <Link
        className="bg-blue-400 rounded-lg p-4 text-white"
        to={`round16`}
        state={genRound16(dataGroup)}
      >
        Next Round of 16
      </Link>
    </>
  );
}
export default Matches;
