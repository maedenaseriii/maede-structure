import { Provider } from "react-redux";
import store from "../states/store";

const AppReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppReduxProvider;
