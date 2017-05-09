# Leaflet.CustomSidebar

A customizable Sidebar component for Leaflet library.

## Installation

```
npm install Leaflet.CustomSidebar
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


Example usage:

```javascript
L.control.customSidebar('<p>The Sidebar content</p>', {
    position: 'topright',
    width: '300px'
}).addTo(map);
```