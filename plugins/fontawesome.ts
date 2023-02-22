import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faRightFromBracket, faXmark, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regFaHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


config.autoAddCss = false;
library.add(faHouse, faRightFromBracket, faHeart, faXmark, faShare, regFaHeart);
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
});