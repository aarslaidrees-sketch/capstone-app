async function getHealthData() {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
  
    const response = await fetch(`${baseUrl}/api/health`, {
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