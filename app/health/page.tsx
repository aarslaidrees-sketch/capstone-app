async function getHealthData() {
    const response = await fetch("http://localhost:3000/api/health", {
      cache: "no-store",
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch health data");
    }
  
    return response.json();
  }
  
  export default async function Health() {
    const data = await getHealthData();
  
    return (
      <main>
        <h1>Health Check</h1>
        <p>Status: {data.status}</p>
        <p>Service: {data.service}</p>
        <p>Checked at: {data.timestamp}</p>
      </main>
    );
  }