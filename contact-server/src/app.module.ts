import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TypeOrmModule.forRoot(), ContactsModule],
})
export class AppModule {}
