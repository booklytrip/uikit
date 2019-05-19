/**
 * Manage state of popup and allow it to be
 * oppened only if condition return true
 *
 * Usage:
 *   const ConditinalPopup = popupCondition(Popup);
 *   <ConditinalPopup condition={true} />
 *
 * The Popup will be provided with "open" state and
 * two events: onClose and onOpen to manage state.
 *
 * @flow
 */

import { compose, withHandlers, withState } from 'recompose';

// Manage state of the popup(oppened / closed)
const state = withState('open', 'setOpen', false);

const handlers = {
    onClose: ownProps => () => {
        ownProps.setOpen(false);
    },
    onOpen: ownProps => () => {
        if (ownProps.condition === true) {
            ownProps.setOpen(true);
        }
    },
};

export default compose(state, withHandlers(handlers));
