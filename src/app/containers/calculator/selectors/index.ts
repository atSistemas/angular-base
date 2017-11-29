import { createSelector } from '@ngrx/store';

import * as CalculatorModel from '../models';

export const selectFeature = (state: CalculatorModel.State) => state.display;
