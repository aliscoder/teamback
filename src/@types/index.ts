export declare interface CategoryType {
  id: number;
  name: string;
}

export declare interface LocationType extends CategoryType {
  id: number;
  name: string;
  provinceId: number;
}
export declare interface JobType extends CategoryType {
  id: number;
  name: string;
  categoryId: number;
}
