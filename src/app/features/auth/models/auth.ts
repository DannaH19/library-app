export interface loginRequest {
    email: String; 
    password: String;
}

export interface loginResponse {
     user: {
        id: String,
        name: String,
        email: String,
        role: String,
    },
    token: String;
}