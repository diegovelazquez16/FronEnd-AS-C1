import React from "react";
import {UserList} from "./components/UserList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>User Management</h1>
      <UserList />
    </div>
  );
};

export default App;
