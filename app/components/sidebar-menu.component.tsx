"use client";

import { Listbox, ListboxItem } from "@heroui/react";

import AddSiteModalButton from "./add-site-modal-button.component";

export default function SidebarMenu() {
  return (
    <Listbox className="max-w-xs flex flex-col bg-primary-100/50 rounded-lg py-4 px-2">
      <ListboxItem>
        <AddSiteModalButton />
      </ListboxItem>
    </Listbox>
  );
}
