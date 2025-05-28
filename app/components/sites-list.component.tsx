"use client";

import { Listbox, ListboxItem } from "@heroui/react";

import { Site } from "@/clients/tarin/tarin.types";
import { listItem } from "@/components/primitives";

export default function SitesList({ sites }: { sites: Site[] }) {
  return (
    <Listbox>
      {sites.map((site) => (
        <ListboxItem key={site.id} className={listItem()}>
          {site.domain}
        </ListboxItem>
      ))}
    </Listbox>
  );
}
