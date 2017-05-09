# Leaflet.CustomSidebar

A customizable Sidebar component for Leaflet library.

## Installation

```
npm install leaflet.customsidebar
```

## Usage

Include the CSS:

```html
<link rel="stylesheet" href="Leaflet.CustomSidebar.css">
```


Include the JavaScript:

```html
<script type="text/javascript" src="Leaflet.CustomSidebar.js"></script>
```


## Example usage:

```javascript
L.control.customSidebar('<p>The Sidebar content</p>', {
    position: 'topright',
    width: '320px'
}).addTo(map);
```

## Options

`position:` The standard Leaflet.Control position parameter. Defaults to 'topleft'   
`width:` Set the width of the slide menu. Defaults to '300px'   
`classname:` Parent class of the sidebar container, defaults to '320px'