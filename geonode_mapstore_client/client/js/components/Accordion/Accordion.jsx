/*
 * Copyright 2023, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, {useEffect, useState} from "react";
import uniq from 'lodash/uniq';
import isEmpty from 'lodash/isEmpty';
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
    emptyMsgId,
    identifier,
    content,
    loadItems,
    items
}) => {
    const isMounted = useIsMounted();

    const [accordionsExpanded, setAccordionsExpanded] = useLocalStorage('accordionsExpanded', []);
    const [accordionItems, setAccordionItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isScrollEnd, setScrollEnd] = useState(false);
    const [isNextPageAvailable, setIsNextPageAvailable] = useState(false);
    const [page, setPage] = useState(0);

    const isExpanded = accordionsExpanded.includes(identifier);

    const onClick = () => {
        const expandedList = isExpanded
            ? accordionsExpanded.filter(expanded => expanded !== identifier)
            : uniq(accordionsExpanded.concat(identifier));
        setAccordionsExpanded(expandedList);
    };
    const onLoadItems = () => {
        setLoading(true);
        loadItems({page})
            .then((res) => {
                isMounted(() => {
                    setAccordionItems(accordionItems.concat(res.items));
                    setIsNextPageAvailable(res.isNextPageAvailable);
                    res.isNextPageAvailable && setPage(page + 1);
                });
            })
            .finally(()=>
                isMounted(()=> setLoading(false))
            );
    };
    const resetState = () => {
        setAccordionItems([]);
        setPage(0);
        setScrollEnd(false);
        setIsNextPageAvailable(false);
    };
    useEffect(()=>{
        if (loadItems && typeof loadItems === 'function') {
            if (isExpanded && !loading) {
                onLoadItems();
            } else {
                resetState();
            }
        } else {
            setAccordionItems(items);
        }
    }, [loadItems, items, isExpanded, isScrollEnd]);

    const handleScroll = (event) => {
        const { scrollHeight, offsetHeight, scrollTop } = event?.target ?? {};
        if (isNextPageAvailable && !loading) {
            setScrollEnd(scrollHeight > offsetHeight && scrollHeight - offsetHeight - Math.ceil(scrollTop) <= 0);
        }
    };
    return (
        <div className={'gn-accordion'}>
            <div className="accordion-title" onClick={onClick}>
                <Button>
                    <FaIcon name={`chevron-${isExpanded ? "down" : "right"}`}/>
                </Button>
                {titleId ? <Message msgId={titleId}/> : title}
            </div>
            {isExpanded && <div className="accordion-body">
                <div className={'accordion-items'} onScroll={handleScroll}>
                    {isEmpty(accordionItems) && !loading
                        ? <Message msgId={emptyMsgId}/>
                        : content(accordionItems)
                    }
                    {loading && <Spinner/>}
                </div>
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
    content: null,
    emptyMsgId: "gnhome.emptyAccordion"
};
export default Accordion;
