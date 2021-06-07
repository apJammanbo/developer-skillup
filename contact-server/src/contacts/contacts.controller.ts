import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  async findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Post()
  async create(
    @Body()
    { name, age, detail }: { name: string; age: number; detail: string },
  ): Promise<Contact> {
    return this.contactsService.create(name, age, detail);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    console.log(id);
    return this.contactsService.remove(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body()
    { name, age, detail }: { name: string; age: number; detail: string },
  ) {
    return this.contactsService.update(id, name, age, detail);
  }
}
