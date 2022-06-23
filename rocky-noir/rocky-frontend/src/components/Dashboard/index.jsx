import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import Navbar from "../Common/Navbar";
import MainSection from "./MainSection";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import WilsonPress from "./WilsonPress";
import Profile from "./Account/Profile";
import AccountEdit from "./Account/AccountEdit";
import WilsonRelation from "./WilsonRelation";
import WilsonReason from "./WilsonReason";
import WilsonTime from "./WilsonTime";
import WilsonThreat from "./WilsonThreat";
import WilsonAccused from "./WilsonAccused";
import OtherAccused from "./OtherAccused";
import EmilyPress from "./EmilyPress";
import EmilyEnemy from "./EmilyEnemy";
import EmilyRelation from "./EmilyRelation";
import EmilyBreakup from "./EmilyBreakup";


const Home = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Switch>
          <Route exact path="/home" component={MainSection} />
          <Route exact path="/pageone" component={PageOne} />
          <Route exact path="/pagetwo" component={PageTwo} />
          <Route exact path="/pagethree" component={PageThree} />
          <Route exact path="/pagefour" component={PageFour} />
          <Route exact path="/pagefive" component={PageFive} />
          <Route exact path="/pagesix" component={PageSix} />
          <Route exact path="/pageseven" component={PageSeven} />
          <Route exact path="/wilsonpress" component={WilsonPress} />
          <Route exact path="/wilsontime" component={WilsonTime} />
          <Route exact path="/wilsonreason" component={WilsonReason} />
          <Route exact path="/wilsonrelation" component={WilsonRelation} />
          <Route exact path="/wilsonthreat" component={WilsonThreat} />
          <Route exact path="/wilsonaccused" component={WilsonAccused} />
          <Route exact path="/emilypress" component={EmilyPress} />
          <Route exact path="/emilyenemy" component={EmilyEnemy} />
          <Route exact path="/emilyrelation" component={EmilyRelation} />
          <Route exact path="/emilybreakup" component={EmilyBreakup} />

          <Route exact path="/otheraccused" component={OtherAccused} />

          <Route exact path="/profile" component={Profile} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Box>
    </>
  );
};

export default Home;
