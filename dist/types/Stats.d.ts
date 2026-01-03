import { Link } from './Common';
export type PilotStat = {
    total_flights: number;
    total_hours: number;
    total_distance: number;
    average_landing: number;
};
export type PilotStats = {
    id: number;
    all_time: PilotStat;
    month: PilotStat;
    links: Link[];
};
export type AirlineStats = {
    id: number;
    total_pilots: number;
    all_time: PilotStat;
    month: PilotStat;
    links: Link[];
};
//# sourceMappingURL=Stats.d.ts.map