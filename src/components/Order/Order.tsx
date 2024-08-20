import { Avatar, Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import { CashIcon } from "../../assets/icons/CashIcon";
import { CardIcon } from "../../assets/icons/CardIcon";
import { EWalletIcon } from "../../assets/icons/EWalletIcon";
import { MinusIcon } from "../../assets/icons/MinusIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";

interface orderItem {
  name: string;
  unitPrice: number;
  count: number;
	image?: string;
}

const ItemCard = (item:orderItem) => {
  return (
    <Card className="bg-slate-200">
      <CardBody>
        <div className="grid grid-cols-6 gap-1 items-center">
					<div  className="col-span-1">
          <Avatar src={item.image} />
					</div>
          <div className="col-span-3 pl-3">
            <p>{item.name}</p>
            <p className="text-small text-default-500">{`$${item.unitPrice*item.count}`}</p>
          </div>
          <div className="col-span-2 flex items-center">
            <Button
              size="sm"
              className="p-1 mx-2 bg-orange-400"
              isIconOnly
              variant="faded"
              aria-label="minus"
              radius="full"
            >
              <MinusIcon />
            </Button>
            <p>{item.count}</p>
            <Button
              size="sm"
              className="p-1 mx-2  bg-orange-400"
              isIconOnly
              variant="faded"
              aria-label="plus"
              radius="full"
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const Order = () => {
	const orderItems:orderItem[] = [
		{ name: "Fish Roll", unitPrice: 5, count: 2, image:"src/assets/images/fishRoll.jpg"  },
		{ name: "Chicken Pizza", unitPrice: 20, count: 1, image:"src/assets/images/pizza.jpg" },
		{ name: "Tuna Sandwich", unitPrice: 10, count: 2, image:"src/assets/images/tunaSandwich.jpg" },
	];
  return (
    <Card className="max-w-[22rem]">
      <CardHeader>
        <div className="flex w-full gap-2 justify-between items-center">
          <p className="font-semibold">New Order Bill</p>
          <p className="text-small text-default-500">Sunday, 28 Oct, 2021</p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-3.5">
					{orderItems.map((item:orderItem)=>(
						<ItemCard {...item} />
					))}
       
        </div>
        <div className="flex flex-col gap-1 pt-5">
          <div className="flex  gap-1 justify-between items-center">
            <p className="text-sm">Sub Total</p>
            <p className="font-semibold  text-slate-950">$50.00</p>
          </div>
          <div className="flex  gap-1 justify-between items-center">
            <p className="text-sm">Tax 10% (VAT Included)</p>
            <p className="font-semibold text-slate-950">$5.00</p>
          </div>
          <Divider className="my-4" />
          <div className="flex gap-1 justify-between items-center">
            <p className="text-lg font-medium text-red-400">Total</p>
            <p className="text-lg font-semibold text-green-600">$55.00</p>
          </div>
        </div>
        <p className="font-semibold pt-5 pb-2">Payment Method</p>
        <div className="flex items-center justify-center">
          <Button
            size="lg"
            className="p-1 mx-2"
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="cash"
          >
            <CashIcon />
          </Button>
          <Button
            size="lg"
            className="p-1 mx-2"
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="card"
          >
            <CardIcon />
          </Button>
          <Button
            size="lg"
            className="p-1 mx-2"
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="e-wallet"
          >
            <EWalletIcon />
          </Button>
        </div>
        <Button color="danger" className="mt-4">
          Place Order
        </Button>
      </CardBody>
    </Card>
  );
};

export default Order;
