import { countAtom, isCountEven } from "./store/atoms/count";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

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
  return (
    <>
      {count}
    </>
  );
}
function IsEven() {
  const countEven = useRecoilValue(isCountEven);
  return <>{countEven}</>;

  return;
}
function ButtonCount() {
  const setCount = useSetRecoilState(countAtom);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <br></br>
      <IsEven />
    </>
  );
}
export default App;
