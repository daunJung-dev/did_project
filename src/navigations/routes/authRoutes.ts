import { LoginScreen } from "../../screens";

export const authRoutes = [
  {
    pathname: "Login",
    screen: LoginScreen,
    initialParams: { itemId: 21 },
    options: {
      headerStyle: {
        height: 0,
      },
    },
  },
];
