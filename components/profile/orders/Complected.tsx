import OrderItem from "./OrderItem";

export default function Complected({ complectedOrders }: any) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center">
        {complectedOrders?.map((order: any) => (
            <OrderItem key={order.id} />
        ))}
    </div>
  );
}
