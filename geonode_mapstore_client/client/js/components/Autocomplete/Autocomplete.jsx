/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import SelectInfiniteScroll from '@js/components/SelectInfiniteScroll/SelectInfiniteScroll';
import tooltip from '@mapstore/framework/components/misc/enhancers/tooltip';
import FaIcon from '@js/components/FaIcon/FaIcon';

const IconWithTooltip = tooltip((props) => <div {...props}><FaIcon name="info-circle" /></div>);

const Autocomplete = ({
    className,
    description,
    helpTitleIcon,
    id,
    labelKey,
    name,
    title,
    value,
    valueKey,
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

    const defaultNewOptionCreator  = (option) => ({
        [valueKey]: option.label,
        [labelKey]: option.label
    });

    return (
        <div className={`autocomplete${className ? " " + className : ""}`}>
            <div className="title-container">
                <label className="control-label" htmlFor={id}>{title || name}</label>
                {helpTitleIcon && !isEmpty(description) && <IconWithTooltip className="help-title" tooltip={description} tooltipPosition={"right"} />}
            </div>
            <SelectInfiniteScroll
                {...props}
                id={id}
                value={getValue()}
                valueKey={valueKey}
                labelKey={labelKey}
                {...props.creatable && {
                    newOptionCreator: props.newOptionCreator ?? defaultNewOptionCreator
                }}
            />
        </div>
    );
};

Autocomplete.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
    helpTitleIcon: PropTypes.bool,
    id: PropTypes.string.isRequired,
    labelKey: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.any.isRequired,
    valueKey: PropTypes.string
};

export default Autocomplete;
