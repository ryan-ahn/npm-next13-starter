import type { Metadata } from "next";
import { ISampleLayout } from "@interface/layout";
import { META_PAGE } from "@constants/data/meta";

export const metadata: Metadata = {
  title: META_PAGE.sample.title,
  description: META_PAGE.sample.description,
};

export default function Layout({ children }: ISampleLayout) {
  return <>{children}</>;
}
