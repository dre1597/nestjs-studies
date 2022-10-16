import { UserEntity } from '../../core/domain/entities/user.entity';
import { UserRepository } from '../../core/repositories/user.repository';
import { RepositoryCacheMemory } from './repository-cache-memory';

export class UsersCacheMemoryRepository
  extends RepositoryCacheMemory<UserEntity>
  implements UserRepository {}
