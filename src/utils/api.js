export function fetchAPI(date) {
  // Simulate fetching available times for the given date
  // In a real-world scenario, you'd make an HTTP request to your server or an external API
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  // For demonstration, let's assume all times are available for any date
  return availableTimes;
}

export function submitAPI(formData) {
  // Simulate form submission
  // In a real-world scenario, you'd make an HTTP POST request to your server or an external API
  console.log('Form submitted:', formData);

  // For demonstration, let's assume the submission is always successful
  return true;
}

export function initializeTimes() {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
  return fetchAPI(today);
}
