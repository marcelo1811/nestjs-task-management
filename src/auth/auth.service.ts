import { UsersRepositoy } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepositoy)
    private usersRepository: UsersRepositoy,
  ) {}
}
