import cookie from './cookie';
import platformInfo from './platform';

const install = (Vue, buildOptions = {}) => {
	Vue.prototype.$wbUtil = {
		cookie,
		platformInfo
	};
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}
export default install;
