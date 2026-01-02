import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  icon: LucideIcon;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface TrustItem {
  title: string;
  description: string;
  icon: LucideIcon;
}