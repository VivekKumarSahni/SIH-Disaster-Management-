export function getAllAgency() {
    return new Promise(async(resolve) =>{
       
     const response = await fetch('http://localhost:8080/agency');

     const data = await response.json();
     resolve({data});
    
    }
    )
  }
 