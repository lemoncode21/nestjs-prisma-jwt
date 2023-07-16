import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import {Request,Response} from 'express'
import { JwtAuthGuard } from "src/authentication/auth.guard";


@Controller('users')
export class UsersController {
     constructor(private readonly userService : UsersService){}

     @Get()
     @UseGuards(JwtAuthGuard)
     async getAllUsers(@Req() request: Request, @Res() response: Response):Promise<any>{
          try{
               const result = await this.userService.getAllUser();
               return response.status(200).json({
                    status: 'Ok!',
                    message: 'Successfully fetch data!',
                    result: result
               })
          }catch(err){
               return response.status(500).json({
                    status: 'Ok!',
                    message : 'Internal Server Error!'
               })
          }
     }
}