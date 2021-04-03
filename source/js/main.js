import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initLoaderListeners} from './modules/init-loader-listeners';
import {onStartAddHeroListeners, onResizeAddHeroListeners} from './modules/init-hero-listener';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initLoaderListeners();
onStartAddHeroListeners();
onResizeAddHeroListeners();
