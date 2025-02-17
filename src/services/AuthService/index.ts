/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { cookies } from "next/headers"
import { FieldValues } from "react-hook-form"

export const registerUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        console.log(res.status)
        return res.json()
    } catch (error: any) {
        return Error(error)
    }
}

export const loginUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        });

        const result = await res.json()
        console.log(result)
        const storeCookies = await cookies();
        if (result?.success) {
            storeCookies.set("accessToken", result?.data?.accessToken)
        }

        return result;
    } catch (error: any) {
        return Error(error)
    }
}

