"use server";
import "server-only";
import {
  AuthServiceResponse,
  FieldsFormLogin,
  FieldsFormSignUp
} from "@/@types/Auth";
import { api } from "@/services/api";
import { createSession, deleteSession, getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function login(
  fields: FieldsFormLogin
): Promise<AuthServiceResponse> {
  try {
    const { email, password } = fields;

    const { data } = await api.post<{
      token: string;
      userId: string;
      role: string;
    }>("/auth/login", {
      email: email.value.trim(),
      password: password.value.trim()
    });

    createSession(data.token);

    return {
      userId: data?.userId,
      token: data?.token,
      role: data?.role
    };
  } catch (error: any) {
    const { status } = error.response;

    switch (status) {
      case 401:
        return { error: "Email ou senha incorretos" };

      case 400:
        return { error: "Por favor, preencha todos os campos" };

      case 500:
        return {
          error:
            "Ocorreu um erro no servidor, por favor tente novamente mais tarde"
        };

      default:
        return { error: "Ocorreu um erro por favor tente novamente" };
    }
  }
}

export async function signUp(
  fields: FieldsFormSignUp
): Promise<AuthServiceResponse> {
  try {
    const { name, confirmPassword, email, password, username } = fields;

    const { data } = await api.post<{
      token: string;
      userId: string;
      role: string;
    }>("/auth/signup", {
      name: name.value.trim(),
      username: username.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
      confirmPassword: confirmPassword.value.trim()
    });

    createSession(data.token);

    return {
      userId: data?.userId,
      token: data?.token,
      role: data?.role
    };
  } catch (error: any) {
    const { status, data } = error.response;

    switch (status) {
      case 400:
        return { error: "Por favor, preencha todos os campos" };

      case 409:
        if (data?.message.includes(" name")) {
          return { error: "Esse nome já existe! tente outro por favor" };
        }
        if (data?.message.includes(" username")) {
          return {
            error: "Esse nome de usuário já existe! tente outro por favor"
          };
        }

        return { error: "Esse email já existe! tente outro por favor" };

      case 500:
        return {
          error:
            "Ocorreu um erro no servidor, por favor tente novamente mais tarde"
        };

      default:
        return { error: "Ocorreu um erro, por favor tente novamente" };
    }
  }
}

export async function auth(): Promise<{ userId: string; role: string } | void> {
  const session = await getSession();

  if (!session) return;

  try {
    const { data } = await api.get("/auth/", {
      headers: { Authorization: session }
    });

    const { userId, role } = data;

    if (!userId || !role) return;

    return { userId, role };
  } catch (error) {
    return;
  }
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
