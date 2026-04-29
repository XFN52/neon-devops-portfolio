import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'cyan' | 'purple' | 'green';
}

export interface TechItem {
  name: string;
  category: string;
  level: number; // 1-100
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
}