# FSHub API

A TypeScript HTTP API wrapper library for the FSHub REST API, providing a clean and type-safe interface for interacting with FSHub's flight simulation community platform.

## 📑 Table of Contents

- [🎯 Purpose](#-purpose)
- [🚀 Installation](#-installation)
- [📋 Prerequisites](#-prerequisites)
- [⚙️ Configuration](#️-configuration)
- [🔧 Basic Setup](#-basic-setup)
- [📖 Usage Examples](#-usage-examples)
  - [Pilot Operations](#pilot-operations)
  - [Airline Operations](#airline-operations)
- [🔍 Data Types](#-data-types)
- [🧪 Testing](#-testing)
- [🏗️ Development](#️-development)
- [📚 API Reference](#-api-reference)
  - [Pilot Methods](#pilot-methods)
  - [Airline Methods](#airline-methods)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🔗 Links](#-links)
- [🆘 Support](#-support)

## 🎯 Purpose

This library simplifies integration with the FSHub API by providing:
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Clean Interface**: Simple, intuitive methods for all FSHub API endpoints
- **Error Handling**: Built-in error handling and response validation
- **Modern JavaScript**: Built with modern ES modules and async/await patterns

## 🚀 Installation

```bash
npm install fshub-api
```

## 📋 Prerequisites

- Node.js 18+ 
- A valid FSHub API key (get one from [FSHub](https://fshub.io))

## ⚙️ Configuration

Optionally. create a `.env` file in your project root:

```env
FSHUB_API_KEY=your_api_key_here
```

## 🔧 Basic Setup

```typescript
import FSHubApi from 'fshub-api';

const api = new FSHubApi({
    apiKey: process.env.FSHUB_API_KEY,
    // Optional configurations:
    baseURL: 'https://fshub.io/api/v3/', // Default
    timeout: 10000, // Default: 10 seconds
    headers: {} // Additional headers
});
```

## 📖 Usage Examples

### Pilot Operations

#### Get Current Pilot
```typescript
const currentPilot = await api.Pilot_getCurrent();
console.log(`Current pilot: ${currentPilot.name} from ${currentPilot.base}`);
```

#### Get All Pilots
```typescript
const allPilots = await api.Pilot_getAll();
console.log(`Total pilots: ${allPilots.length}`);
```

#### Get Specific Pilot
```typescript
const pilot = await api.Pilot_get(123);
console.log(`Pilot ${pilot.name} is ${pilot.is_online ? 'online' : 'offline'}`);
```

#### Get Pilot Statistics
```typescript
const stats = await api.Pilot_getStats(123);
console.log(`Total flights: ${stats.all_time.total_flights}`);
console.log(`Total hours: ${stats.all_time.total_hours}`);
```

#### Get Pilot Flights
```typescript
// Get all flights
const allFlights = await api.Pilot_getAllFlights(123);

// Get latest flight
const latestFlight = await api.Pilot_getLatestFlight(123);

// Get flights from specific airport
const departures = await api.Pilot_getAllFlightsDepartures(123, 'KPHX');
const arrivals = await api.Pilot_getAllFlightsArrivals(123, 'KLAX');

// Get flights between specific airports
const routeFlights = await api.Pilot_getAllFlightDeparturesAndArrivals(123, 'KPHX', 'KLAX');
```

#### Get Pilot Screenshots
```typescript
const screenshots = await api.Pilot_getAllScreenshots(123);
screenshots.forEach(screenshot => {
    console.log(`Screenshot: ${screenshot.name} - ${screenshot.urls.fullsize}`);
});
```

### Airline Operations

#### Get All Airlines
```typescript
const airlines = await api.Airline_getAll();
console.log(`Total airlines: ${airlines.length}`);
```

#### Get Specific Airline
```typescript
const airline = await api.Airline_get(6082);
console.log(`Airline: ${airline.name} (${airline.abbr})`);
```

#### Get Airline Pilots
```typescript
const pilots = await api.Airline_getPilots(6082);
console.log(`Airline has ${pilots.length} pilots`);
```

#### Get Airline Statistics
```typescript
const stats = await api.Airline_getStats(6082);
console.log(`Total pilots: ${stats.total_pilots}`);
console.log(`Monthly flights: ${stats.month.total_flights}`);
```

#### Get Airline Flights
```typescript
// Get all flights
const allFlights = await api.Airline_getFlights(6082);

// Get flights from specific airport
const departures = await api.Airline_getAllFlightsDepartures(6082, 'KPHX');
const arrivals = await api.Airline_getAllFlightsArrivals(6082, 'KLAX');

// Get flights between specific airports
const routeFlights = await api.Airline_getAllFlightDeparturesAndArrivals(6082, 'KPHX', 'KLAX');
```

#### Get All Airline Roles
```typescript
// Get all Roles
const allRoles = await api.Airline_getAllRoles();
```

#### Get All Airline Ranks
```typescript
// Get all Ranks
const allRanks = await api.Airline_getAllRanks();
```

#### Set Airline Pilot Rank
```typescript
const rank_id = 6254 // Reef Recruit
const pilot_id = 25097 //NDBoost

const payload: FSHubPilotSetRankData = {
  rank_id: rank_id,
};

const response: FSHubApplicationResponse = await api.Airline_Airline_pilotSetRank(pilot_id, airline_id, payload);
```

## 🔍 Data Types

The library provides comprehensive TypeScript types for all FSHub data structures:

- **Pilot**: Pilot information, status, and location
- **Flight**: Flight details, aircraft, airports, and performance metrics
- **Airline**: Airline information and ownership details
- **PilotStats**: Comprehensive pilot statistics (all-time and monthly)
- **Screenshot**: Pilot screenshot metadata and URLs
- **Airport**: Airport information with weather and navigation data

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 🏗️ Development

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Development Mode
```bash
npm run dev
```

## 📚 API Reference

### Pilot Methods
- `Pilot_getCurrent()` - Get current authenticated pilot
- `Pilot_getAll()` - Get all pilots
- `Pilot_get(id)` - Get specific pilot by ID
- `Pilot_getLatestFlight(id)` - Get pilot's latest flight
- `Pilot_getAllFlights(id)` - Get all pilot flights
- `Pilot_getStats(id)` - Get pilot statistics
- `Pilot_getAllFlightsDepartures(id, airportCode)` - Get flights departing from airport
- `Pilot_getAllFlightsArrivals(id, airportCode)` - Get flights arriving at airport
- `Pilot_getAllFlightDeparturesAndArrivals(id, departureAirport, arrivalAirport)` - Get flights between airports
- `Pilot_getAllScreenshots(id)` - Get pilot screenshots

### Airline Methods
- `Airline_getAll()` - Get all airlines
- `Airline_get(id)` - Get specific airline by ID
- `Airline_getPilots(id)` - Get airline pilots
- `Airline_getPilotStats(id, pilotId)` - Get pilot stats within airline
- `Airline_getFlights(id)` - Get airline flights
- `Airline_getAllFlightsDepartures(id, airportCode)` - Get airline flights departing from airport
- `Airline_getAllFlightsArrivals(id, airportCode)` - Get airline flights arriving at airport
- `Airline_getAllFlightDeparturesAndArrivals(id, departureAirport, arrivalAirport)` - Get airline flights between airports
- `Airline_getAllScreenshots(id)` - Get airline screenshots
- `Airline_getStats(id)` - Get airline statistics
- `Airline_approveApplication` - approve an application to join the airline
- `Airline_rejectApplication` - reject an application to join the airline
- `Airline_pilotPointPurchase` - exchange pilots points for airline
- `Airline_pilotSetRank` - set a pilots rank
- `Airline_getAllRanks` - get all airline ranks
- `Airline_getAllRoles` -  get all airline roles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

ISC License

## 🔗 Links

- [FSHub Website](https://fshub.io)
- [FSHub API Documentation](https://fshub.io/api/docs)
- [NPM Package](https://www.npmjs.com/package/fshub-api)

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [FSHub API documentation](https://fshub.io/api/docs)
2. Review the test examples in this repository
3. Open an issue on GitHub
