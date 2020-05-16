
window.onload = function() {class CS extends HTMLElement {
		static get observedAttributes() {
			return ['type', 'data', 'includelegacy'];
		}
		constructor() {
			// Always call super first in constructor
			self = super();
			if(self.getAttribute("type") == "font") {
				self.style.fontFamily="\""+self.getAttribute("data")+"\"";
			}
			if(self.getAttribute("includelegacy") == "1.0.0") {
				
			}

		}
	}
	customElements.define("cs-ele", CS);
}
