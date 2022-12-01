import OrderItem from "./OrderItem";

export default function InProcess({ inProcessOrders }: any) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center">
        {inProcessOrders?.map((order: any) => (
            <OrderItem order={order} key={order.id} />
        ))}
    </div>
  );
}
