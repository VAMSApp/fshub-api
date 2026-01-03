export type FSHubAirlineRole = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};
export type FSHubAirlineRank = {
    id: number;
    name: string;
    abbreviation: string;
    min_hours: number;
    created_at: string;
    updated_at: string;
};
export type FSHubAirlinePilotStatsRoles = {
    [key: string]: any;
};
export type FSHubAirlinePilotStatsUserProfile = {
    avatar_url: string;
    bio: string;
};
export type FSHubAirlinePilotStatsUserLocations = {
    base: string;
    locale: string;
};
export type FSHubAirlinePilotStatsUserHandles = {
    website: any;
    twitter: any;
    facebook: any;
    vatsim: any;
    ivao: any;
};
export type FSHubAirlinePilotStatsUser = {
    id: number;
    name: string;
    email: string;
    profile: FSHubAirlinePilotStatsUserProfile;
    locations: FSHubAirlinePilotStatsUserLocations;
    handles: FSHubAirlinePilotStatsUserHandles;
    timezone: string;
    country: string;
};
export type FSHubAirlinePilotStatsRank = {
    id: number;
    name: string;
    abbreviation: string;
    min_hours: number;
    created_at: string;
    updated_at: string;
};
export type FSHubAirlinePilotStatsLink = {
    rel: string;
    uri: string;
};
export type FSHubAirlinePilotStats = {
    user: FSHubAirlinePilotStatsUser;
    points: number;
    carry_hours: number;
    rank: FSHubAirlinePilotStatsRank;
    roles: FSHubAirlinePilotStatsRoles[];
    hired_at: string;
    discord_id: number;
    links: FSHubAirlinePilotStatsLink[];
};
//# sourceMappingURL=FSHubAirline.d.ts.map