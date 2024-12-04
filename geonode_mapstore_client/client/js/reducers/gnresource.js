/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';

import {
    RESOURCE_LOADING,
    SET_RESOURCE,
    RESOURCE_ERROR,
    UPDATE_RESOURCE_PROPERTIES,
    SET_RESOURCE_TYPE,
    SET_NEW_RESOURCE,
    SET_RESOURCE_ID,
    SET_RESOURCE_PERMISSIONS,
    EDIT_TITLE_RESOURCE,
    EDIT_ABSTRACT_RESOURCE,
    EDIT_THUMBNAIL_RESOURCE,
    SET_RESOURCE_THUMBNAIL,
    SET_SELECTED_DATASET_PERMISSIONS,
    RESET_RESOURCE_STATE,
    LOADING_RESOURCE_CONFIG,
    RESOURCE_CONFIG_ERROR,
    SET_RESOURCE_COMPACT_PERMISSIONS,
    UPDATE_RESOURCE_COMPACT_PERMISSIONS,
    RESET_GEO_LIMITS,
    ENABLE_MAP_THUMBNAIL_VIEWER,
    SET_RESOURCE_EXTENT,
    SET_RESOURCE_PATH_PARAMETERS,
    SET_MAP_VIEWER_LINKED_RESOURCE,
    SET_DEFAULT_VIEWER_PLUGINS,
    SET_SELECTED_LAYER,
    UPDATE_LAYER_DATASET,
    SET_SELECTED_LAYER_DATASET
} from '@js/actions/gnresource';
import {
    cleanCompactPermissions,
    getGeoLimitsFromCompactPermissions,
    getResourceAdditionalProperties
} from '@js/utils/ResourceUtils';

const defaultState = {
    selectedLayerPermissions: [],
    data: {},
    permissions: []
};

function gnresource(state = defaultState, action) {
    switch (action.type) {
    case RESET_RESOURCE_STATE: {
        return defaultState;
    }
    case LOADING_RESOURCE_CONFIG: {
        return {
            ...state,
            configError: undefined,
            loadingResourceConfig: action.loading
        };
    }
    case RESOURCE_CONFIG_ERROR: {
        return {
            ...state,
            loading: false,
            configError: action.message
        };
    }
    case RESOURCE_LOADING: {
        return {
            ...state,
            loading: true
        };
    }
    case SET_RESOURCE: {
        const actionData = getResourceAdditionalProperties(action.data || {});
        const { data, ...resource } = actionData;
        let updatedResource = {...resource};
        const linkedResources = state.data?.linkedResources;
        if (!isEmpty(linkedResources) && updatedResource.pk === state.data?.pk) {
            updatedResource.linkedResources = linkedResources;
        }

        return {...state,
            error: null,
            initialResource: { ...actionData },
            data: updatedResource,
            loading: false,
            isNew: false
        };
    }
    case RESOURCE_ERROR: {
        return {
            ...state,
            initialResource: null,
            data: null,
            error: action.error,
            loading: false
        };
    }
    case UPDATE_RESOURCE_PROPERTIES: {
        return {
            ...state,
            data: {
                ...state.data,
                ...action.properties
            }
        };
    }
    case SET_RESOURCE_TYPE: {
        return {
            ...state,
            type: action.resourceType
        };
    }
    case SET_NEW_RESOURCE: {
        return {
            ...defaultState,
            isNew: true
        };
    }
    case SET_RESOURCE_ID: {
        return {
            ...state,
            id: action.id
        };
    }
    case SET_RESOURCE_PERMISSIONS: {
        return {
            ...state,
            permissions: action.permissions
        };
    }

    case EDIT_TITLE_RESOURCE: {
        return {
            ...state,
            data: {
                ...state?.data,
                title: action?.title,
                name: action?.title
            }
        };
    }

    case EDIT_ABSTRACT_RESOURCE: {
        return {
            ...state,
            data: {
                ...state?.data,
                "abstract": action?.abstract
            }
        };
    }

    case EDIT_THUMBNAIL_RESOURCE: {
        return {
            ...state,
            data: {
                ...state?.data,
                thumbnail_url: action?.thumbnailUrl,
                thumbnailChanged: action?.thumbnailChanged
            }
        };
    }

    case SET_RESOURCE_THUMBNAIL: {
        return {
            ...state,
            data: {
                ...state?.data,
                updatingThumbnail: true
            }
        };
    }

    case ENABLE_MAP_THUMBNAIL_VIEWER: {
        return {
            ...state,
            showMapThumbnail: action.enabled
        };
    }

    case SET_SELECTED_DATASET_PERMISSIONS:
        return {
            ...state,
            selectedLayerPermissions: action.permissions
        };

    case SET_RESOURCE_COMPACT_PERMISSIONS:
        return {
            ...state,
            initialCompactPermissions: action.compactPermissions,
            compactPermissions: action.compactPermissions,
            isCompactPermissionsChanged: false,
            geoLimits: []
        };

    case UPDATE_RESOURCE_COMPACT_PERMISSIONS:
        return {
            ...state,
            compactPermissions: action.compactPermissions,
            isCompactPermissionsChanged: !isEqual(
                cleanCompactPermissions(state.initialCompactPermissions),
                cleanCompactPermissions(action.compactPermissions)
            ),
            geoLimits: getGeoLimitsFromCompactPermissions(action.compactPermissions)
        };
    case RESET_GEO_LIMITS:
        if (state.compactPermissions) {
            const { users, organizations, groups } = state.compactPermissions;
            return {
                ...state,
                compactPermissions: {
                    users: users.map(({ features, ...properties }) => properties),
                    organizations: organizations.map(({ features, ...properties }) => properties),
                    groups: groups.map(({ features, ...properties }) => properties)
                },
                geoLimits: []
            };
        }
        return state;
    case SET_RESOURCE_EXTENT:
        return {
            ...state,
            data: {
                ...state.data,
                extent: {
                    ...state.data?.extent,
                    coords: action.coords
                }
            }
        };
    case SET_RESOURCE_PATH_PARAMETERS:
        return {
            ...state,
            params: action.params
        };
    case SET_MAP_VIEWER_LINKED_RESOURCE:
        return {
            ...state,
            viewerLinkedResource: { ...getResourceAdditionalProperties(omit(action.resource, ['data'])) }
        };
    case SET_DEFAULT_VIEWER_PLUGINS:
        return {
            ...state,
            defaultViewerPlugins: action.plugins
        };
    case SET_SELECTED_LAYER:
        return {
            ...state,
            selectedLayer: action.layer
        };
    case SET_SELECTED_LAYER_DATASET:
        return {
            ...state,
            selectedLayerDataset: state.data?.maplayers?.find(layer => layer.dataset?.pk === parseInt(action.layerId, 10))?.dataset
        };
    case UPDATE_LAYER_DATASET:
        const { pk, ...newData } = action.layer;
        let linkedResources = action.layer.linked_resources ?? {};
        if (!isEmpty(linkedResources)) {
            const linkedTo = linkedResources.linked_to ?? [];
            const linkedBy = linkedResources.linked_by ?? [];
            linkedResources = isEmpty(linkedTo) && isEmpty(linkedBy) ? {} : ({ linkedTo, linkedBy });
        }
        return {
            ...state,
            data: {
                ...state.data,
                maplayers: state.data?.maplayers?.map(layer => {
                    if (layer.dataset?.pk === parseInt(pk, 10)) {
                        return {
                            ...layer,
                            dataset: {
                                ...layer.dataset,
                                ...newData,
                                linkedResources
                            }
                        };
                    }
                    return layer;
                })
            }
        };
    default:
        return state;
    }
}

export default gnresource;
