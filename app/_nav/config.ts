import * as Pages from "../_pages/pages";

type ItemConfig = {
  label: string;
  href: string;
};

const professional: ItemConfig = {
  label: Pages.home.label,
  href: Pages.home.pathname,
};

const personal: ItemConfig = {
  label: Pages.me.label,
  href: Pages.me.pathname,
};

export const config = [professional, personal];
