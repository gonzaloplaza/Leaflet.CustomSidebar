(function(){
    
L.Control.CustomSidebar = L.Control.extend({
    options: {
        position: 'topleft',
        menuposition: 'topleft', 
        classname: 'leaflet-control-customsidebar',
        direction: 'horizontal',
        delay: '10'
    },

    initialize: function(innerHTML, options) {
        if (options) {
        	L.Util.setOptions(this, options);
        }

        this._innerHTML = innerHTML;
    },

    onAdd: function(map) {
        this._container = L.DomUtil.create('div', 'leaflet-control-customsidebar leaflet-bar leaflet-control');
        this._container.innerHTML = this._innerHTML;
        return this._container;
    },

    onRemove: function(map) {
        map._container.removeChild(this._container);
		delete this._container;
    }
});

L.control.customSidebar = function(innerHTML, options) {
    return new L.Control.CustomSidebar(innerHTML, options);
}

})();