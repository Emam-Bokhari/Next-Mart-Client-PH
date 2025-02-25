"use server"

import { cookies } from "next/headers"

export const createOrder = async (orderData: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/order`, {
            method: "POST",
            headers: {
                "Authorization": (await cookies()).get("accessToken")!.value,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData),
        })
        return res.json();
    } catch (error: any) {
        return Error(error)
    }
}