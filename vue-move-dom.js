/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 0.0.1
*
* Just Simplify the original project from: https://github.com/rhyzx/vue-transfer-dom/
* Make it smaller and change some writing behavior
*
*/
Vue.directive('move-dom',{

	bind: function() {
		var me = this;

		// Prepare the container
		var container = me.expression == 'v'+me.name
			// the default is body
			? document.body
			// but it can spesified by expression
			: document.body.querySelector(me.expression);

		// make an anchor
		var anchor = Vue.util.createAnchor('v-move-dom');
		// put the anchor to container
		container.appendChild(anchor);

		// Initial new fragment
		var newFrag = new Vue.FragmentFactory(me.vm,me.el);
		// Create a new fragment and copy All data VM instance including event, ect.
		me.frag = newFrag.create(me._host, me._scope, me._frag);

		// before() functions from Vue Util dom which is included in fragment.js
		// to insert the fragment before the anchor
		me.frag.before(anchor);
	},

	unbind: function() {
		// Remove the fragment
		this.frag.remove();
	}

});
