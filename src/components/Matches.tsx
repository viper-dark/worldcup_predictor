import { useState } from "react";
import { Link } from "react-router-dom";
import { seedData, genGames, recordResults } from "../logic_libs";

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
          <div className="w-24">{match[0]}</div>
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
          <div className="w-24">{match[1]}</div>
        </div>
      ))}
      <Link
        className="bg-blue-400 rounded-lg p-2"
        to={`round16`}
        state={groups}
      >
        Next Round of 16
      </Link>
    </>
  );
}
export default Matches;
