import { Moment } from "moment-timezone";
/** determines whether event is an all day event
  * @param {moment} startTime start of event
  * @param {moment} endTime end of event
  * @return {boolean} Whether or not it is an all day event
  */
export declare function isAllDay(startTime: Moment, endTime: Moment): boolean;
/** get google calendar link to copy event
  * @param {moment} startTime start of event
  * @param {moment} endTime end of event
  * @param {string} name name of event
  * @param {string} description description of event
  * @param {string} location location of event
  * @param {boolean} allDay whether or not it is an all day event
  * @return {string} url of the link
  */
export declare function getCalendarURL(startTime: Moment, endTime: Moment, name: string, description?: string, location?: string, allDay?: boolean): string;
/** determines whether or not it is rendered as a single event or multi event (based on google calendar way)
 * true if duration is at least 24 hours or ends after 12pm on the next day
 * @param {moment} startTime
 * @param {moment} endTime
 * @return {boolean} whether or not it is a single event
 */
export declare function isMultiEvent(startTime: Moment, endTime: Moment): boolean;
export declare function pSBC(p: any, c0: any, c1?: any, l?: any): string;
