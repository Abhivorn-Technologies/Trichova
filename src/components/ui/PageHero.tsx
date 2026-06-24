"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: React.ReactNode;
  description: string;
  imageSrc?: string;
}

export default function PageHero({ title, description, imageSrc }: PageHeroProps) {
  return <div className="h-[var(--navbar-height)] w-full shrink-0" />;
}
