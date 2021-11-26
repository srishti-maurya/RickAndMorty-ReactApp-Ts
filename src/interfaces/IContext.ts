import { IState } from "./IState";
import { IAction } from "./IAction";

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}
