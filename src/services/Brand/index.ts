//  get all brands
export const getAllBrands = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/brand`, {
            next: {
                tags: ["Brands"],
            },
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};