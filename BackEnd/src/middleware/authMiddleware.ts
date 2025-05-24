import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jtw";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        name: string;
        email: string;
        admin: boolean;
      };
    }
  }
}

export const authMiddleware = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Token mal formatado" });
  }

  try {
    const decoded = verifyToken(token);
    console.log('Decoded token:', decoded);

    if (!decoded.user || !decoded.user.admin) {
      console.log('Admin check failed:', { 
        decoded: decoded,
        adminValue: decoded?.user?.admin,
        typeofAdmin: typeof decoded?.user?.admin
      });
      return res.status(403).json({
        message: "Acesso negado. Permissão de administrador necessária"
      });
    }
    
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ 
      message: "Token inválido",
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};