"use client";
import type { SubscribeProps } from "@/types";
import { subscribeAction } from "@/data/actions";
import { useActionState } from "react";


const INITIAL_STATE = {
    zodErrors: null,
    strapiError: null,
    errorMessage: null,
    successMessage: null,
}

export function Subscribe({
    headline,
    content,
    placeholder,
    buttonText,
}: Readonly<SubscribeProps>) {
    const [formState, formAction] = useActionState(subscribeAction, INITIAL_STATE);

    // console.log(formState, "Our form state")

    const zodErrors = formState?.zodErrors?.email;
    const strapiError = formState?.strapiError?.message;
    const errorMessage = strapiError || zodErrors || formState?.errorMessage;
    const successMessage = formState?.successMessage;

    return (
        <section className="newsletter container">
            <div className="newsletter__info">
                <h4>{headline}</h4>
                <p className="copy">{content}</p>
            </div>
            <form action={formAction} className="newsletter__form">
                <input
                    name="email"
                    type="text"
                    placeholder={errorMessage || successMessage || placeholder}
                    className={`newsletter__email ${errorMessage ? "newsletter__email--error" : ""}`}
                />
                <button
                    type="submit"
                    className="newsletter__subscribe btn btn--turquoise btn--medium"
                >
                    {buttonText}
                </button>
            </form>
        </section>
    );
}