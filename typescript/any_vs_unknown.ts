let looseData: any = "Hello";

// TS allows ALL of this (even though it will crash at runtime)
looseData.toUpperCase(); // OK
// looseData.toFixed(); // OK (Runtime Crash!)
// looseData.foo.bar; // OK (Runtime Crash!)
