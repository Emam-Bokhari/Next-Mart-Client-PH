"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  citySelector,
  grandTotalSelector,
  orderedProductSelector,
  orderSelector,
  shippingAddressSelector,
  shippingCostSelector,
  subTotalSelector,
} from "@/redux/features/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";

export default function PaymentDetails() {
  const subtotal = useAppSelector(subTotalSelector);
  const shippingCost = useAppSelector(shippingCostSelector);
  const grandTotal = useAppSelector(grandTotalSelector);
  const city = useAppSelector(citySelector);
  const shippingAddress = useAppSelector(shippingAddressSelector);
  const order = useAppSelector(orderSelector);
  const products = useAppSelector(orderedProductSelector);

  const handleOrder = () => {
    try {
      if (products.length === 0) {
        return toast.error(
          "Please make sure you add must be at least one product"
        );
      }
      if (!city) {
        return toast.error("Please make sure you add city");
      }
      if (!shippingAddress) {
        return toast.error("Please make sure you add shipping address");
      }

      toast.success("Order created successfully");

      console.log(order);
    } catch (error: any) {
      console.log(error);
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <p className="text-gray-500 ">Subtotal</p>
          <p className="font-semibold">{currencyFormatter(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Discount</p>
          <p className="font-semibold">0</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 ">Shipment Cost</p>
          <p className="font-semibold">{currencyFormatter(shippingCost)}</p>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-500 ">Grand Total</p>
        <p className="font-semibold">{currencyFormatter(grandTotal)}</p>
      </div>
      <Button
        onClick={handleOrder}
        className="w-full text-xl font-semibold py-5"
      >
        Order Now
      </Button>
    </div>
  );
}
