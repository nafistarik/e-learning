import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function extractDate(timestamp : string) {
  return timestamp.split('T')[0]; // Extracts the date part before 'T'
}