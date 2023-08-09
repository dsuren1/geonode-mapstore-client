/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { isDocumentExternalSource } from '@js/utils/ResourceUtils';
import Message from '@mapstore/framework/components/I18N/Message';
import Button from '@js/components/Button';
import Dropdown from '@js/components/Dropdown';
import FaIcon from '@js/components/FaIcon';
import {
    getResourceData
} from '@js/selectors/resource';
import { downloadResource } from '@js/actions/gnresource';

const RENDER_TYPE = {
    "button": Button,
    "menuItem": Dropdown.Item,
    "href": Button
};

const DownloadButton = ({
    resource,
    resourceData,
    variant,
    size,
    onAction = () => {},
    renderType = "button",
    children
}) => {
    const Component =  RENDER_TYPE[renderType];
    const isButton = renderType !== "menuItem";
    const isHref = renderType === "href";
    const _resource = resource ?? resourceData;

    if (!(_resource?.download_url && _resource?.perms?.includes('download_resourcebase')) || (!isButton && isDocumentExternalSource(_resource))) {
        return null;
    }

    return (
        <Component
            onClick={() => onAction(_resource)}
            {...isButton && { variant, size}}
            {...isHref && {
                download: `${_resource?.title}.${_resource?.extension}`,
                href: _resource?.href,
                rel: "noopener noreferrer"
            }}
        >
            {children
                ? children
                : (
                    <>
                        {!isButton ? <><FaIcon name="download" />&nbsp;</> : null}
                        <Message msgId="gnviewer.download" />
                    </>
                )
            }
        </Component>
    );
};

const DownloadResource = connect(
    createSelector([ getResourceData], (resourceData) => ({ resourceData })),
    {
        onAction: downloadResource
    }
)(DownloadButton);

/**
* @module DownloadResource
*/

/**
 * enable button or menu item to download a specific resource
 * @name DownloadResource
 * @example
 * {
 *  "name": "DownloadResource"
 * }
 */
export default createPlugin('DownloadResource', {
    component: DownloadResource,
    containers: {
        ActionNavbar: {
            name: 'DownloadResource',
            Component: (props) => <DownloadResource {...props} renderType="href"/>,
            priority: 1
        },
        ResourcesGrid: {
            name: 'downloadResource',
            targets: [{
                target: 'cardOptions',
                Component: (props) => <DownloadResource {...props} renderType="menuItem"/>
            }, {
                target: 'detailsPanel',
                Component: DownloadResource
            }],
            priority: 1
        },
        DetailViewer: {
            name: 'DownloadResource',
            Component: DownloadResource,
            priority: 1
        }
    },
    epics: {},
    reducers: {}
});
