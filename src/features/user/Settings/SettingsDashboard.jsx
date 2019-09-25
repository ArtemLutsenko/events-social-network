import React from "react";
import {connect} from 'react-redux'
import { Grid } from "semantic-ui-react";
import SetingsNav from "./SetingsNav";
import { Route, Redirect, Switch } from "react-router";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AcountPage from "./AcountPage";
import { updatePassword } from "../../auth/authActions";

const actions = {
  updatePassword
}

const mapState = (state) => ({
  providerId: state.firebase.auth.providerData[0].providerId
})

const SettingsDashboard = ({updatePassword, providerId}) => { 
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" render = {() => <AcountPage updatePassword = {updatePassword} providerId = {providerId}/>} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SetingsNav />
      </Grid.Column>
    </Grid>
  );
}

export default connect(mapState, actions)(SettingsDashboard)