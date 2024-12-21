import * as L from "leaflet";

L.Polyline.Measure = L.Draw.Polyline.extend({
  addHooks() {
    L.Draw.Polyline.prototype.addHooks.call(this);

    if (this._map) {
      this._markerGroup = new L.LayerGroup();
      this._map.addLayer(this._markerGroup);
      this._segments = [];
      this._markers = [];
      this._map.on('click', this._onClick, this);
      this._startShape();
    }
  },

  removeHooks() {
    L.Draw.Polyline.prototype.removeHooks.call(this);

    this._clearHideErrorTimeout();

    // !\ Still useful when control is disabled before any drawing (refactor needed?)
    this._map
      .off('pointermove', this._onMouseMove, this)
      .off('mousemove', this._onMouseMove, this)
      .off('click', this._onClick, this);

    this._clearGuides();
    this._container.style.cursor = '';

    this._removeShape();
  },

  _startShape() {
    this._drawing = true;

    this._poly = new L.Polyline([], this.options.shapeOptions);

    // this is added as a placeholder, if leaflet doesn't receive
    // this when the tool is turned off all onclick events are removed
    this._poly._onClick = () => {
    };

    this._container.style.cursor = 'crosshair';

    this._updateTooltip();

    this._map
      .on('pointermove', this._onMouseMove, this)
      .on('mousemove', this._onMouseMove, this);
  },

  _finishShape() {
    this._drawing = false;

    this._cleanUpShape();
    this._clearGuides();

    this._updateTooltip();

    this._map
      .off('pointermove', this._onMouseMove, this)
      .off('mousemove', this._onMouseMove, this);

    this._container.style.cursor = '';
  },

  _removeShape() {
    if (!this._poly) return;
    this._map.removeLayer(this._poly);
    delete this._poly;
    this._markers.splice(0);
    this._markerGroup.clearLayers();
    this._clearSegments();
  },

  _onClick(e) {
    if (this._markers.length > 1 && this._drawing) {
      this._addSegment();
      this._updateSegmentsTooltipNumber();
    }

    if (!this._drawing) {
      this._removeShape();
      this._startShape();
      this._map.fire("qgsmeasure:newmeasure");
    }
  },

  getSegments() {
    return this._segments;
  },

  _updateSegmentsTooltipNumber() {
    let i = 1;
    for (const marker of this._markers) {
      marker.bindTooltip(`${i}`, {
        permanent: true,
        offset: L.point(6, 0),
        opacity: 1,
      })
        .openTooltip();

      i += 1;
    }
  },

  _addSegment() {
    let A = this._markers.at(-2)
      .getLatLng();

    let B = this._markers.at(-1)
      .getLatLng();

    const segmentDistance = this._map.distance(A, B);

    const newSegment = {
      from: this._markers.length - 1,
      to: this._markers.length,
      distance: segmentDistance,
    };

    this._segments.push(newSegment);

    this._map.fire("qgsmeasure:newsegment", {
      segment: newSegment,
      segments: this._segments,
    });
  },

  _clearSegments() {
    this._segments = [];
  },

  _getTooltipText() {
    let labelText = L.Draw.Polyline.prototype._getTooltipText.call(this);
    if (!this._drawing) {
      labelText.text = '';
    }
    return labelText;
  },
});
