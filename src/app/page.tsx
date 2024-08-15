import Navbar from "./navbar"
import LeftPanel from "./leftpanel";
import RightPanel from "./rightpanel"

export default function Home() {
  return (
    <div className="gray-50 px-20 py-10">
      <Navbar />
      <div className="flex">
      <LeftPanel />
      <RightPanel />
      </div>
    </div>
  );
}
