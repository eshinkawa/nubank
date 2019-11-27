import { createSwitchNavigator } from "react-navigation";

import Routes from "./routes";

const { splashStack, userAccountStack } = Routes;

const getRoutesStack = createSwitchNavigator(
  {
    SplashStack: splashStack,
    UserAccountStack: userAccountStack
  },
  {
    initialRouteName: "SplashStack",
  }
);

export default getRoutesStack;
