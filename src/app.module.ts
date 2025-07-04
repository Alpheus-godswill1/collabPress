import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationMembersModule } from './organization-members/organization-members.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [AuthModule, OrganizationsModule, OrganizationMembersModule, QueueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
