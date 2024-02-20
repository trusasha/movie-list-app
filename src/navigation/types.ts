import {ParamListBase} from '@react-navigation/native';
import {IMovie} from '../interfaces';

export interface INavigationStack extends ParamListBase {
  Home: undefined;
  Details: IMovie;
}
