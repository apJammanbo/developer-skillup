import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  // 전체 연락처 리스트를 가지고 온다.
  findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  // 연락처를 가지고온다.(id)
  findOne(id: number): Promise<Contact> {
    return this.contactRepository.findOne(id);
  }

  // 연락처를 삭제한다.
  async remove(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }

  // 연락처를 추가한다.
  create(name: string, age: number, detail: string) {
    const contact = {
      name,
      detail,
      age,
    };
    return this.contactRepository.save(contact);
  }

  // 연락처를 수정한다.
  async update(id: number, name: string, age: number, detail: string) {
    const contact = await this.contactRepository.findOne(id);
    contact.name = name;
    contact.age = age;
    contact.detail = detail;
    return this.contactRepository.save(contact);
  }
}
