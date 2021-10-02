import { Switch, Route } from "react-router-dom";
import React from 'react';
import Seting_l from "../Compoment/Layout_Seting/Seting_l";
import SetingPrivacy_l from "../Compoment/Privacy_Setting/SetingPrivacy_l";
import SetingInfo_l from "../Compoment/Info_Setting/SetingInfo_l"
import SetingAcount from "../Compoment/Acount_Setting/SetingAcount_l";
import SettingSecurity_l from "../Compoment/Security_Seting/SettingSecurity_l";
import SettingAds_l from "../Compoment/Ads_Setting/SettingAds_l";
import SettingSupport_l from "../Compoment/Support_Seting/SettingSupport_l";

function RouteSeting_l({hiden,setHiden}) {
    return (
        <div>
         <Switch>

          <Route path="/setting/privacy"><SetingPrivacy_l hiden={hiden} /></Route>
            <Route path="/setting/privacy/information" > <SetingPrivacy_l /></Route>
            <Route path="/setting/privacy/profileTag" ><SetingPrivacy_l /> </Route>
            <Route path="/setting/privacy/followersPost" > <SetingPrivacy_l /></Route>
            <Route path="/setting/privacy/block" > <SetingPrivacy_l /></Route>

          <Route path="/setting/notifications"><SetingInfo_l /> </Route> 

          <Route path="/setting/account"><SetingAcount /></Route>
            <Route path="/setting/account/language"><SetingInfo_l /> </Route>
            <Route path="/setting/account/location"><SetingInfo_l /> </Route>  

          <Route path="/setting/security"><SettingSecurity_l /></Route>
            <Route path="/setting/security/application"><SettingSecurity_l /></Route>

          <Route path="/setting/advertisers"><SettingAds_l /></Route>
            <Route path="/setting/advertisers/adpreferences"><SettingAds_l /></Route>
            <Route path="/setting/advertisers/settingadpreference"><SettingAds_l /></Route>

          <Route path="/setting/suport"><SettingSupport_l /></Route>
            <Route path="/setting/suport/Feedback"><SettingSupport_l /></Route>
            <Route path="/setting/suport/community standards"><SettingSupport_l /></Route>
            
          <Route path="/"><Seting_l hiden={hiden} setHiden={setHiden} /></Route>
        </Switch>
        </div>
    );
}

export default RouteSeting_l;