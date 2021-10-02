import React from 'react';
import { Switch, Route } from "react-router-dom";
import SetingAcount_c from '../Compoment/Acount_Setting/SetingAcount_c';
import SettingAcountLanguage_c from '../Compoment/Acount_Setting/SettingAcountLanguage_c';
import SettingAds_c from '../Compoment/Ads_Setting/SettingAds_c';
import SetingInfo_c from '../Compoment/Info_Setting/SetingInfo_c';
import Seting_c from '../Compoment/Layout_Seting/Seting_c';
import SetingPrivacy_c from "../Compoment/Privacy_Setting/SetingPrivacy_c";
import SetingPrivacy_c_block from '../Compoment/Privacy_Setting/SetingPrivacy_c_block';
import SetingPrivacy_c_info from '../Compoment/Privacy_Setting/SetingPrivacy_c_info';
import SetingPrivacy_c_post from '../Compoment/Privacy_Setting/SetingPrivacy_c_post';
import SetingPrivacy_c_profile from '../Compoment/Privacy_Setting/SetingPrivacy_c_profile';
import SettingSecurity_c from '../Compoment/Security_Seting/SettingSecurity_c';
import SettingSupport_c from '../Compoment/Support_Seting/SettingSupport_c';
function RouteSeting(props) {
  return (
    <div>
      <Switch>
        <Route path="/setting/privacy/information" > <SetingPrivacy_c_info /></Route>
        <Route path="/setting/privacy/profileTag" > <SetingPrivacy_c_profile /></Route>
        <Route path="/setting/privacy/followersPost" ><SetingPrivacy_c_post /></Route>
        <Route path="/setting/privacy/block" > <SetingPrivacy_c_block /></Route>
        <Route path="/setting/account/language"><SettingAcountLanguage_c /> </Route>
        <Route path="/setting/account/location"><SetingAcount_c /></Route>
        <Route path="/setting/security/application"><SettingSecurity_c /></Route>
        <Route path="/setting/advertisers/adpreferences"><SettingAds_c /></Route>
        <Route path="/setting/advertisers/settingadpreference"><SettingAds_c /></Route>
        <Route path="/setting/suport/Feedback"><SettingSupport_c /></Route>
        <Route path="/setting/suport/community"><SettingSupport_c /></Route>
        <Route path="/setting/privacy"><SetingPrivacy_c /></Route>
        <Route path="/setting/notifications"><SetingInfo_c /> </Route>
        <Route path="/setting/account"><SetingAcount_c /></Route>
        <Route path="/setting/security"><SettingSecurity_c /></Route>
        <Route path="/setting/advertisers"><SettingAds_c /></Route>
        <Route path="/setting/suport"><SettingSupport_c /></Route>
        <Route path="/"><Seting_c /></Route>
      </Switch>
    </div>
  );
}

export default RouteSeting;