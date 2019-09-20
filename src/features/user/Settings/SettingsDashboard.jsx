import React from "react";
import { Grid } from "semantic-ui-react";
import SetingsNav from "./SetingsNav";
import { Route, Redirect, Switch } from "react-router";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AcountPage from "./AcountPage";

export default function SettingsDashboard() {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AcountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SetingsNav />
      </Grid.Column>
    </Grid>
  );
}
