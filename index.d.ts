/** @jsxImportSource @emotion/react */
import React from "react";
import { Moment } from "moment-timezone";
import { CalendarProps, CalendarState } from './types';
export default class Calendar extends React.Component<CalendarProps, CalendarState> {
    constructor(props: CalendarProps);
    componentDidMount(): Promise<void>;
    processEvents(items: any[], calendarName: string, color: string): any[];
    lastMonth(): void;
    nextMonth(): void;
    clearEvents(): void;
    renderDays(): import("@emotion/react/jsx-runtime").JSX.Element[];
    renderDates(eventsEachDay: any[]): any[];
    getRenderEvents(events: any[], singleEvents: any[]): never[][];
    drawMultiEvent(eventsEachDay: any[], props: any): void;
    renderMultiEventBlock(eventsEachDay: any[], startDate: any, length: number, props: any, arrowLeft: boolean, arrowRight: boolean): void;
    renderSingleEvent(eventsEachDay: any[], date: number, props: any): void;
    static getDatesFromRRule(str: string, eventStart: Moment, betweenStart: Moment, betweenEnd: Moment): Date[];
    render(): import("@emotion/react/jsx-runtime").JSX.Element;
}
