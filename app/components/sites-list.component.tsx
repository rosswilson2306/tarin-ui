"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@heroui/react";
import { EyeIcon, Pencil, Trash } from "lucide-react";
import { Key, useCallback } from "react";

import { Site } from "@/clients/tarin/tarin.types";

const columns = [
  {
    key: "domain",
    label: "DOMAIN",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

export default function SitesList({ sites }: { sites: Site[] }) {
  const renderCell = useCallback((site: Site, columnKey: Key) => {
    const cellValue = site[columnKey as keyof Site];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-4">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit site">
              <button className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Pencil />
              </button>
            </Tooltip>
            <Tooltip color="danger" content="Delete site">
              <button className="text-lg text-danger cursor-pointer active:opacity-50">
                <Trash />
              </button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table isStriped aria-label="Sites table">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {sites.map((site) => (
          <TableRow key={site.id}>
            {(columnKey) => (
              <TableCell>{renderCell(site, columnKey)}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
