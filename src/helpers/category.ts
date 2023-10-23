import { Category } from "@prisma/client";

export interface CategoryWithBlurDataUrl extends Category {
  blurDataUrl: string;
}
