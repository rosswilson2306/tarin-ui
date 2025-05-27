"use client";

import { Listbox, ListboxItem } from "@heroui/react";

import { Site } from "@/clients/tarin/tarin.types";

export default function SitesList({ sites }: { sites: Site[] }) {
  return (
    <Listbox>
      {sites.map((site) => (
        <ListboxItem key={site.id}>{site.domain}</ListboxItem>
      ))}
    </Listbox>
  );
}
