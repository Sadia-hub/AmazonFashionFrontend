const apiCall = async (endpoint, body, method, returnType = "", token = "") => {
    try {
      const response = await fetch(`http://localhost:8080/${endpoint}`, {
        method, // GET, POST, PUT, DELETE
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body) // Ensure the body is stringified for non-GET requests
      });
  
      let responseText = "";
  
      if (response) {
        const { status } = response;
  
        if (status !== 200 || returnType === "TEXT") {
          responseText = await response.json();
        } else {
          responseText = await response.json(); // Fixed this line, added "await"
        }
      }
  
      return responseText;
    } catch (err) {
      console.error(err); // Changed from console.log to console.error for better visibility of errors
      return null;
    }
  };
  
  module.exports = apiCall;
  