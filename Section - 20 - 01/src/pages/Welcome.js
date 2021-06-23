import { Route } from "react-router";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path='/welcome/new-user'>
        <p>welcome user</p>
      </Route>
    </section>
  );
};

export default Welcome;