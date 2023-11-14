/** @jsxImportSource @emotion/react */
import React from "react";
import moment from "moment-timezone";
import { TooltipProps, TooltipState } from './types/tooltip';
export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
    constructor(props: TooltipProps);
    static getTimeDisplay(startTime: moment.Moment, endTime: moment.Moment, allDay: boolean): string;
    render(): import("@emotion/react/jsx-runtime").JSX.Element;
}
