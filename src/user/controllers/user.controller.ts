/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UserAddDtoResponse, UserAddDto } from '../dto/user.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('add')
    async add(
        @Body() data: UserAddDto,
    ): Promise<UserAddDtoResponse> {
        const user = await this.userService.add(data);
        return {
            user,
        };
    }
}
