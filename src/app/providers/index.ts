import compose from "compose-function";
import {withRouting} from './routing/with-routing'

export const withProviders = compose(withRouting);