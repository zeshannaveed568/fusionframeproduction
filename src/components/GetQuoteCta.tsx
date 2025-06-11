"use client";
import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState, lazy, Suspense } from "react";

const CustomButton = lazy(() => import("../components/CustomButton"));

const GetQuoteCta = () => {
  return (
    <div className='container mx-auto px-4 py-8 text-white flex flex-col gap-y-8 md:flex-row md:gap-x-8 justify-center items-center'>
      <h1 className='text-3xl font-bold font-georama text-center'>
        Ready to start your video?
      </h1>
      <Suspense fallback={<Spinner />}>
        <CustomButton ctaText='Get a Quote' ctaUrl='/contact' />
      </Suspense>
    </div>
  );
};

export default GetQuoteCta;
