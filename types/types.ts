import * as z from "zod";

const email = z
	.string({ required_error: "Email is required" })
	.email({ message: "Invalid email address" });

const password = z
	.string()
	.regex(new RegExp(".*[A-Z].*"), "One uppercase character")
	.regex(new RegExp(".*[a-z].*"), "One lowercase character")
	.regex(new RegExp(".*\\d.*"), "One number")
	.regex(
		new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
		"One special character"
	)
	.min(8, "Must be at least 8 characters in length");

export const SignUpschema = z.object({
	username: z
		.string({
			required_error: "Username is required",
		})
		.min(3, "Username must be more than 3 character"),
	email: email,
	password: password,
	role: z.enum(["user", "lister"], {
		required_error: "Select one of the choice",
	}),
});

export type SignUpForm = z.infer<typeof SignUpschema>;

// Zod schema for sign in page
export const SignInschema = z.object({
	email: email,
	password: password,
});

export type SignInForm = z.infer<typeof SignInschema>;
