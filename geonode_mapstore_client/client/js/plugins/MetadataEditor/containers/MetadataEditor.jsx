/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from 'react';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import { Alert } from 'react-bootstrap';
import { getMetadataByPk } from '@js/api/geonode/v2/metadata';
import Message from '@mapstore/framework/components/I18N/Message';
import widgets from '../components/_widgets';
import templates from '../components/_templates';
import fields from '../components/_fields';
import MainEventView from '@js/components/MainEventView';
import MainLoader from '@js/components/MainLoader';

function MetadataEditor({
    pk,
    loading,
    error,
    metadata,
    schema,
    uiSchema,
    updateError,
    setLoading,
    setError,
    setUISchema,
    setSchema,
    setMetadata,
    setInitialMetadata,
    setUpdateError,
    setResource
}) {

    useEffect(() => {
        if (pk) {
            setLoading(true);
            setError(false);
            getMetadataByPk(pk)
                .then((payload) => {
                    setUISchema(payload.uiSchema);
                    setSchema(payload.schema);
                    setMetadata(payload.metadata);
                    setInitialMetadata(payload.metadata);
                    setResource(payload.resource);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [pk]);

    function handleChange(formData) {
        setUpdateError(false);
        setMetadata(formData);
    }

    if (loading) {
        return (<MainLoader />);
    }

    if (error) {
        return (<MainEventView msgId={'gnviewer.metadataNotFound'} />);
    }

    if (!metadata && !schema) {
        return null;
    }

    return (
        <div className="gn-metadata">
            <div className="gn-metadata-header">
                {updateError && <Alert bsStyle="danger" style={{ margin: '0.25rem 0' }}>
                    <Message msgId="gnviewer.metadataUpdateError" />
                </Alert>}
            </div>
            <div className="gn-metadata-container">
                <Form
                    liveValidate
                    formContext={{
                        title: metadata?.title
                    }}
                    schema={schema}
                    widgets={widgets}
                    uiSchema={uiSchema}
                    formData={metadata}
                    validator={validator}
                    templates={templates}
                    fields={fields}
                    experimental_defaultFormStateBehavior={{
                        arrayMinItems: {
                            populate: 'never',
                            mergeExtraDefaults: false
                        }
                    }}
                    onChange={({ formData }, id) => {
                        if (id) {
                            handleChange(formData);
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default MetadataEditor;
