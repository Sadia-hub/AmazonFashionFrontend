export function getCurrentUnixTime() {
    // Create a new Date object representing the current date and time
    const currentDate = new Date();
  
    // Get the current time in milliseconds since the Unix epoch
    const currentTimeMilliseconds = currentDate.getTime();
  
    // Convert milliseconds to seconds (Unix timestamp is in seconds)
    const currentUnixTimeSeconds = Math.floor(currentTimeMilliseconds / 1000);
  
    return currentUnixTimeSeconds;
  }