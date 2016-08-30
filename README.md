# Leaflet.Basemaps

A tile driven basemaps control for Leaflet.

It allows you to create a user interface control for choosing the basemap used on the map, based on a tile from a the
underlying tile service.

See the [example](//consbio.github.io/Leaflet.Basemaps).

*Tested with Leaflet 1.0.0-rc3*


## Install

From Bower:

```
bower install Leaflet.Basemaps
```


From NPM:

```
npm install leaflet-basemaps
```


## Usage

Include the CSS:

```
<link rel="stylesheet" href="L.Control.Basemaps.css" />
```


Include the JavaScript:

```
<script src="L.Control.Basemaps-min.js"></script>
```


The control expects a list of TileLayer instances, constructed in the [normal way](http://leafletjs.com/reference.html#tilelayer).

An optional `layer` property can be added in the options for each basemap, and this will be used to populate the tooltip
(HTML `title` attribute) for that basemap.

Each basemap is represented using a tile from the underlying tile service.  Choose the tile x, y, z that provides the
best looking representative basemap image for your application.

Note: this automatically adds the first basemap in your list to the map during initialization, so you don't need to add that
TileLayer to your map.


Example usage:

```
var basemaps = [
    L.tileLayer('//{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        minZoom: 0,
        label: 'Toner Lite'  // optional label used for tooltip
    }),
    L.tileLayer('//{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        minZoom: 0,
        label: 'Toner'
    }),
    L.tileLayer('//{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        subdomains: 'abcd',
        maxZoom: 16,
        minZoom: 1,
        label: 'Watercolor'
    })
];

map.addControl(L.control.basemaps({
    basemaps: basemaps,
    tileX: 0,  // tile X coordinate
    tileY: 0,  // tile Y coordinate
    tileZ: 1   // tile zoom level
}));
```


## Credits:
Developed and maintained with support from the [Peninsular Florida Landscape Conservation Cooperative](http://peninsularfloridalcc.org) and additional support from the [U.S. Forest Service Northwest Regional Climate Hub](http://www.fs.fed.us/climatechange/nrch/).


## Contributors:
* [Brendan Ward](https://github.com/brendan-ward)
* [Nik Molnar](https://github.com/nikmolnar)