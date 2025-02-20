export interface ICategory {
    _id: string;
    name: string;
    slug: string;
    description?: string;
    parent?: string | null;
    isActive: boolean;
    createdBy: string;
    icon?: string;
    children: ICategory[]
    createdAt?: string;
    updatedAt?: string;
}