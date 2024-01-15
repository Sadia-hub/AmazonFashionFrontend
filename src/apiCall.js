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
          body
      });

      let responseText = "";

      if (response.ok) {
          // Check if the content type is JSON
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
              responseText = await response.json();
          } else {
              // Handle non-JSON content here (optional)
              responseText = await response.text();
          }
      } else {
          // Handle non-OK response status here
          responseText = await response.text();
      }

      return responseText;
  } catch (err) {
      console.log(err);
      return null;
  }
};

module.exports = apiCall;
