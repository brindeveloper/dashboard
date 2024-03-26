import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import RecentOrders from "@/components/RecentOrders";
import Topcards from "@/components/Topcards";


export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <Topcards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
      
    </main>
  

  );
}
