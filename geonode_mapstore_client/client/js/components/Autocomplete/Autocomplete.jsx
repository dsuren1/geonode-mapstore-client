/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import isArray from 'lodash/isArray';
import PropTypes from 'prop-types';

import SelectInfiniteScroll from '@js/components/SelectInfiniteScroll/SelectInfiniteScroll';

const Autocomplete = ({
    className,
    clearable = false,
    id,
    labelKey,
    multi = false,
    name,
    title,
    value,
    valueKey,
    placeholder,
    onChange,
    onLoadOptions,
    ...props
}) => {
    const getValue = () => {
        if (value && isArray(value) && valueKey && labelKey) {
            return value.map((entry) => {
                return {
                    result: entry,
                    value: entry[valueKey],
                    label: entry[labelKey]
                };
            });
        }
        return value;
    };
    return (
        <div className={`autocomplete${className ? " " + className : ""}`}>
            <label className="control-label" htmlFor={id}>{title || name}</label>
            <SelectInfiniteScroll
                {...props}
                id={id}
                value={getValue()}
                multi={multi}
                clearable={clearable}
                placeholder={placeholder}
                loadOptions={onLoadOptions}
                onChange={onChange}
            />
        </div>
    );
};

Autocomplete.propTypes = {
    className: PropTypes.string,
    clearable: PropTypes.bool,
    id: PropTypes.string.isRequired,
    labelKey: PropTypes.string,
    multi: PropTypes.bool,
    name: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.any.isRequired,
    valueKey: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onLoadOptions: PropTypes.func.isRequired
};

export default Autocomplete;
