import type { ComponentType } from "react";

import {
  ChartIcon,
  DashboardIcon,
  FolderIcon,
  MegaphoneIcon,
  SettingsIcon,
} from "@/modules/guides/components/icons";

type MobileItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
  isActive?: boolean;
};

const items: MobileItem[] = [
  { label: "Home", icon: DashboardIcon },
  { label: "Files", icon: FolderIcon },
  { label: "Guides", icon: ChartIcon, isActive: true },
  { label: "Ads", icon: MegaphoneIcon },
  { label: "Settings", icon: SettingsIcon },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-30 rounded-2xl border border-[#e9eaf0] bg-white/95 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
      <ul className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <button
                type="button"
                className={`flex w-full flex-col items-center justify-center rounded-xl py-2 text-[10px] font-medium transition ${
                  item.isActive
                    ? "bg-[#1f1f22] text-white"
                    : "text-[#7d7f8c] hover:bg-[#f3f4f8]"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="mt-1">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
