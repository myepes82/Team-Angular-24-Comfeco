export interface IUser{
    nickName?: String;
    email?: String;
    authorities?: String[];
    password?: String; 
    active?: Boolean;
}

export class User implements IUser{
    constructor(
        public nickName?: String,
        public email?: String,
        public authorities?: String[],
        public active?: Boolean,
        public password?: String
    ){}
    
}