/*
 * Copyright 2023, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useEffect, useState} from "react";
import uniq from 'lodash/uniq';
import PropTypes from "prop-types";

import Button from "@js/components/Button";
import FaIcon from "@js/components/FaIcon";
import useLocalStorage from "@js/hooks/useLocalStorage";
import Message from "@mapstore/framework/components/I18N/Message";
import Spinner from "@js/components/Spinner";
import useIsMounted from "@js/hooks/useIsMounted";

const Accordion = ({
    title,
    titleId,
    identifier,
    content,
    loadItems,
    items
}) => {
    const isMounted = useIsMounted();
    const [accordionsExpanded, setAccordionsExpanded] = useLocalStorage('accordionsExpanded', []);
    const [accordionItems, setAccordionItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const isExpanded = accordionsExpanded.includes(identifier);
    const onClick = () => {
        const expandedList = isExpanded
            ? accordionsExpanded.filter(expanded => expanded !== identifier)
            : uniq(accordionsExpanded.concat(identifier));
        setAccordionsExpanded(expandedList);
    };
    useEffect(()=>{
        if (loadItems && typeof loadItems === 'function') {
            if (isExpanded) {
                setLoading(true);
                loadItems().then((_items) =>{
                    isMounted(() =>setAccordionItems(_items));
                }).finally(()=> isMounted(()=>setLoading(false)));
            }
        } else {
            setAccordionItems(items);
        }
    }, [loadItems, items, isExpanded]);
    return (
        <div className={'gn-accordion'}>
            <div className="accordion-title" onClick={onClick}>
                <Button>
                    <FaIcon name={`chevron-${isExpanded ? "down" : "right"}`}/>
                </Button>
                {titleId ? <Message msgId={titleId}/> : title}
            </div>
            {isExpanded && <div className="accordion-body">
                {loading ? <Spinner/> : content(accordionItems)}
            </div>}
        </div>
    );
};

Accordion.propTypes = {
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    titleId: PropTypes.string,
    identifier: PropTypes.string,
    content: PropTypes.node,
    loadItems: PropTypes.func,
    items: PropTypes.array
};

Accordion.defaultProps = {
    title: null,
    identifier: "",
    content: null
};
export default Accordion;
