/*
 * Copyright 2023, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useEffect, useState, useRef} from "react";
import uniq from 'lodash/uniq';
import isEmpty from 'lodash/isEmpty';
import PropTypes from "prop-types";

import Button from "@js/components/Button";
import FaIcon from "@js/components/FaIcon";
import useLocalStorage from "@js/hooks/useLocalStorage";
import Message from "@mapstore/framework/components/I18N/Message";
import Spinner from "@js/components/Spinner";
import useIsMounted from "@js/hooks/useIsMounted";

const AccordionTitle = ({
    expanded,
    hideIcon,
    onClick,
    loading,
    children
}) => {

    return (
        <div className="accordion-title" onClick={onClick}>
            <div className="accordion-title-label">
                {children}
                <Button onClick={onClick} style={{ display: 'block', width: 0, height: 0, overflow: 'hidden', opacity: 0, padding: 0, margin: 0 }}/>
            </div>
            {loading
                ? <Spinner/>
                : !hideIcon && <FaIcon name={`caret-${expanded ? "down" : "left"}`}/>
            }
        </div>
    );
};

/**
 * Accordion component
 * @prop {string} title of the accordion
 * @prop {string} titleId translation path of the title on the accordion
 * @prop {string} noItemsMsgId default message when no items present
 * @prop {string} identifier string
 * @prop {function} content function to render child items
 * @prop {function} loadItems function to fetch accordion items
 * @prop {array} items accordion items available without the need to fetch
 * @prop {string} query string
 * @prop {boolean} defaultExpanded flag to expand the accordion on load by default
 * @prop {boolean} expanded flag to keep accordion stay expanded and disable toggle function on the accordion (Note: Not on accordion items)
 */
const Accordion = ({
    title,
    titleId,
    noItemsMsgId,
    identifier,
    content,
    loadItems,
    items,
    query,
    defaultExpanded,
    expanded: keepExpanded
}) => {
    const isMounted = useIsMounted();
    const clickRef = useRef();

    const [accordionsExpanded, setAccordionsExpanded] = useLocalStorage('accordionsExpanded', []);
    const [accordionItems, setAccordionItems] = useState(items);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if ((defaultExpanded || keepExpanded)
            && !clickRef.current
            && (isEmpty(accordionsExpanded) || !accordionsExpanded.includes(identifier))
        ) {
            isMounted(() => setAccordionsExpanded(uniq(accordionsExpanded.concat(identifier))));
        }
    }, [defaultExpanded, keepExpanded, accordionItems, accordionsExpanded]);

    const isExpanded = accordionsExpanded.includes(identifier);

    const onClick = () => {
        clickRef.current = true;
        const expandedList = keepExpanded
            ? accordionsExpanded
            : isExpanded
                ? accordionsExpanded.filter(accordionExpanded => accordionExpanded !== identifier)
                : uniq(accordionsExpanded.concat(identifier));
        setAccordionsExpanded(expandedList);
    };
    useEffect(() => {
        if (loadItems && typeof loadItems === 'function') {
            if (isExpanded && !loading) {
                setLoading(true);
                loadItems({ page_size: 999999 })
                    .then((response) =>{
                        isMounted(() => setAccordionItems(response.items));
                    })
                    .finally(()=> isMounted(() => setLoading(false)));
            }
        }
    }, [isExpanded, query]);

    return (
        <div className={'gn-accordion'}>
            <AccordionTitle
                expanded={isExpanded}
                onClick={onClick}
                loading={loading}
                hideIcon={keepExpanded}
            >
                {titleId ? <Message msgId={titleId}/> : title}
            </AccordionTitle>
            {isExpanded ? <div className="accordion-body">
                <div className={'accordion-items'}>
                    {loading ? null : !isEmpty(accordionItems)
                        ? content(accordionItems)
                        : !loading ? <Message msgId={noItemsMsgId}/> : null
                    }
                </div>
            </div> : null}
        </div>
    );
};

Accordion.propTypes = {
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    titleId: PropTypes.string,
    identifier: PropTypes.string,
    noItemsMsgId: PropTypes.string,
    content: PropTypes.func,
    loadItems: PropTypes.func,
    items: PropTypes.array,
    query: PropTypes.object,
    defaultExpanded: PropTypes.bool,
    expanded: PropTypes.bool
};

Accordion.defaultProps = {
    title: null,
    identifier: "",
    content: () => null,
    noItemsMsgId: "gnhome.emptyAccordion"
};
export default Accordion;
