/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import isEmpty from "lodash/isEmpty";

import FaIcon from "@js/components/FaIcon/FaIcon";
import tooltip from "@mapstore/framework/components/misc/enhancers/tooltip";

const IconWithTooltip = tooltip((props) => <div {...props}><FaIcon name="info-circle" /></div>);

const DescriptionFieldTemplate = (props) => {
    const { description, id } = props;
    if (isEmpty(description)) {
        return null;
    }
    return (
        <IconWithTooltip
            className="gn-metadata-form-description"
            id={id}
            tooltip={description}
            tooltipPosition={"right"}
        />
    );
};

export default DescriptionFieldTemplate;
