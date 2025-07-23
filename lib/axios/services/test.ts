// app/services/examSession.ts
import http from "@/lib/axios/axios";

const prefix = "test";

export const check = () => http.post(`${prefix}/check`);
