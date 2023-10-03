import { RoleType } from "./enums/roleType";

export interface UserTokenDTO {
    id: number,
    email: string,
    role: RoleType,
    token: string
}