import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { TenantService } from '../tenant.service';

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(private tenantService: TenantService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const subdomain = request.user.subdomain;
    await this.tenantService.setTenantBySubdomain(subdomain);
    return true;
  }
}
