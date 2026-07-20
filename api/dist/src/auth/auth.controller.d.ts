import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(signUpDto: any): Promise<{
        id: string;
        email: string;
    }>;
    login(signInDto: any): Promise<{
        access_token: string;
    }>;
}
