

async function getGeocode(agencyData) {
  try {
    const response = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=8gsJ3dqy4Z2QqtFQ5UjgJ5cfvJDOGgqE&location=${agencyData.address},${agencyData.city}-${agencyData.pinCode},${agencyData.state}`);
    const data = await response.json();
    const lat = data.results[0].locations[0].latLng.lat;
    const lng = data.results[0].locations[0].latLng.lng;
    const coordinates = [lat, lng];
    return { coordinates };
  } catch (error) {
  
    console.error("Error fetching geocode:", error);
    throw error; 
}
}


export async function registerAgency(agencyData) {
  try {
    const coordinates = await getGeocode(agencyData);
    agencyData = { ...agencyData, coordinates: [coordinates.coordinates[0], coordinates.coordinates[1]] };

    console.log(agencyData);
    const response = await fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      body: JSON.stringify(agencyData),
      headers: { 'content-type': 'application/json' }
    });

    const data = await response.json();
    return { data };
  } catch (error) {
    console.error("Error registering agency:", error);
    throw error;
  }
}

  



  export function checkUser(loginInfo) {
    return new Promise(async (resolve,reject) => {
      try {
        const response = await fetch('http://localhost:8080/auth/loginUser', {
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.json();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
      
      
    });
  }  
  export function checkAgency(loginInfo) {
    return new Promise(async (resolve,reject) => {
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          body: JSON.stringify(loginInfo),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.json();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
      
      
    });
  }  


  
export function signOut() {
  return new Promise(async (resolve) => {
    
    // in backend we will remove userloggedin id
    localStorage.removeItem('token');

    resolve({ data: "Success" });
  });
} 

