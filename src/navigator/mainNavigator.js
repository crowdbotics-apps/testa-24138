import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile198309Navigator from '../features/UserProfile198309/navigator';
import Maps198290Navigator from '../features/Maps198290/navigator';
import Settings198268Navigator from '../features/Settings198268/navigator';
import Settings198253Navigator from '../features/Settings198253/navigator';
import NotificationList198252Navigator from '../features/NotificationList198252/navigator';
import Maps198251Navigator from '../features/Maps198251/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile198309: { screen: UserProfile198309Navigator },
Maps198290: { screen: Maps198290Navigator },
Settings198268: { screen: Settings198268Navigator },
Settings198253: { screen: Settings198253Navigator },
NotificationList198252: { screen: NotificationList198252Navigator },
Maps198251: { screen: Maps198251Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
