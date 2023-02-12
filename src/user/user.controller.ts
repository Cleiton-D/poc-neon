import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async createUser(@Body() data) {
    console.log(data);
  }

  @Get()
  public async getUsers(@Body() data) {
    const start = performance.now();
    const result = await this.userService.getUsers();
    const end = performance.now();

    console.log(`Call to doSomething took ${end - start} milliseconds.`);

    return { time: end - start, response: result };
  }
}
