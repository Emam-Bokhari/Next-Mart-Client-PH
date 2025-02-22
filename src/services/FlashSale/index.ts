"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export const addFlashSale = async (productData: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
            method: "POST",
            headers: {
                "Authorization": (await cookies()).get("accessToken")!.value,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
        revalidateTag("PRODUCT")
        return res.json()
    } catch (error: any) {
        return Error(error)
    }
}

export const getFlashSaleProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/flash-sale`, {
            next: {
                tags: ["PRODUCT"]
            }
        });
        return res.json()
    } catch (error: any) {
        return Error(error)
    }
}