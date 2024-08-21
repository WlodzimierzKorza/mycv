import { ReactNode } from "react";

export interface PersonalData {
  name: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface List {
  name: string;
  title?: string;
  date?: string;
  link?: string;
  skills?: string[];
  description?: string;
}

export interface Content {
  text?: string;
  list?: List[];
  listType?: string;
}

export interface Summary {
  title: string;
  content: Content;
}
export interface Data {
  personalData: PersonalData;
  summary?: Summary[];
}
export interface DataItemProps {
  icon: any;
  text: string;
}

export interface ChipListItemProps {
  title: string;
  content: Content;
}

export interface DefaultListProps {
  title: string;
  content: Content;
}

export interface SummaryItemProps {
  title: string;
  content?: Content;
}

export interface DataSectionProps {
  personalData: PersonalData;
}

export interface SummaryItemBlockProps {
  title: string;
  children: ReactNode;
}
