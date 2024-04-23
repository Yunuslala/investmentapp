import dynamic from "next/dynamic";
import 'react-notifications-component/dist/theme.css'
const HomePage=dynamic(()=>import("../../CustomComponents/HomePages/HomePages"))
export default function page() {
  return (
  <>
  <HomePage />
  </>
  );
}
