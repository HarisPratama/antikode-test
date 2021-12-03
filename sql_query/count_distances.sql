SELECT *, 
   111.111 *
    DEGREES(ACOS(LEAST(1.0, COS(RADIANS(a.latitude))
         * COS(RADIANS(b.lat))
         * COS(RADIANS(a.longitude - b.lng))
         + SIN(RADIANS(a.latitude))
         * SIN(RADIANS(b.lat))))) AS distance_in_km
  FROM outlets AS a
  JOIN locations as b
