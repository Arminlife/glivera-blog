import LazyLoad from 'vanilla-lazyload';

export default class BlogPage {
	constructor(el) {
		this.$el = $(el);
		this.init();
	}

	init() {
		let lazyLoadInstance = new LazyLoad({});
	}
}
