// components/admin/LowStockAlerts.tsx
import { useFirestoreCollection } from "@/hooks/useFirestore";
import { where } from "firebase/firestore";
import { AlertTriangle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  stock: number;
  minStockLevel: number;
}

export const LowStockAlerts = () => {
  const { data: products, loading, error } = useFirestoreCollection<Product>(
    "products",
    [where("stock", "<=", "minStockLevel")] // Adjust query as needed
  );

  if (loading) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-700">Checking stock levels...</p>
      </div>
    );
  }

  if (error) {
    console.error("Error loading low stock alerts:", error);
    return null; // Don't show anything on error
  }

  const lowStockItems = Array.isArray(products) 
    ? products.filter(p => p.stock <= (p.minStockLevel || 10))
    : [];

  if (lowStockItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600" />
        <h3 className="font-semibold text-yellow-800">Low Stock Alerts</h3>
      </div>
      <div className="space-y-2">
        {lowStockItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span className="text-yellow-700">{item.name}</span>
            <span className="text-yellow-600 font-semibold">
              Only {item.stock} left
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};