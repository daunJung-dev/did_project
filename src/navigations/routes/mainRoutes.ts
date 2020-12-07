import { CreatePostScreen, DetailsScreen, HomeScreen } from "../../screens";
import TodoListScreen from "../../screens/TodoListScreen";

export const mainRoutes = [
  { pathname: "Home", screen: HomeScreen, initialParams: { itemId: 21 } },
  { pathname: "Details", screen: DetailsScreen, initialParams: { itemId: 21 } },
  {
    pathname: "CreatePost",
    screen: CreatePostScreen,
    initialParams: { itemId: 21 },
  },
  {
    pathname: "TodoList",
    screen: TodoListScreen,
  },
];
