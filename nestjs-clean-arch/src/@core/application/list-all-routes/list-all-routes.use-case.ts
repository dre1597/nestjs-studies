import { RouteRepositoryInterface } from '../../domain';
import { ListAllRoutesOutput } from './types';

export class ListAllRoutesUseCase {
  constructor(private routeRepository: RouteRepositoryInterface) {}

  async execute(): Promise<ListAllRoutesOutput> {
    const routes = await this.routeRepository.findAll();
    return routes.map((route) => route.toJSON());
  }
}
