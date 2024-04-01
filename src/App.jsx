import { countAtom} from "./store/atoms/count";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <CountValue></CountValue>
      </RecoilRoot>
  );
}
function CountValue() {
  return (
    <>
      <CountRender></CountRender>
      <br></br>
      <ButtonCount></ButtonCount>
    </>
  );
}
function CountRender() {
  const count = useRecoilValue(countAtom);
  return <>{count}</>;
}
function ButtonCount() {
  const [count,setCount] = useRecoilState(countAtom);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
export default App;
