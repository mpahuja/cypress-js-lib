/**
 * Generate a random test phone number
 */
export function generatePhoneNumber(country = "US") {
    // random digit generator
    // tslint:disable-next-line
    const d = () => String(Math.floor(Math.random() * 10));
  
    if (country === "US") {
      return `925555${d()}${d()}${d()}${d()}`;
    }
  
    throw new Error("Unknown country");
}