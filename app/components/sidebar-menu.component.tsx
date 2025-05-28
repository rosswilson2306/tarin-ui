"use client";

import AddSiteModalButton from "./add-site-modal-button.component";

export default function SidebarMenu() {
  return (
    <ul className="w-64 flex flex-col bg-primary-100/50 rounded-lg py-4 px-2">
      <li>
        <AddSiteModalButton />
      </li>
    </ul>
  );
}
