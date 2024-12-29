export const SUN_SIZE = 3;  // Base size for visibility

// Scaled sizes to maintain visibility while showing relative proportions
export const PLANET_SIZES = {
    SUN: SUN_SIZE,
    MERCURY: 0.4,    // Smallest but visible
    VENUS: 0.6,      // Slightly larger than Mercury
    EARTH: 0.6,      // Similar to Venus
    MARS: 0.5,       // Between Mercury and Venus
    JUPITER: 1.8,    // Largest planet
    SATURN: 1.6,     // Slightly smaller than Jupiter
    URANUS: 1.0,     // Medium sized
    NEPTUNE: 1.0,    // Similar to Uranus
    MOON: 0.2        // Visible but clearly smaller than Earth
};

// Logarithmically scaled distances to fit viewport
export const ORBITAL_DISTANCES = {
    MERCURY: 6,      // Closest to Sun
    VENUS: 10,       // Clear gap from Mercury
    EARTH: 15,       // Distinct from Venus
    MARS: 20,        // Outside Earth's orbit
    JUPITER: 28,     // Start of outer planets
    SATURN: 36,      // Clear separation from Jupiter
    URANUS: 44,      // Outer region
    NEPTUNE: 52,     // Edge of system
    MOON: 2          // Distance from Earth
};

// Orbital speeds (rotations per second)
export const ORBITAL_SPEEDS = {
    MERCURY: 0.8,
    VENUS: 0.6,
    EARTH: 0.4,
    MARS: 0.3,
    JUPITER: 0.15,
    SATURN: 0.1,
    URANUS: 0.07,
    NEPTUNE: 0.05,
    MOON: 2.0
};