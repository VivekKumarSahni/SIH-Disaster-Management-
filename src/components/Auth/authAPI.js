


export function registerAgency(agencyData) {
    return new Promise(async(resolve) =>{
        console.log(agencyData);
     const response = await fetch('http://localhost:8080/auth',{
      method:'POST',
      body:JSON.stringify(agencyData),
      headers:{'content-type':'application/json'}
     })
     const data = await response.json()
     resolve({data});
    
    }
    )
  }