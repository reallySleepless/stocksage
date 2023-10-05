import ProfilePill from "@components/ProfilePill";
import Search from "@components/Search";

const Dashboard = () => {
  return (
    <>
      <div className="flex px-4 gap-6">
        <Search />
        <ProfilePill />
      </div>
    </>
  );
};

export default Dashboard;
