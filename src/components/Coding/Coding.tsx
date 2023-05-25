import { Container } from "./styles";
import codeforces from "../../assets/codefo.jpg"
import leetcode from "../../assets/leetcode.jpg"
import gfg from "../../assets/gfg.png"
export function Coding(){

  return(
    <Container id="coding">
      <header>
        <h2>Coding Profiles</h2>
      </header>
      <div className="codings">
        <div>
          <img src={leetcode} alt="Email" />
          <a href="https://leetcode.com/amanverma21/">Leetcode Max. Rating - 1811 (amanverma21)</a>
        </div>
        <div>
          <img src={gfg} alt="Email" />
          <a href="https://auth.geeksforgeeks.org/user/averma2k19/">GFG Coding Score - 2051 (averma2k19)</a>
        </div>
        <div>
          <img src={codeforces} alt="Email" />
          <a href="https://codeforces.com/profile/amanverma21">CodeForces - Specialist (amanverma21)</a>
        </div>
          
      </div>
    </Container>
  )
}