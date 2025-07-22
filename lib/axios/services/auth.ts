// app/services/examSession.ts
import http from "@/lib/axios/axios";

const prefix = "auth";

export const refreshToken = () => http.post(`${prefix}/refreshtoken`);
