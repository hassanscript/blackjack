import Layout from "./Layout";
import WelcomeView from "./Views/WelcomeView";
import { useEffect, useState } from "react";
import { socket } from "./utils";

function App() {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("connect", () => {
      setLoading(false);
      setConnected(true);
    });
  });

  return (
    <Layout loading={loading}>
      <WelcomeView />
    </Layout>
  );
}

export default App;
