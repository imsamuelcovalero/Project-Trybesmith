// import { sign, SignOptions } from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import { ILogin } from '../interfaces/login.interface';
// import { IUser } from '../interfaces/user.interface';

// dotenv.config();

// const jwtSecret = 'secret';

// export default async function generateToken(user: IUser | ILogin) {
//   const signOptions: SignOptions = {
//     expiresIn: '7d',
//     algorithm: 'HS256',
//   };

//   console.log('userToken_id_username', user.id, user.username);

//   const token = sign({ id: user.id, username: user.username }, jwtSecret, signOptions);
//   return token;
// }