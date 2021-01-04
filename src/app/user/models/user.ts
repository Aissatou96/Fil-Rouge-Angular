import { Role } from "./role.enum";

export interface User {
        prenom:string,
        nom:string,
        avatar:string,
        email:string,
        username:string,
        password:string,
        statut:string,
        profil: Role
        token:string
    
    
}
