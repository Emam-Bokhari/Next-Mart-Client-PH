"use server"
import { jwtDecode } from "jwt-decode"
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
        const result = await res.json();

        const storeCookies = await cookies()

        if (result?.success) {
            storeCookies.set("accessToken", result?.data?.accessToken)
        }

        return result;
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
        // console.log(result)
        const storeCookies = await cookies();
        if (result?.success) {
            storeCookies.set("accessToken", result?.data?.accessToken)
        }

        return result;
    } catch (error: any) {
        return Error(error)
    }
}

export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;

    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    } else {
        return null;
    }
};

export const recaptchaTokenVerification = async (token: string) => {
    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                secret: process.env.NEXT_PUBLIC_RECAPTCHA_SERVER_KEY as string,
                response: token,
            })
        })
        return response.json();
    } catch (error: any) {
        return Error(error)
    }
}

export const logOut = async () => {
    (await cookies()).delete("accessToken")
}