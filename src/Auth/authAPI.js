
export function registerAgency(agencyData) {
    return new Promise(async(resolve) =>{
        console.log(agencyData);
     const response = await fetch('http://localhost:8080/auth/signup',{
      method:'POST',
      body:JSON.stringify(agencyData),
      headers:{'content-type':'application/json'}
     })
     const data = await response.json()
     resolve({data});
    
    }
    )
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
        const response = await fetch('http://localhost:8080/auth/loginAgency', {
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


  
export function signOut(userId) {
  return new Promise(async (resolve) => {
    
    // in backend we will remove userloggedin id

    resolve({ data: "Success" });
  });
} 

