L.Control.Basemaps = L.Control.extend({
    _map: null,
    includes: L.Mixin.Events,
    options: {
        position: 'bottomright',
        tileX: 0,
        tileY: 0,
        tileZ: 0,
        layers: []  // list of basemap layer objects, first in list is default and added to map with this control
    },
    basemap: null,
    onAdd: function (map) {
        this._map = map;
        var container = L.DomUtil.create('div', 'basemaps leaflet-control closed');

        // disable events
        L.DomEvent.disableClickPropagation(container);
        if (!L.Browser.touch) {
            L.DomEvent.disableScrollPropagation(container);
        }

        this.options.basemaps.forEach(function(d, i){
            var basemapClass = 'basemap';

            if (i === 0) {
                this.basemap = d;
                this._map.addLayer(d);
                basemapClass += ' active';
            }
            else if (i === 1) {
                basemapClass += ' alt'
            }

            var coords = {x: this.options.tileX, y: this.options.tileY};
            var url = L.Util.template(d._url, L.extend({
                s: d._getSubdomain(coords),
                x: coords.x,
                y: d.options.tms ? d._globalTileRange.max.y - coords.y : coords.y,
                z: this.options.tileZ
            }, d.options));

            var basemapNode = L.DomUtil.create('div', basemapClass, container);
            var imgNode = L.DomUtil.create('img', null, basemapNode);
            imgNode.src = url;
            if (d.options && d.options.label) {
                imgNode.title = d.options.label;
            }

            L.DomEvent.on(basemapNode, 'click', function() {
                //if different, remove previous basemap, and add new one
                if (d != this.basemap) {
                    map.removeLayer(this.basemap);
                    map.addLayer(d);
                    d.bringToBack();
                    map.fire('baselayerchange', d);
                    this.basemap = d;

                    L.DomUtil.removeClass(document.getElementsByClassName('basemap active')[0], 'active');
                    L.DomUtil.addClass(basemapNode, 'active');

                    var altIdx = (i+1) % this.options.basemaps.length;
                    L.DomUtil.removeClass(document.getElementsByClassName('basemap alt')[0], 'alt');
                    L.DomUtil.addClass(document.getElementsByClassName('basemap')[altIdx], 'alt');
                }
            }, this);

        }, this);

        L.DomEvent.on(container, 'mouseenter', function() {
            L.DomUtil.removeClass(container, 'closed');
        }, this);

        L.DomEvent.on(container, 'mouseleave', function() {
            L.DomUtil.addClass(container, 'closed');
        }, this);

        this._container = container;
        return this._container;
    }
});

L.control.basemaps = function (options) {
  return new L.Control.Basemaps(options);
};