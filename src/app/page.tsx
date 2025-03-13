import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Card />
      </div>
    </main>
  );
}