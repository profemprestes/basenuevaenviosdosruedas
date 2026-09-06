export interface Coordinate {
  lat: number;
  lng: number;
}

export interface RouteResult {
  distanceKm: number;
  durationMin: number;
  routeCoords: [number, number][];
}

// Calculate Haversine distance in km
function calculateHaversineDistance(c1: Coordinate, c2: Coordinate): number {
  const R = 6371; // Earth radius in km
  const dLat = ((c2.lat - c1.lat) * Math.PI) / 180;
  const dLon = ((c2.lng - c1.lng) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((c1.lat * Math.PI) / 180) *
      Math.cos((c2.lat * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const straightDistance = R * c;
  // Factor in urban street topology (+25%)
  return Math.round(straightDistance * 1.25 * 10) / 10;
}

export function useGoogleRoute() {
  const fetchRoute = async (
    origin: Coordinate,
    destination: Coordinate
  ): Promise<RouteResult | null> => {
    try {
      // Try OSRM public routing API for driving in MDQ
      const url = `https://router.project-osrm.org/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (data.routes && data.routes.length > 0) {
          const route = data.routes[0];
          return {
            distanceKm: Math.round((route.distance / 1000) * 10) / 10,
            durationMin: Math.round(route.duration / 60),
            routeCoords: route.geometry.coordinates as [number, number][],
          };
        }
      }
    } catch {
      // Fallback to geometric calculation if OSRM is unreachable
    }

    const dist = calculateHaversineDistance(origin, destination);
    return {
      distanceKm: dist,
      durationMin: Math.round(dist * 3.5),
      routeCoords: [
        [origin.lng, origin.lat],
        [destination.lng, destination.lat],
      ],
    };
  };

  return { fetchRoute };
}
