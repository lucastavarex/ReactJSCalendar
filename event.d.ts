/** @jsxImportSource @emotion/react */
import React from "react";
import { EventProps, EventState } from './types/event';
export default class Event extends React.Component<EventProps, EventState> {
    constructor(props: EventProps);
    closeTooltip(): void;
    toggleTooltip(): void;
    render(): import("@emotion/react/jsx-runtime").JSX.Element;
}
