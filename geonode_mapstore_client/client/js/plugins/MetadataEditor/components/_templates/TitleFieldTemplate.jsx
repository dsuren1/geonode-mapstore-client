/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

const TitleFieldTemplate = (props) => {
    const { id, required, title } = props;
    return (
        <div className="gn-metadata-form-title" id={id}>
            {title}
            {required && <mark>*</mark>}
        </div>
    );
};

export default TitleFieldTemplate;
