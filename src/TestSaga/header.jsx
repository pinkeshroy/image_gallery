import { useSelector } from "react-redux";
export function Header() {
    const result = useSelector((state) => state.cartData);
    console.log({result});
  console.log({ result });
  return <div>Count:{result?.length}</div>;
}
