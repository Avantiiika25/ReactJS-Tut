import A3Counter from "./components/A3Counter";
import Counter from "./components/Counter";
import SimpleComponent from "./components/SimpleComponent";
import ToggleText from "./components/ToggleText";
import UserInfo from "./components/UserInfo";
import UserProfile from "./components/UserProfile";
import withBorder from "./components/withBorder";

function App() {
  const EnhancedComponent = withBorder(SimpleComponent);
  const EnhancedUserInfo = withBorder(UserInfo);

  return (
    <>
      {/* <h1>AB</h1>
      <Counter /> */}
      <UserInfo />
      {/* <UserProfile />
      <ToggleText />
      <A3Counter /> */}
      <SimpleComponent />
      <EnhancedComponent />
      <EnhancedUserInfo />
    </>

  )
}

export default App;