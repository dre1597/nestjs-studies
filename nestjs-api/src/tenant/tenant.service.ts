import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from 'src/accounts/entities/account.entity';

@Injectable()
export class TenantService {
  private account: Account | null = null;

  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  get tenant() {
    return this.account;
  }

  set tenant(account: Account) {
    this.account = account;
  }

  async setTenantBySubdomain(subdomain: string) {
    this.tenant = await this.accountModel.findOne({
      where: {
        subdomain,
      },
      rejectOnEmpty: true,
    });
  }
}
