import React from 'react';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Modal from './components/Modal';
import NoMatch from './components/NoMatch';
import Notes from './components/Notes'
import NotesForm from './components/NotesForm';
import Login from './components/Login';
import Register from './components/Register';
import TasksDue from './components/TasksDue';
import FetchUser from './components/FetchUser';
import Profile from './components/Profile';
import UpcomingInt from './components/UpcomingInt';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import Tasks from './components/Tasks';
import "./stylesheets/App.scss";
import JobViewForm from './components/JobViewForm';
import Interviews from './components/Interviews';
import ListContainer from './components/ListContainer';
import JobGraph from "./components/JobGraph";

const App = () => (
  <>
    <FetchUser>
      <div>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <ProtectedRoute exact path='/board' component={ListContainer} />
          <ProtectedRoute exact path='/jobs/:job_id/notes' component={Notes} />
          <ProtectedRoute exact path="/jobs/:job_id/new_note" component={NotesForm} />
          <ProtectedRoute exact path="/jobs/:job_id/contacts" component={Contacts} />
          <ProtectedRoute exact path="/jobs/:job_id/tasks" component={Tasks} />
          <ProtectedRoute exact path="/jobs/:id" component={JobViewForm} />
          <ProtectedRoute exact path="/job/:id" component={Modal} />
          <ProtectedRoute exact path="/jobs/:job_id/interviews" component={Interviews} />
          <ProtectedRoute exact path="/tasks/tasks_due" component={TasksDue} />
          <ProtectedRoute exact path="/interviews/upcoming_int" component={UpcomingInt} />
          <ProtectedRoute exact path="/jobs/job_graph" component={JobGraph} />
          <ProtectedRoute exact path="jobs/apps_over_time" component={JobGraph} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </FetchUser>
  </>
)

export default App;