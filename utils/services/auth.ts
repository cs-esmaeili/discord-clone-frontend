// app/services/examSession.ts
import http from "@/utils/axios";

const prefix = "auth";

export const refreshToken = () => http.post(`${prefix}/refreshtoken`);
