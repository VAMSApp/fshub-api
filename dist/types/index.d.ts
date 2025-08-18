/**
 * FSHub API Types and Interfaces
 */
export interface FSHubConfig {
    baseURL?: string;
    apiKey?: string;
    timeout?: number;
    headers?: Record<string, string>;
}
export interface FSHubResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}
export interface FSHubError {
    message: string;
    status?: number;
    code?: string;
    details?: any;
}
export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}
export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    errors?: string[];
}
export interface User {
    id: string;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    role: UserRole;
}
export declare enum UserRole {
    USER = "user",
    ADMIN = "admin",
    MODERATOR = "moderator"
}
export interface Flight {
    id: string;
    callsign: string;
    aircraft: Aircraft;
    departure: Airport;
    arrival: Airport;
    status: FlightStatus;
    pilot: User;
    createdAt: string;
    updatedAt: string;
    departureTime?: string;
    arrivalTime?: string;
    route?: string;
    altitude?: number;
    speed?: number;
    distance?: number;
}
export declare enum FlightStatus {
    SCHEDULED = "scheduled",
    BOARDING = "boarding",
    DEPARTED = "departed",
    EN_ROUTE = "en_route",
    APPROACHING = "approaching",
    LANDED = "landed",
    CANCELLED = "cancelled",
    DELAYED = "delayed"
}
export interface Aircraft {
    id: string;
    registration: string;
    type: string;
    model: string;
    manufacturer: string;
    year?: number;
    capacity?: number;
    maxRange?: number;
    maxSpeed?: number;
    fuelCapacity?: number;
    image?: string;
}
export interface Airport {
    id: string;
    icao: string;
    iata?: string;
    name: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    elevation?: number;
    timezone: string;
    type: AirportType;
}
export declare enum AirportType {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    INTERNATIONAL = "international"
}
export interface FlightQueryParams {
    page?: number;
    limit?: number;
    status?: FlightStatus;
    pilotId?: string;
    aircraftId?: string;
    departureIcao?: string;
    arrivalIcao?: string;
    dateFrom?: string;
    dateTo?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface AircraftQueryParams {
    page?: number;
    limit?: number;
    manufacturer?: string;
    type?: string;
    registration?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface AirportQueryParams {
    page?: number;
    limit?: number;
    country?: string;
    city?: string;
    icao?: string;
    iata?: string;
    type?: AirportType;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface UserQueryParams {
    page?: number;
    limit?: number;
    role?: UserRole;
    isActive?: boolean;
    search?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface LoginCredentials {
    email: string;
    password: string;
}
export interface RegisterData {
    username: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
export interface AuthResponse {
    user: User;
    token: string;
    refreshToken?: string;
    expiresAt: string;
}
export interface FlightStats {
    totalFlights: number;
    totalDistance: number;
    totalHours: number;
    averageFlightTime: number;
    mostFrequentAircraft: Aircraft;
    mostFrequentRoute: {
        departure: string;
        arrival: string;
        count: number;
    };
}
export interface UserStats {
    userId: string;
    totalFlights: number;
    totalDistance: number;
    totalHours: number;
    averageFlightTime: number;
    favoriteAircraft: Aircraft;
    favoriteRoute: {
        departure: string;
        arrival: string;
        count: number;
    };
}
//# sourceMappingURL=index.d.ts.map