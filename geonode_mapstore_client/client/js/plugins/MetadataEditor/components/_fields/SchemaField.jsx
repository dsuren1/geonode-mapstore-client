/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import axios from '@mapstore/framework/libs/ajax';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isString from 'lodash/isString';
import get from 'lodash/get';
import Autocomplete from '@js/components/Autocomplete/Autocomplete';
import DefaultSchemaField from '@rjsf/core/lib/components/fields/SchemaField';

/**
 * `SchemaField` is an enhanced component that overrides `@rjsf`'s default `SchemaField`
 * - Customizes the rendering of object and array fields with custom functionality, such as support for autocomplete fields.
 * - Provides `onChange` handlers to update `formData` dynamically.
 * - Fallback to the default `SchemaField` from `@rjsf` when no custom rendering is needed.
 */
const SchemaField = (props) => {
    const {
        onChange,
        schema,
        formData,
        idSchema,
        name,
        hideError,
        errorSchema,
        uiSchema
    } = props;
    const autocomplete = uiSchema?.['ui:options']?.['geonode-ui:autocomplete'];
    const isSchemaItemString = schema?.items?.type === 'string';
    const isSchemaItemObject = schema?.items?.type === 'object';
    const isMultiSelect = schema?.type === 'array' && (isSchemaItemString ||
        (isSchemaItemObject && !isEmpty(schema?.items?.properties))
    );
    const isSingleSelect = schema?.type === 'object' && !isEmpty(schema?.properties);

    if (autocomplete && (isMultiSelect || isSingleSelect)) {
        const errors = !hideError ? isArray(errorSchema)
            ? errorSchema.map(error => get(error, 'id.__errors', [])).flat()
            : get(errorSchema, '__errors', []) : [];
        const autocompleteOptions = isString(autocomplete)
            ? { url: autocomplete }
            : autocomplete;
        const autocompleteUrl = autocompleteOptions?.url;
        const queryKey = autocompleteOptions?.queryKey || 'q';
        const resultsKey = autocompleteOptions?.resultsKey || 'results';
        const valueKey = autocompleteOptions?.valueKey || 'id';
        const labelKey = autocompleteOptions?.labelKey || 'label';
        const placeholder = autocompleteOptions?.placeholder ?? '...';
        const creatable = !!autocompleteOptions?.creatable;

        let autoCompleteProps = {
            className: "gn-metadata-autocomplete",
            clearable: !isMultiSelect,
            creatable,
            id: idSchema.$id,
            labelKey,
            multi: isMultiSelect,
            name,
            placeholder,
            title: schema.title,
            value: formData,
            valueKey,
            helpTitleIcon: true,
            description: schema.description,
            onChange: (selected) => {
                let _selected = selected?.result ?? null;
                if (isMultiSelect) {
                    _selected = selected.map(({ result, ...option }) => {
                        if (result === undefined) {
                            return option;
                        }
                        return isString(result)
                            ? result
                            : isSchemaItemString
                                ? result[valueKey]
                                : Object.fromEntries(
                                    Object.keys(schema.items?.properties)
                                        .map((key) => [key, result[key]])
                                );
                    });
                }
                onChange(_selected);
            },
            loadOptions: ({ q, config, ...params }) => {
                return axios.get(autocompleteUrl, {
                    ...config,
                    params: {
                        ...params,
                        ...(q && { [queryKey]: q }),
                        page: params.page
                    }
                })
                    .then(({ data }) => {
                        return {
                            isNextPageAvailable: !!data.pagination?.more,
                            results: data?.[resultsKey].map((result) => {
                                return {
                                    selectOption: {
                                        result,
                                        [valueKey]: isString(result) ? result : result[valueKey],
                                        [labelKey]: isString(result) ? result : result[labelKey]
                                    }
                                };
                            })
                        };
                    });
            },
            error: isEmpty(errors) ? null : <ul>
                {errors.map((error, idx) => {
                    return (
                        <li key={idx} className="gn-error-message">
                            {error}
                        </li>
                    );
                })}
            </ul>
        };

        return <Autocomplete {...autoCompleteProps}/>;
    }
    return <DefaultSchemaField {...props}/>;
};

export default SchemaField;
