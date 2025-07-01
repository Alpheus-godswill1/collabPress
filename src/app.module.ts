import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationMembersModule } from './organization-members/organization-members.module';

@Module({
  imports: [AuthModule, OrganizationsModule, OrganizationMembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
