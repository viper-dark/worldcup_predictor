import { useLocation } from "react-router-dom";
import "./Round16.css";
import { useState } from "react";
import lookup from 'country-code-lookup'

export function Round16() {
  //ocuntry code lookup to use dymanic images 

  const data = useLocation().state;
  console.log(data)
   
  //the qualified teams from match i e,g qualified team's name from match 3 would be at qualified[3]
  const [qualified,setQualified]=useState(Array.apply(null, Array(15)).map(() => ""))
  const [results, setResults] = useState(() => {
    return  Array.apply(null, Array(15)).map(() => ["", ""])
 
  })

  function onChangeHandeler(index:number,i:number,e:any) {
    
    //e.target.parentElement.parentElement.className="zarda"
      
    const value =Number(e.target.value)
    //reset the current qualified team 
    setQualified((state=>{
      const qualified = Array.from(state)
      qualified[index]=""
      return qualified    })

    )
    //reset the score of the next round
    if (index < 14)
    {

      setResults((state) => {
        const result = Array.from(state)
        let roundIndex = index % 2 === 0 ? index : index-1
        roundIndex=(roundIndex+16)/2
        result[roundIndex][0]=""
        result[roundIndex][1]=""
  
        return result
    
      })
       
    }
    setResults((state) => {
    const result = Array.from(state)
      result[index][i] = value;
      const otherScorePosition= i > 0 ? 0 : 1
      const score1=result[index][i]
      const score2=result[index][otherScorePosition]

      if( (score1 != score2) && !(score1 === "" || "" === score2))
      {
        const winningIndex = score1 > score2 ? i : otherScorePosition 
        const losingIndex = score1 > score2 ? otherScorePosition : i 
        //highliting the qualified team
        document.getElementById(`${index}${winningIndex}`).className = "yTI2ha ZXh5zu"
        document.getElementById(`${index}${losingIndex}`).className="yTI2ha"

        if(index > 7)
        {
         const compareIndex= (index-8)+(index-8) + winningIndex
         setQualified((state) =>
        {
          const qualified = Array.from(state)
          qualified[index]=qualified[compareIndex]
          return qualified
        })
         
        }
        else{

          setQualified((state) =>
          {
            const qualified = Array.from(state)
            qualified[index]=data[index][winningIndex]
            return qualified
          }
  
          )
        }

      }
    

      return result;  
     
    });

  }

  return (

    <div className="snipcss-3neyg">
      <div className="_3Ige4">
        <div className="j6zQMC">
          <div className="v6gKkc elZ9gV">
            <div className="_2b7NiH" ec-theme="dark">
              <svg className="epOEaR AklhG8" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={12} cy={12} r="11.5" fill stroke />
                <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
              </svg>
            </div>
          </div>
          <div className="klLi6p CKByqj" />
          <div className="v6gKkc WA4SnK CKByqj">
            <div className="PjXOkh">
              <div className="qwS5tv" ec-theme="light">2</div>
              <div ec-theme="dark" className="MV9vnp">
                <span> KNOCKOUT STAGE </span>
              </div>
            </div>
          </div>
        </div>
        <div className="vjc2jY">
          <p>
            <span>
              Predict the result of each knockout tie and crown a winner.
            </span>
          </p>
        </div>
      </div>
      <div className="UAZu_O" />
      <div>
        <div style={{ display: 'none' }}>
          <div className="_2VlXOo">
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group A </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2201.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2201.png?imwidth=64 2x
                  " alt="Netherl." title="Netherl." draggable="false" />
                      </div>
                      <div className="pxmpUj">Netherlands</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4375.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4375.png?imwidth=64 2x
                  " alt="Senegal" title="Senegal" draggable="false" />
                      </div>
                      <div className="pxmpUj">Senegal</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4333.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4333.png?imwidth=64 2x
                  " alt="Ecuador" title="Ecuador" draggable="false" />
                      </div>
                      <div className="pxmpUj">Ecuador</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/9640.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/9640.png?imwidth=64 2x
                  " alt="Qatar" title="Qatar" draggable="false" />
                      </div>
                      <div className="pxmpUj">Qatar</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group B </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2208.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2208.png?imwidth=64 2x
                  " alt="England" title="England" draggable="false" />
                      </div>
                      <div className="pxmpUj">England</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2209.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2209.png?imwidth=64 2x
                  " alt="USA" title="USA" draggable="false" />
                      </div>
                      <div className="pxmpUj">USA</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4348.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4348.png?imwidth=64 2x
                  " alt="Iran" title="Iran" draggable="false" />
                      </div>
                      <div className="pxmpUj">IR Iran</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4386.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4386.png?imwidth=64 2x
                  " alt="Wales" title="Wales" draggable="false" />
                      </div>
                      <div className="pxmpUj">Wales</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group C </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2768.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2768.png?imwidth=64 2x
                  " alt="Argentina" title="Argentina" draggable="false" />
                      </div>
                      <div className="pxmpUj">Argentina</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2214.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2214.png?imwidth=64 2x
                  " alt="Poland" title="Poland" draggable="false" />
                      </div>
                      <div className="pxmpUj">Poland</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2228.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2228.png?imwidth=64 2x
                  " alt="Mexico" title="Mexico" draggable="false" />
                      </div>
                      <div className="pxmpUj">Mexico</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4374.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4374.png?imwidth=64 2x
                  " alt="Saudi Ara." title="Saudi Ara." draggable="false" />
                      </div>
                      <div className="pxmpUj">Saudi Arabia</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group D </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2202.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2202.png?imwidth=64 2x
                  " alt="France" title="France" draggable="false" />
                      </div>
                      <div className="pxmpUj">France</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2229.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2229.png?imwidth=64 2x
                  " alt="Australia" title="Australia" draggable="false" />
                      </div>
                      <div className="pxmpUj">Australia</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2246.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2246.png?imwidth=64 2x
                  " alt="Tunisia" title="Tunisia" draggable="false" />
                      </div>
                      <div className="pxmpUj">Tunisia</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2220.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2220.png?imwidth=64 2x
                  " alt="Denmark" title="Denmark" draggable="false" />
                      </div>
                      <div className="pxmpUj">Denmark</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group E </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2241.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2241.png?imwidth=64 2x
                  " alt="Japan" title="Japan" draggable="false" />
                      </div>
                      <div className="pxmpUj">Japan</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2203.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2203.png?imwidth=64 2x
                  " alt="Spain" title="Spain" draggable="false" />
                      </div>
                      <div className="pxmpUj">Spain</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2206.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2206.png?imwidth=64 2x
                  " alt="Germany" title="Germany" draggable="false" />
                      </div>
                      <div className="pxmpUj">Germany</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2771.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2771.png?imwidth=64 2x
                  " alt="Costa Rica" title="Costa Rica" draggable="false" />
                      </div>
                      <div className="pxmpUj">Costa Rica</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group F </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2779.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2779.png?imwidth=64 2x
                  " alt="Morocco" title="Morocco" draggable="false" />
                      </div>
                      <div className="pxmpUj">Morocco</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4354.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4354.png?imwidth=64 2x
                  " alt="Croatia" title="Croatia" draggable="false" />
                      </div>
                      <div className="pxmpUj">Croatia</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2205.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2205.png?imwidth=64 2x
                  " alt="Belgium" title="Belgium" draggable="false" />
                      </div>
                      <div className="pxmpUj">Belgium</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2231.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2231.png?imwidth=64 2x
                  " alt="Canada" title="Canada" draggable="false" />
                      </div>
                      <div className="pxmpUj">Canada</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group G </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2235.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2235.png?imwidth=64 2x
                  " alt="Brazil" title="Brazil" draggable="false" />
                      </div>
                      <div className="pxmpUj">Brazil</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2213.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2213.png?imwidth=64 2x
                  " alt="Switzerl." title="Switzerl." draggable="false" />
                      </div>
                      <div className="pxmpUj">Switzerland</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4351.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4351.png?imwidth=64 2x
                  " alt="Cameroon" title="Cameroon" draggable="false" />
                      </div>
                      <div className="pxmpUj">Cameroon</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/6944.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/6944.png?imwidth=64 2x
                  " alt="Serbia" title="Serbia" draggable="false" />
                      </div>
                      <div className="pxmpUj">Serbia</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wIYuwz">
              <div>
                <div className="buODU4">
                  <div ec-theme="dark" className="xfxn9N _4VgJ0c">
                    <div className="vFCmiA">
                      <div className="Lo3Ox0">
                        <span> Group H </span>
                      </div>
                      <div className="_9Lko_X">
                        <span> Drag to re-order </span>
                      </div>
                    </div>
                    <div className="WujpPr">
                      <div className="xwLW2G">
                        <svg className="GCZwmj AklhG8 yv1UsX" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx={12} cy={12} r="11.5" fill stroke />
                          <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#181a1b' }} />
                          <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="OIkBrv">
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">1</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2223.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2223.png?imwidth=64 2x
                  " alt="Portugal" title="Portugal" draggable="false" />
                      </div>
                      <div className="pxmpUj">Portugal</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">2</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4391.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4391.png?imwidth=64 2x
                  " alt="Korea" title="Korea" draggable="false" />
                      </div>
                      <div className="pxmpUj">Korea Republic</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">3</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2787.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2787.png?imwidth=64 2x
                  " alt="Uruguay" title="Uruguay" draggable="false" />
                      </div>
                      <div className="pxmpUj">Uruguay</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="unpA38" />
                    <div className="_1oio1G AZ4BrO">
                      <div className="qo3bYw">4</div>
                      <div className="At9XsF">
                        <img className="At9XsF" src="https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4339.png?imwidth=32" srcSet="
                    https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4339.png?imwidth=64 2x
                  " alt="Ghana" title="Ghana" draggable="false" />
                      </div>
                      <div className="pxmpUj">Ghana</div>
                      <div className="zggTdZ dndIcon" />
                    </div>
                    <div className="checkDetails _9sCZOF">
                      <div className="FBFwwI">
                        <span> POPULAR PREDICTIONS </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hdSYh2">
            <div className="_1SjdxM">
              <div>
                <span>
                  You’re too late to score points – but you can explore how the
                  tournament might have unfolded.
                </span>
              </div>
            </div>
            <div className="X0Ax5P">
              <button type className="njZxwt mRgOjv" style={{ minWidth: '180px' }}>
                <span> NEXT </span>
              </button>
            </div>
          </div>
        </div>
        <div style={{ display: 'block' }}>
          <div className="oF0ot9">
            <div>
              <div className="Nxc1Td Y__XPR">
                <div className="xjgqtQ" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                  <div name="koTopPart" />
                  <div className="pd24Xl _5Is12p">
                    <div className="UzAd2A">
                      Round of 16
                      <svg className="kn5HNE AklhG8" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={12} cy={12} r="11.5" fill stroke />
                        <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#e8e6e3' }} />
                        <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                      </svg>
                    </div>
                    <div className="UzAd2A">
                      Quarter-finals
                      <svg className="kn5HNE AklhG8" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={12} cy={12} r="11.5" fill stroke />
                        <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#e8e6e3' }} />
                        <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                      </svg>
                    </div>
                    <div className="UzAd2A">
                      Semi-finals
                      <svg className="kn5HNE AklhG8" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={12} cy={12} r="11.5" fill stroke />
                        <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#e8e6e3' }} />
                        <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                      </svg>
                    </div>
                    <div className="UzAd2A">
                      Final
                      <svg className="kn5HNE AklhG8" viewBox="0 0 24 24" width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx={12} cy={12} r="11.5" fill stroke />
                        <path className="_7WSNbL" fillRule="evenodd" clipRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-1.5 0c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12Z" fill="#fff" data-darkreader-inline-fill style={{ "-darkreaderInlineFill": '#e8e6e3' }} />
                        <path className="ysAUS8" fillRule="evenodd" clipRule="evenodd" d="M10.5787 16.3789L6.43921 12.2395L8.01876 10.6607L10.5787 13.2213L16.8604 6.9388L18.4392 8.51761L10.5787 16.3789Z" fill />
                      </svg>
                    </div>
                  </div>
                  <div className="zfmnUO">
                    <div className="OqjPaw">
                      <div className="xJAsxE" style={{ top: 'calc(16px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="00">
                              <div className="WwzEVC _1e7mHA">
                                <input
                                  className="bIaQo9"
                                  value={results[0][0]}
                                  onChange={(e) => onChangeHandeler(0, 0,  e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[0][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2201.png?imwidth=64 2x
                            " alt="Netherl." width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[0][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="01">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[0][1]}
                                  onChange={(e) => onChangeHandeler(0, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[0][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2209.png?imwidth=64 2x
                            " alt="USA" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[0][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(207px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="10">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[1][0]}
                                  onChange={(e) => onChangeHandeler(1, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[1][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2768.png?imwidth=64 2x
                            " alt="Argentina" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[1][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="11">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[1][1]}
                                  onChange={(e) => onChangeHandeler(1, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[1][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2229.png?imwidth=64 2x
                            " alt="Australia" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[1][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(398px)' }}>
                        <div>
                          <div ec-theme="light" className="sZa2a7 ZXh5zu ZcoRFw iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha"id="20">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[2][0]}
                                  onChange={(e) => onChangeHandeler(2, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[2][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2241.png?imwidth=64 2x
                            " alt="Japan" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[2][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu hU8yP3 wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="21">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[2][1]}
                                  onChange={(e) => onChangeHandeler(2, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[2][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4354.png?imwidth=64 2x
                            " alt="Croatia" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[2][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(589px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="30">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[3][0]}
                                  onChange={(e) => onChangeHandeler(3, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[3][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2235.png?imwidth=64 2x
                            " alt="Brazil" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[3][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="31">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[3][1]}
                                  onChange={(e) => onChangeHandeler(3, 1,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[3][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4391.png?imwidth=64 2x
                            " alt="Korea" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[3][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(780px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="40">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[4][0]}
                                  onChange={(e) => onChangeHandeler(4, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[4][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2208.png?imwidth=64 2x
                            " alt="England" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[4][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="41">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[4][1]}
                                  onChange={(e) => onChangeHandeler(4, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[4][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4375.png?imwidth=64 2x
                            " alt="Senegal" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[4][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(971px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="50">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[5][0]}
                                  onChange={(e) => onChangeHandeler(5, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[5][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2202.png?imwidth=64 2x
                            " alt="France" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[5][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="51">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[5][1]}
                                  onChange={(e) => onChangeHandeler(5, 1,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[5][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2214.png?imwidth=64 2x
                            " alt="Poland" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[5][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(1162px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="60">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[6][0]}
                                  onChange={(e) => onChangeHandeler(6, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[6][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2779.png?imwidth=64 2x
                            " alt="Morocco" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[6][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="61">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[6][1]}
                                  onChange={(e) => onChangeHandeler(6, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[6][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2203.png?imwidth=64 2x
                            " alt="Spain" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[6][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(1353px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="70">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[7][0]}
                                  onChange={(e) => onChangeHandeler(7, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[7][0]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2223.png?imwidth=64 2x
                            " alt="Portugal" width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[7][0]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="71">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[7][1]}
                                  onChange={(e) => onChangeHandeler(7, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(data[7][1]).iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2213.png?imwidth=64 2x
                            " alt="Switzerl." width="32px" />
                                </div>
                                <div className="PZ9lYl">{data[7][1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="nigWkO" />
                      <svg className="bBZ3Y9 nJzEx2 aqHwGI" width={32} height={387} viewBox="0 0 32 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="I9V1Mx" d="M16 96.5094V2.76514" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="I9V1Mx" d="M16 98.0758V191.82" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 4.01557C16 2.9024 15.1046 2 14 2H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 190.984C16 192.098 15.1046 193 14 193H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5001L17.9992 97.4943C16.8949 97.4939 16 96.5916 16 95.4788" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5L17.9992 97.5057C16.8949 97.5062 16 98.4084 16 99.5213" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                      </svg>
                      <svg className="bBZ3Y9 nJzEx2 XuQNf7" width={32} height={387} viewBox="0 0 32 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="I9V1Mx" d="M16 96.5094V2.76514" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="I9V1Mx" d="M16 98.0758V191.82" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 4.01557C16 2.9024 15.1046 2 14 2H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 190.984C16 192.098 15.1046 193 14 193H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5001L17.9992 97.4943C16.8949 97.4939 16 96.5916 16 95.4788" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5L17.9992 97.5057C16.8949 97.5062 16 98.4084 16 99.5213" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                      </svg>
                      <svg className="bBZ3Y9 nJzEx2 bWEFAg" width={32} height={387} viewBox="0 0 32 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="I9V1Mx" d="M16 96.5094V2.76514" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="I9V1Mx" d="M16 98.0758V191.82" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 4.01557C16 2.9024 15.1046 2 14 2H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 190.984C16 192.098 15.1046 193 14 193H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5001L17.9992 97.4943C16.8949 97.4939 16 96.5916 16 95.4788" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5L17.9992 97.5057C16.8949 97.5062 16 98.4084 16 99.5213" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                      </svg>
                      <svg className="bBZ3Y9 nJzEx2 W3G2Xc" width={32} height={387} viewBox="0 0 32 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="I9V1Mx" d="M16 96.5094V2.76514" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="I9V1Mx" d="M16 98.0758V191.82" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 4.01557C16 2.9024 15.1046 2 14 2H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 190.984C16 192.098 15.1046 193 14 193H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5001L17.9992 97.4943C16.8949 97.4939 16 96.5916 16 95.4788" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5L17.9992 97.5057C16.8949 97.5062 16 98.4084 16 99.5213" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                      </svg>
                    </div>
                    <div className="OqjPaw">
                      <div className="xJAsxE" style={{ top: 'calc(112px)' }}>
                        <div>
                         {qualified[0] ? (<div ec-theme="light" className="sZa2a7 ZXh5zu ZcoRFw iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="80">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[8][0]}
                                  onChange={(e) => onChangeHandeler(8, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[0])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2201.png?imwidth=64 2x
                            " alt="Netherl." width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[0]} </div>
                              </div>
                            </div>
                          </div>):null}
                          <div className="WGbpug" />
                          {qualified[ 1] ? (<div ec-theme="dark" className="sZa2a7 ZXh5zu hU8yP3 wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="81">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[8][1]}
                                  onChange={(e) => onChangeHandeler(8, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[1])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2768.png?imwidth=64 2x
                            " alt="Argentina" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[1] }</div>
                              </div>
                            </div>
                          </div>):null}
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(494px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="90">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[9][0]}
                                  onChange={(e) => onChangeHandeler(9, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[2])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4354.png?imwidth=64 2x
                            " alt="Croatia" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[2]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="91">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[9][1]}
                                  onChange={(e) => onChangeHandeler(9, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[3])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2235.png?imwidth=64 2x
                            " alt="Brazil" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[3]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(876px)' }}>
                        <div>
                          <div ec-theme="light" className="sZa2a7 ZXh5zu ZcoRFw iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="100">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[10][0]}
                                  onChange={(e) => onChangeHandeler(10, 0,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[4])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2208.png?imwidth=64 2x
                            " alt="England" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[4]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu hU8yP3 wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="101">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[10][1]}
                                  onChange={(e) => onChangeHandeler(10, 1,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[5])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2202.png?imwidth=64 2x
                            " alt="France" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[5]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(1258px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="110">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[11][0]}
                                  onChange={(e) => onChangeHandeler(11, 0, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[6])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2779.png?imwidth=64 2x
                            " alt="Morocco" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[6]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="111">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[11][1]}
                                  onChange={(e) => onChangeHandeler(11, 1, e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[7])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2223.png?imwidth=64 2x
                            " alt="Portugal" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[7]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="nigWkO" />
                      <svg className="bBZ3Y9 pVF0fH aqHwGI" width={32} height={387} viewBox="0 0 32 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="I9V1Mx" d="M16 96.5094V2.76514" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="I9V1Mx" d="M16 98.0758V191.82" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 4.01557C16 2.9024 15.1046 2 14 2H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 190.984C16 192.098 15.1046 193 14 193H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5001L17.9992 97.4943C16.8949 97.4939 16 96.5916 16 95.4788" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5L17.9992 97.5057C16.8949 97.5062 16 98.4084 16 99.5213" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                      </svg>
                      <svg className="bBZ3Y9 pVF0fH XuQNf7" width={32} height={387} viewBox="0 0 32 387" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="I9V1Mx" d="M16 96.5094V2.76514" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="I9V1Mx" d="M16 98.0758V191.82" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 4.01557C16 2.9024 15.1046 2 14 2H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 190.984C16 192.098 15.1046 193 14 193H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5001L17.9992 97.4943C16.8949 97.4939 16 96.5916 16 95.4788" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5L17.9992 97.5057C16.8949 97.5062 16 98.4084 16 99.5213" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                      </svg>
                    </div>
                    <div className="YMY4Bf">
                      <div className="xJAsxE" style={{ top: 'calc(303px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="120">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[12][0]}
                                  onChange={(e) => onChangeHandeler(12, 0,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[8])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2768.png?imwidth=64 2x
                            " alt="Argentina" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[8]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="121">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[12][1]}
                                  onChange={(e) => onChangeHandeler(12, 1,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[9])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/4354.png?imwidth=64 2x
                            " alt="Croatia" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[9]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="xJAsxE" style={{ top: 'calc(1067px)' }}>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="130">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[13][0]}
                                  onChange={(e) => onChangeHandeler(13, 0,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[10])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2202.png?imwidth=64 2x
                            " alt="France" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[10]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="131">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[13][1]}
                                  onChange={(e) => onChangeHandeler(13, 1,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[11])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2779.png?imwidth=64 2x
                            " alt="Morocco" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[11]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <div className="nigWkO" />
                      <svg className="bBZ3Y9 lx1ae_ aqHwGI" width={32} height={768} viewBox="0 0 32 768" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="I9V1Mx" d="M16 96.8094V2.76514" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="I9V1Mx" d="M16 97.5758V191.82" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 4.01557C16 2.9024 15.1046 2 14 2H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="d505Mq" d="M16 190.984C16 192.098 15.1046 193 14 193H0" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5001L17.9992 97.4943C16.8949 97.4939 16 96.5916 16 95.4788" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                        <path className="zxrJzT" d="M32 97.5L17.9992 97.5057C16.8949 97.5062 16 98.4084 16 99.5213" stroke="#B3C0C5" strokeWidth={2} data-darkreader-inline-stroke style={{ "-darkreaderInlineStroke": '#beb8b0' }} />
                      </svg>
                    </div>
                    <div className="_EcIvP">
                      <div className="xJAsxE" style={{ top: '685px' }}>
                        <div className="_8LXcMX">
                        { qualified[14]? (<div className="IyNWxu _5seon3">
                            <div className="Yvbtm3">
                              <span> YOUR WINNER </span>
                            </div>
                            <div className="zY0XXi">
                              <div className="v5wHIg">
                                <img src={`https://flagcdn.com/w160/${lookup.byCountry(qualified[14])?.iso2.toLocaleLowerCase()}.png`}  srcSet="
                            https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2768.png?imwidth=140 2x
                          " alt="Argentina" width={140}/>
                              </div>
                            </div>
                            <img className="EG9sMz" src="https://files.ebracket.engagecraft.com/assets/config/bracket-wc-2022/images/Trophy.svg" srcSet="
                        https://files.ebracket.engagecraft.com/assets/config/bracket-wc-2022/images/Trophy.svg 2x
                      " alt="Winner trophy" />
                          </div>):null}
                        </div>
                        <div>
                          <div ec-theme="dark" className="sZa2a7 ZXh5zu ZcoRFw wUXOVr">
                            <div className="yTI2ha ZXh5zu" id="140">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[14][0]}
                                  onChange={(e) => onChangeHandeler(14, 0,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj L2gu7I">
                                  <div className="XC1tUh" />
                                </div>
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[12])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2768.png?imwidth=64 2x
                            " alt="Argentina" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[12]}</div>
                              </div>
                            </div>
                          </div>
                          <div className="WGbpug" />
                          <div ec-theme="light" className="sZa2a7 ZXh5zu hU8yP3 iJVC6P PMhDRr wUXOVr">
                            <div className="yTI2ha" id="141">
                              <div className="WwzEVC _1e7mHA">
                              <input
                                  className="bIaQo9"
                                  value={results[14][1]}
                                  onChange={(e) => onChangeHandeler(14, 1,e)}
                                  ec-theme="dark"
                                  type="number"
                                  id="tentacles"
                                  /*   name={index + "-0"} */
                                  min="0"
                                  max="100"
                                ></input>
                                <div className="PEMIMj" />
                                <div className="HE3mn_">
                                  <img className="HE3mn_" src={`https://flagcdn.com/w40/${lookup.byCountry(qualified[13])?.iso2.toLocaleLowerCase()}.png`} srcSet="
                              https://images.sports.gracenote.com/images/lib/basic/geo/country/flag/large/2202.png?imwidth=64 2x
                            " alt="France" width="32px" />
                                </div>
                                <div className="PZ9lYl">{qualified[13]}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


