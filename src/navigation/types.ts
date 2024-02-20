import {ParamListBase} from '@react-navigation/native';
import {IMovie} from '../interfaces';
import { screens } from './constants';

export interface INavigationStack extends ParamListBase {
  [screens.home]: undefined;
  [screens.details]: IMovie;
}
