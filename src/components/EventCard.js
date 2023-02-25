import React from "react";
import Image from "next/image";
import Box from "./Box";
import Button from "./Button";
import { Icon } from "@iconify/react";

function EventCard({ ...props }) {
  return (
    <div className="border border-black/10 rounded-lg w-full relative">
      <div class="absolute -z-10 inset-0 bg-cover bg-center bg-no-repeat bg-[url('/events/blue.png')]" />
      <div class="absolute -z-10 inset-0 bg-white bg-opacity-80" />
      <Box className="flex w-full justify-between">
        <div className="w-full">
          <div className="flex items-center gap-x-[8px] text-xxSmall">
            <div className="flex items-center gap-x-[8px] px-[8px] py-[8px] bg-green-400 rounded-r-lg ml-[-24px] pl-[24px]">
              <div className="relative w-[20px] h-[20px]">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-bold">AIRDROP</p>
            </div>
            <div className="flex items-center gap-x-[8px] px-[8px] bg-black/10 py-[8px] rounded-lg">
              <Icon
                icon="material-symbols:calendar-today"
                className="w-[16px] h-[16px]"
              />
              <p className="font-bold">Harvest</p>
            </div>
            <div>
              <p className="flex items-center gap-x-[8px] px-[8px]">
                <Icon
                  icon="mdi:clock-time-three"
                  className="w-[16px] h-[16px] text-black/70"
                />
                <span className="font-bold">Started</span> 2022-09-13 08:57:15
              </p>
            </div>
          </div>
          <div className="pt-[16px] flex flex-col gap-y-[12px]">
            <div>
              <p className="text-small">🍎🍌🍍The Fruit Salad Game🍆🥦🥕</p>
              <div className="flex">
                <h2 className="text-[30px] font-bold">Manure</h2>
                <p className="pl-[10px] pt-[16px] text-xSmall">x 100</p>
              </div>
            </div>
            <div className="flex gap-x-[16px] text-xSmall">
              <p>Wallet Transactions:</p>
              <div className="flex gap-x-[4px]">
                <p className="font-bold">44</p>
                <p>Success</p>
              </div>
              <div className="flex gap-x-[4px]">
                <p className="font-bold">44</p>
                <p>Processing</p>
              </div>
              <div className="flex gap-x-[4px]">
                <p className="font-bold">44</p>
                <p>Failed</p>
              </div>
            </div>
            <div className="w-full h-[16px] bg-black/10 rounded-full">
              <div className="w-[200px] rounded-full h-full bg-gradient-to-r from-[#FF6A00] to-[#FF2500]" />
            </div>
          </div>
          <div className="flex pt-[16px] gap-x-[8px]">
            <Button className="bg-black text-white">More Details</Button>
            <Button className="border border-black">Cancel</Button>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-checkbox"
                className="text-black focus:ring-0 m-[8px]"
              />
              <label htmlFor="email-checkbox text-small">
                Receive report on email
              </label>
            </div>
          </div>
        </div>
        <div className="relative w-[303px] h-[216px]">
          <Image
            src="/events/blue.png"
            alt="blue"
            fill
            className="object-cover"
          />
        </div>
      </Box>
    </div>
  );
}

export default EventCard;
