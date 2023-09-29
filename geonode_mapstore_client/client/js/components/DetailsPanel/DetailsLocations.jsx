/*
 * Copyright 2023, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import turfCenter from "@turf/center";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import get from "lodash/get";
import wk from 'wellknown';


import BaseMap from "@mapstore/framework/components/map/BaseMap";
import mapTypeHOC from "@mapstore/framework/components/map/enhancers/mapType";
import ZoomTo from "@js/components/ZoomTo/ZoomTo";
import { getPolygonFromExtent, bboxToFeatureGeometry } from "@mapstore/framework/utils/CoordinatesUtils";
import DrawSupport from "@js/components/DrawExtent";
import { Message } from "@mapstore/framework/components/I18N/I18N";
import tooltip from "@mapstore/framework/components/misc/enhancers/tooltip";
import CopyToClipboardCmp from 'react-copy-to-clipboard';
import Button from "@mapstore/framework/components/misc/Button";
import FaIcon from "@js/components/FaIcon/FaIcon";
import { setResourceExtent } from "@js/actions/gnresource";

const Map = mapTypeHOC(BaseMap);
Map.displayName = "Map";
const CopyToClipboard = tooltip(CopyToClipboardCmp);

const BoundingBoxAndCenter = ({extent, center, expand}) => {
    const [minx, miny, maxx, maxy] = extent || [];
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
    }, [copied]);
    return (
        <div className={`gn-location-info ${expand ? 'fullWidth' : ''}`}>
            <div className="bounds">
                <div className="title">
                    <Message msgId={"gnviewer.boundingBox"}/>
                    <CopyToClipboard
                        text={!isEmpty(extent) && wk.stringify(bboxToFeatureGeometry(extent))}
                    >
                        <Button
                            variant="default"
                            onClick={()=> setCopied(true)}>
                            <FaIcon name="copy" />
                        </Button>
                    </CopyToClipboard>
                </div>
                <div className="bounds-row">
                    <Message msgId="gnviewer.minLat"/>
                    {miny?.toFixed(6)}
                </div>
                <div className="bounds-row">
                    <Message msgId="gnviewer.minLon"/>
                    {minx?.toFixed(6)}
                </div>
                <div className="bounds-row">
                    <Message msgId="gnviewer.maxLat"/>
                    {maxy?.toFixed(6)}
                </div>
                <div className="bounds-row">
                    <Message msgId="gnviewer.maxLon"/>
                    {maxx?.toFixed(6)}
                </div>
            </div>
            <div className="center">
                <div className="title">
                    <Message msgId={"gnviewer.center"}/>
                    <CopyToClipboard
                        text={!isEmpty(center) && wk.stringify(center)}
                    >
                        <Button
                            variant="default"
                            onClick={()=> setCopied(true)}>
                            <FaIcon name="copy" />
                        </Button>
                    </CopyToClipboard>
                </div>
                <div className="center-row">
                    <Message msgId="gnviewer.centerLat"/>
                    {get(center, 'geometry.coordinates.[1]')?.toFixed(6)}
                </div>
                <div className="center-row">
                    <Message msgId="gnviewer.centerLon"/>
                    {get(center, 'geometry.coordinates.[0]')?.toFixed(6)}
                </div>
            </div>
        </div>
    );
};

const DetailsLocations = ({ onSetExtent, fields, allowEdit} = {}) => {
    const extent = get(fields, 'extent.coords');
    const initialExtent = get(fields, 'initialExtent.coords');

    const polygon = !isEmpty(extent) ? getPolygonFromExtent(extent) : null;
    const center = !isEmpty(extent) && polygon ? turfCenter(polygon) : null;
    const isDrawn = !isEqual(initialExtent, extent);

    return (
        <div className="gn-viewer-extent-map">
            <BoundingBoxAndCenter center={center} extent={extent} expand={!allowEdit}/>
            {allowEdit && <Map
                id="gn-locations-map"
                mapType={"openlayers"}
                map={{
                    registerHooks: false,
                    projection: "EPSG:4326"
                }}
                styleMap={{
                    width: "100%",
                    height: "100%"
                }}
                layers={[
                    {
                        type: 'osm',
                        title: 'Open Street Map',
                        name: 'mapnik',
                        source: 'osm',
                        group: 'background',
                        visibility: true
                    },
                    ...(!isEmpty(extent)
                        ? [
                            {
                                id: "extent-location",
                                type: "vector",
                                features: [
                                    {
                                        ...polygon,
                                        style: {
                                            color: isDrawn ? "#ffaa01" : "#397AAB",
                                            opacity: 0.8,
                                            fillColor: isDrawn
                                                ? "rgba(255, 170, 1, 0.1)"
                                                : "#397AAB",
                                            fillOpacity: 0.2,
                                            weight: 2
                                        }
                                    },
                                    {
                                        ...center,
                                        style: {
                                            iconGlyph: "sort-desc",
                                            iconShape: "circle",
                                            iconColor: isDrawn ? "yellow" : "blue"
                                        }
                                    }
                                ]
                            }
                        ]
                        : [])
                ]}
            >
                <ZoomTo extent={extent?.join(",")} />
                <DrawSupport onSetExtent={onSetExtent}/>
            </Map>
            }
        </div>
    );
};

const ConnectedDetailsLocations = connect(
    null,
    {
        onSetExtent: setResourceExtent
    }
)(DetailsLocations);

export default ConnectedDetailsLocations;
