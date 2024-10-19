export function getAllAgency() {
  return new Promise(async (resolve, reject) => {
    try {
      const token = localStorage.getItem('token');
      console.log('frontend getAllAgency');
      console.log(token);

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await fetch('http://localhost:8080/agency', {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      resolve({ data });
    } catch (error) {
      console.error(error);
      reject(new Error('Failed to fetch agency data'));
    }
  });
}
