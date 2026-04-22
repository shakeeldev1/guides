import type { ComponentType } from "react";

import {
  ChartIcon,
  ChatIcon,
  DashboardIcon,
  FolderIcon,
  LogoutIcon,
  MegaphoneIcon,
  SettingsIcon,
  ShieldIcon,
} from "@/modules/guides/components/icons";

type SidebarItem = {
  label: string;
  isActive?: boolean;
  icon: ComponentType<{ className?: string }>;
};

const primaryItems: SidebarItem[] = [
  { label: "Home", icon: DashboardIcon },
  { label: "Files", icon: FolderIcon },
  { label: "Security", icon: ShieldIcon },
  { label: "Campaigns", icon: MegaphoneIcon },
  { label: "Guides", icon: ChartIcon, isActive: true },
  { label: "Inbox", icon: ChatIcon },
  { label: "Settings", icon: SettingsIcon },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-[74px] flex-col border-r border-[#ececf0] bg-[#f9f9fa] px-3 py-5 md:flex lg:w-[86px] lg:px-4">
      <div className="mb-8 flex items-center justify-center">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#ffb44c] to-[#f37b2a]" />
      </div>

      <nav className="flex flex-1 flex-col items-center gap-3">
        {primaryItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={`group flex h-10 w-10 items-center justify-center rounded-xl transition ${
                item.isActive
                  ? "bg-[#1f1f22] text-white"
                  : "text-[#8b8d99] hover:bg-white hover:text-[#27272c]"
              }`}
              aria-label={item.label}
            >
              <Icon className="h-5 w-5" />
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl text-[#8b8d99] transition hover:bg-white hover:text-[#27272c]"
        aria-label="Logout"
      >
        <LogoutIcon className="h-5 w-5" />
      </button>
    </aside>
  );
}
