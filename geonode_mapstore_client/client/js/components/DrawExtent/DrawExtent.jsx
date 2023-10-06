/*
 * Copyright 2023, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { useEffect } from 'react';
import VectorSource from "ol/source/Vector";
import Draw, { createBox } from "ol/interaction/Draw";
import { Select, Translate } from "ol/interaction";
import PropTypes from 'prop-types';
import { Fill, Stroke, Style } from "ol/style";
import { reprojectBbox } from '@mapstore/framework/utils/CoordinatesUtils';

const drawInteraction = new Draw({
    source: new VectorSource({wrapX: false}),
    type: 'Circle',
    geometryFunction: createBox(),
    style: new Style({
        fill: new Fill({
            color: "rgba(255, 170, 1, 0.1)"
        }),
        stroke: new Stroke({
            color: "#ffaa01",
            width: 2
        })
    })
});

const getFeatureExtent = (evt) => {
    let geometry;
    if (evt.type === 'drawend') {
        const feature = evt.feature.clone();
        geometry = feature.getGeometry();
    } else {
        const features = evt.features.getArray();
        geometry = features.find(ft => ft.getGeometry().getType() === "Polygon")?.getGeometry() || {};
    }
    return geometry.getCoordinates ? geometry.getExtent() : null;
};

const DrawExtext = ({map, onSetExtent, translateInteraction = true} = {}) => {
    useEffect(() => {
        let draw;
        let select;
        let translate;
        if (map) {
            const projection = map.getView().getProjection().getCode();
            draw = drawInteraction;
            draw.on('drawend', (evt) => {
                const extent = getFeatureExtent(evt);
                if (extent) {
                    onSetExtent(reprojectBbox(extent, projection, 'EPSG:4326'));
                }
            });
            map.on('pointermove', function(e) {
                const hasFeature = map.hasFeatureAtPixel(e.pixel);
                map.getViewport().style.cursor = hasFeature && !e.dragging ? 'pointer' : '';
            });
            map.addInteraction(draw);

            if (translateInteraction) {
                select = new Select({
                    multi: true,
                    condition: (event) => event.type === 'pointermove' && !event.dragging
                });
                translate = new Translate({features: select.getFeatures()});
                translate.on('translateend', (evt) => {
                    const extent = getFeatureExtent(evt);
                    if (extent) {
                        onSetExtent(reprojectBbox(extent, projection, 'EPSG:4326'));
                    }
                });
                map.addInteraction(select);
                map.addInteraction(translate);
            }
        }
        return () => {
            map.removeInteraction(draw);
            if (translateInteraction) {
                map.removeInteraction(select);
                map.removeInteraction(translate);
            }
        };
    }, []);
    return null;
};

DrawExtext.propTypes = {
    map: PropTypes.object,
    onSetExtent: PropTypes.func,
    translateInteraction: PropTypes.bool
};

DrawExtext.defaultProps = {
    onSetExtent: () => {}
};

export default DrawExtext;
