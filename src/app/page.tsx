import dynamic from "next/dynamic";
const HomePage=dynamic(()=>import("../CustomComponents/HomePages/HomePages"))
export default function page() {
  return (
  <>
  <HomePage />
  </>
  );
}
